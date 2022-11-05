import { View, Text, Image, ScrollView, Button, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
//import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { joinEvent } from '../redux/EventSlice';
import MultiSelect from 'react-native-multiple-select';


export default function FullMyEventCard({ item, setfullModalVisible }) {
    // user id
    const dispatch = useDispatch()
    const userId = '23'
    const handleJoin = () => {
        dispatch(joinEvent({ uId: userId, eId: item.eventId }))
    }
    const handleCancel = () => {
        console.warn('cancelled')
    }
    const [selectedvolunteers, setSelectedvolunteers] = useState([])
    const volunteers = [{
        id: '92iijs7yta',
        name: 'Ondo'
    }, {
        id: 'a0s0a8ssbsd',
        name: 'Ogun'
    }, {
        id: '16hbajsabsd',
        name: 'Calabar'
    }, {
        id: 'nahs75a5sg',
        name: 'Lagos'
    }, {
        id: '667atsas',
        name: 'Maiduguri'
    }, {
        id: 'hsyasajs',
        name: 'Anambra'
    }, {
        id: 'djsjudksjd',
        name: 'Benue'
    }, {
        id: 'sdhyaysdj',
        name: 'Kaduna'
    }, {
        id: 'suudydjsjd',
        name: 'Abuja'
    }
    ];
    const onSelectedvolunteerChange = (selectedvolunteers) => {
        setSelectedvolunteers(selectedvolunteers)
        // console.log(selectedvolunteers)
        // for (let i = 0; i < selectedvolunteers.length; i++) {
        //     var tempItem = volunteers.find(item => item.id === selectedvolunteers[i]);
        //     console.log(tempItem);
        // }
    }
    return (
        <View className='bg-slate-50 p-3 shadow mb-3 rounded-lg '>
            <View className='flex-row items-center'>
                <Image
                    source={require('../assets/profilepic.jpg')}
                    className='rounded-full h-11 w-11'
                />
                <View className='px-3 flex-1'>
                    <Text className='text-black text-lg font-bold'>{item.eventName}</Text>
                    <Text>Organized by {item.organizerName}</Text>
                </View>
                <Pressable
                    onPress={() => setfullModalVisible(false)}
                >
                    <Text className='text-red-600'>Hide Modal</Text>
                </Pressable>

            </View>
            <View className=' justify-between pt-3'>
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
            <View className='mt-3 '>
                <Text>{item.description}</Text>
            </View>
            <View>
                <MultiSelect
                    hideTags
                    items={volunteers}
                    uniqueKey="id"
                    // ref={(component) => {this.multiSelect = component }}
                    onSelectedItemsChange={onSelectedvolunteerChange}
                    selectedItems={selectedvolunteers}
                    selectText="Pick Items"
                    searchInputPlaceholderText="Search Items..."
                    onChangeInput={(text) => console.log(text)}
                    tagRemoveIconColor="#CCC"
                    tagBorderColor="#CCC"
                    tagTextColor="#CCC"
                    selectedItemTextColor="#CCC"
                    selectedItemIconColor="#CCC"
                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={{ color: '#CCC' }}
                    hideSubmitButton	
                />

                <View>
                    {
                        selectedvolunteers.map(id => {
                            var temp = volunteers.find(item => item.id === id)
                            return (
                                <View>
                                    <Text>{temp.name}</Text>
                                </View>
                            )
                        })
                    }

                </View>
                <Button title='Event accomplished'/>

            </View>
        </View>

    )
}