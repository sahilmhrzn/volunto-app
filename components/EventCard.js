import { View, Text, Image, ScrollView, Button } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function EventCard(props) {
    return (
        <View className='bg-white p-3 shadow mb-3 rounded-lg'>
            <View className='flex-row items-center'>
                <Image
                    source={require('../assests/profilepic.jpg')}
                    className='rounded-full h-11 w-11'
                />
                <View className='px-3 flex-1'>
                    <Text className='text-black text-lg font-bold'>{props.name}</Text>
                    <Text>Organized by Blablabla</Text>
                </View>
                <Button title="Join" color="green" />
            </View>
            <View className='flex-row items-center justify-between pt-3'>
                <View className='flex-row items-center'>
                    <Ionicons name="location" color="green" />
                    <Text className='text-green-800 pl-1'>{props.location}</Text>
                </View>
                <View className='flex-row items-center'>
                    <Ionicons name="calendar" color="green" />
                    <Text className='text-green-800 pl-1'>{props.date}</Text>
                </View>
                <View className='flex-row items-center'>
                    <Ionicons name="time" color="green" />
                    <Text className='text-green-800 pl-1'>{props.time}</Text>
                </View>

            </View>
            <ScrollView className='h-14 mt-3'>
                <Text>{props.description}</Text>
            </ScrollView>
        </View>

    )
}