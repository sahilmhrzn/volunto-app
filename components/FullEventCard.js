import { View, Text, Image, ScrollView, Button } from 'react-native'
import React, { useEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { joinEvent } from '../redux/EventSlice';


export default function FullEventCard({ item }) {
    // user id
    const dispatch = useDispatch()
    const userId = '23'
    const handleJoin = () => {
        dispatch(joinEvent({ uId: userId, eId: item.eventId }))
    }
    const handleCancel = () => {
        console.warn('cancelled')
    }

    return (
        <View className='bg-slate-50 p-3 shadow mb-3 rounded-lg'>
            <View className='flex-row items-center'>
                <Image
                    source={require('../assets/profilepic.jpg')}
                    className='rounded-full h-11 w-11'
                />
                <View className='px-3 flex-1'>
                    <Text className='text-black text-lg font-bold'>{item.eventName}</Text>
                    <Text>Organized by {item.organizerName}</Text>
                </View>

            </View>
            <View className=' -center justify-between pt-3'>
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
            <View>
                <Text className='font-bold '>Category: </Text>
                <Text className='font-bold '>Maximum number of volunteer: </Text>
                <Text className='font-bold '>Points: </Text>
                <Text className='font-bold '>Sponser: </Text>

            </View>
            <ScrollView className='h-14 mt-3'>
                <Text>{item.description}</Text>
            </ScrollView>
            <Button title='Join ' color='green'/>
        </View>

    )
}