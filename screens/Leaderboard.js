import { View, Text, FlatList } from 'react-native'
import React from 'react'
import LeaderboardCard from '../components/LeaderboardCard'

export default function Leaderboard() {
    const tempdata = [
        {
            name: 'hello',
            position: 1,

        },
        {
            name: 'hi',
            position: 2,

        }, {
            name: 'namaste',
            position: 3,

        }, {
            name: 'hola',
            position: 4,

        }, {
            name: 'worldd',
            position: 5,

        },
    ]
    return (
        <View className='p-2'>
            <Text className='text-2xl font-bold mt-7 text-center'>Leaderboard</Text>
            <View>
                {/* {tempdata.map((e) => {

                    console.warn(e);
                    <LeaderboardCard name={e.name} position={e.position} />
                }
                )} */}
                <FlatList
                    data={tempdata}
                    renderItem={({ item }) => (
                        <LeaderboardCard name={item.name} position={item.position} />

                    )
                    }
                />
            </View>
        </View>
    )
}