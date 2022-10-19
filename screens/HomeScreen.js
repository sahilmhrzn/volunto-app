import { View, Text, TouchableOpacity, TextInput, Modal, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
//import BottomTab from './BottomTabs'
import Events from './Events'
//import { SparklesIcon, SearchIcon, AdjustmentsIcon } from "react-native-heroicons/solid";
import Categories from '../components/Categories'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchFilterModal from '../components/SearchFilterModal';
//import { BottomTab } from '../App';
//import BottomTab from '../App';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [events, setEvents] = useState([
    {
      name: "Cleaning Program", location: "Mangal Bazar", date: "2022/04/15", time: "2:00 PM", key: 1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    }
  ])

  // const addEvent = (event) => {
  //   event.key = Math.random().toString();
  //   setEvents((currentEvents) => {
  //     return [event, ...currentEvents];
  //   })
  // }

  return (
    <SafeAreaView>
      {/* Header Section */}
      <View className='flex-row items-center pb-2 '>
        <TouchableOpacity className="flex-1">
          <Text className="text-black text-xl font-extrabold" >Voluntooo</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="menu" size={30} />
        </TouchableOpacity>
      </View>
      {/* --------------------------------------------------- */}

      {/* Search Bar */}
      <View className='flex-row items-center pb-2 space-x-4 '>
        <View className='flex-row flex-1 items-center space-x-2 bg-white p-1 rounded-2xl shadow-lime-900'>
          {/* <SearchIcon color="grey" size={20} /> */}
          <TextInput
            placeholder='Search Events'
          />
        </View>
        {/* <AdjustmentsIcon color="green" /> */}
        <View><SearchFilterModal /></View>

      </View>
      <Ionicons name='md-options'
        onPress={() => setModalVisible(true)}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View><Text>Hello</Text></View>
      </Modal>
      {/* --------------------------------------------------- */}
      {/* Categories */}
      <View>
        <Categories />
      </View>
      <View>
        <FlatList
          data={events}
          renderItem={({ item }) => (
            <EventCard
              name={item.name}
              location={item.location}
              time={item.time}
              date={item.date}
              description={item.description}
            />
          )
          }
        />
      </View>
    </SafeAreaView>
  )
}