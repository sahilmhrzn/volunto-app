import { View, Text, Image, ScrollView, Button, Modal, Pressable, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { joinEvent } from '../redux/EventSlice';
import EditEvent from './EditEvent';
import FullMyEventCard from './FullMyEventCard';


export default function MyEventsCard({ item }) {
    // user id
    const dispatch = useDispatch()
    const userId = '23'
    const handleJoin = () => {
        dispatch(joinEvent({ uId: userId, eId: item.eventId }))
    }
    const handleCancel = () => {
        console.warn('cancelled')
    }
    //modal
    const [editmodalVisible, seteditModalVisible] = useState(false);
    const [fullmodalVisible, setfullModalVisible] = useState(false);


    return (
        <Pressable
            onPress={() => setfullModalVisible(!fullmodalVisible)}
        >
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
                    <View className='flex-row justify-between '>
                        <Button
                            title='Edit'
                            onPress={() => seteditModalVisible(true)}
                        />
                        <Button title='Delete' color={'red'} />
                    </View>

                </View>
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
                {/* edit modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={editmodalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        seteditModalVisible(!editmodalVisible);
                    }}
                >
                    <View className='flex-1 justify-center items-center mt-2'>
                        <EditEvent />
                        <Pressable
                            onPress={() => seteditModalVisible(!editmodalVisible)}
                        >
                            <Text className='text-red-600'>Hide Modal</Text>
                        </Pressable>
                    </View>
                </Modal>
                {/* FullEventCard Modal */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={fullmodalVisible}
                    onRequestClose={() => {
                        setfullModalVisible(!fullmodalVisible);
                    }}
                >
                    <View className='flex-1 justify-center items-center mt-2'>
                        <FullMyEventCard item={item} setfullModalVisible={setfullModalVisible}/>
                        
                    </View>
                </Modal>
            </View>
        </Pressable>

    )
}