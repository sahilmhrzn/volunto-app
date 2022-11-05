import { View, Text, Dimensions, Button } from 'react-native'
import React, { useState } from 'react'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps';

export default function Map({ route }) {
  const [cord, setCord] = useState({})

  const onPressHandler = (d) => {
    console.log(cord)
    setCord(d.coordinate)
    route.params.setCordi(d.coordinate)
  }
  return (
    <View>
      <MapView
        initialRegion={{
          latitude: 27.700769,
          longitude: 85.300140,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').height, }}
        provider='google'
        showsUserLocation={true}
        mapType='standard'
        onPress={(e) => onPressHandler(e.nativeEvent)}
      >
        {
          ((Object.keys(cord).length == 0)) ? <></> : (<Marker
            coordinate={{ latitude: cord.latitude, longitude: cord.longitude }}
            draggable
          />)
        }

      </MapView>
    </View>
  )
}