// import { View, Text, ScrollView } from 'react-native'
// import React from 'react'
// //import EventCard from './EventCard'
// import DrawerMenu from '../components/DrawerMenu'

// const Profile = () => {
//   return (
//     <View>
//       <Text>Profile</Text>
//       <DrawerMenu />
//     </View>
//   )
// }

// export default Profile

import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>mapnffjakfkjasdf</Text>
      <MapView style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});