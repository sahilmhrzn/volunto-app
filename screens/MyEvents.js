import { View, Text, Dimensions, FlatList, SafeAreaView } from 'react-native'
import React from 'react'
import SearchFilterModal from '../components/SearchFilterModal'
import MapView from 'react-native-maps';
import EventCard from '../components/EventCard';
import { useSelector } from 'react-redux';
import MyEventsCard from '../components/MyEventsCard';

const MyEvents = () => {
    const data = useSelector((state) => state.event)
    return (
        <SafeAreaView className='p-2'>
            {/* <Text className='text-xl font-bold'> You haven't created any Events</Text> */}
            <Text className='font-extrabold mt-10 text-center text-xl'>Your Events</Text>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <MyEventsCard
                        item={item}
                    />
                )
                }
            />
        </SafeAreaView>
    )
}

export default MyEvents