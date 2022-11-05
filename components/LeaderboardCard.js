import { View, Text } from 'react-native'
import React from 'react'

export default function LeaderboardCard(props) {
    return (
        <View className='bg-white flex-row mt-2 p-3'>
            <Text className='mr-2'>{props.position}</Text>
            <Text>{props.name}</Text>
        </View>
    )
}