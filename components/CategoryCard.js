import { TouchableOpacity, Text, View } from 'react-native'
import React from 'react'


const CategoryCard = (props) => {
    return (
        <View>
            <TouchableOpacity className='rounded-3xl bg-green-700 p-1 px-5 mx-1 items-center'>

                <Text className='text-white font-semibold'>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryCard