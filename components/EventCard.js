import { View, Text, Image, ScrollView, Button, Modal,Pressable } from 'react-native'
import React, { useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { joinEvent } from '../redux/EventSlice';
import FullEventCard from './FullEventCard'


export default function EventCard({ item }) {
    // user id
    const dispatch = useDispatch()
    const userId = '23'
    const handleJoin = () => {
        dispatch(joinEvent({ uId: userId, eId: item.eventId }))
    }
    const handleCancel = () => {
        console.warn('cancelled')
    }
    const [modalVisible, setModalVisible] = useState(false);


    return (
        <View className='bg-white p-3 shadow mb-3 rounded-lg'>
            <View className='flex-row items-center'>
                <Image
                    source={require('../assets/profilepic.jpg')}
                    className='rounded-full h-11 w-11'
                />
                <View className='px-3 flex-1'>
                    <Text className='text-black text-lg font-bold'>{item.eventName}</Text>
                    <Text>Organized by {item.organizerName}</Text>
                </View>
                <View className='flex-row '>

                    <Button title='View'
                        onPress={() => setModalVisible(true)}
                    />
                    {console.warn(item.eventId, item.volunteerId?.includes(userId))}

                    {item.volunteerId?.includes(userId) ?
                        <Button title="Cancel" color="red" onPress={handleCancel} /> :
                        <Button title="Join" color="green" onPress={handleJoin} />
                    }
                </View>

            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View className='justify-center items-center mt-7 h-96'>
                    <FullEventCard  item={item}/>
                    <Pressable
                        onPress={() => setModalVisible(!modalVisible)}
                        className='bg-red-600 p-2'
                    >
                        <Text className='text-white text-base text-center'>Hide </Text>
                    </Pressable>
                </View>
            </Modal>
            <View className='flex-row items-center justify-between pt-3'>
                <View className='flex-row items-center'>
                    <Ionicons name="location" color="green" />
                    <Text className='text-green-800 pl-1'>{item.location}</Text>
                </View>
                <View className='flex-row items-center'>
                    <Ionicons name="calendar" color="green" />
                    <Text className='text-green-800 pl-1'>{item.date}</Text>
                </View>
                <View className='flex-row items-center'>
                    <Ionicons name="time" color="green" />
                    <Text className='text-green-800 pl-1'>{item.time}</Text>
                </View>
            </View>
            <ScrollView className='h-14 mt-3'>
                <Text>{item.description}</Text>
            </ScrollView>
        </View>

    )
}