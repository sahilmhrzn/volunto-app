import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import SearchFilterModal from '../components/SearchFilterModal'
import MapView from 'react-native-maps';

const MyEvents = () => {
    return (
        <View>
            <Text className='text-xl font-bold'> You haven't created any Events</Text>
            <Text>You can create Events here....</Text>
            {/* <SearchFilterModal /> */}
            <MapView style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height, }} />
        </View>
    )
}

export default MyEvents