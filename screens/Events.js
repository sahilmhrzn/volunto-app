import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import EventCard from '../components/EventCard'
//import Categories from './Categories'

export default function Events() {
    return (
        <View>
            <Text className='text-black font-semibold text-lg my-1'>Events</Text>
            <ScrollView>
                <EventCard name="Cleaning Program" location="Mangal Bazar" date="2022/04/15" time="2:00 PM" />
                <EventCard name="Blood Donation Program" location="Basantapur" date="2022/04/15" time="2:00 PM" />
                <EventCard name="Protest against Rape" location="Basantapur" date="2022/04/15" time="2:00 PM" />
                <EventCard name="Cleaning Program" location="Basantapur" date="2022/04/15" time="2:00 PM" />
            </ScrollView>
        </View>
    )
}