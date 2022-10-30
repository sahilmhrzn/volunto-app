import { View, Text, TouchableOpacity, TextInput, Modal, SafeAreaView, FlatList,Button } from 'react-native'
import React, { useState } from 'react'
import Events from './Events'
import DatePicker from 'react-native-date-ranges';
import Categories from '../components/Categories'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchFilterModal from '../components/SearchFilterModal';
import EventCard from '../components/EventCard';
//import { BottomTab } from '../App';
//import BottomTab from '../App';

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [events, setEvents] = useState([
    {
      name: "Cleaning Program", location: "Mangal Bazar", date: "2022/04/15", time: "2:00 PM", key: 1, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    }
  ])

  const addEvent = (event) => {
    event.key = Math.random().toString();
    setEvents((currentEvents) => {
      return [event, ...currentEvents];
    })
  }
  const handleConfirm =(value)=>{
    console.log(value)
  }
  
  const confirmButton = (onConfirm) => {
    return (<Button
        onPress={onConfirm}
        title='confirm'
        color='green'
    />)
  }


  return (
    <SafeAreaView>
      {/* Header Section */}
      <View className='flex-row items-center pb-2 '>
        <TouchableOpacity className="flex-1">
          <Text className="text-black text-xl font-extrabold" >Volunto</Text>
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
          <TouchableOpacity>
            <TextInput
              placeholder='Search Events'
            />
          </TouchableOpacity>
        </View>
        {/* <AdjustmentsIcon color="green" /> */}
        <View><SearchFilterModal /></View>

      </View>
      <DatePicker
        style={{ width: 150, height: 40 }}
        customStyles={{
        placeholderText: { fontSize: 10, color:'green' }, // placeHolder style
        headerStyle: {
          backgroundColor:"green"
        },			// title container style
        headerMarkTitle: {
          color:'white',
        }, // title mark style 
        //   headerDateTitle: {}, // title Date style
        //   contentInput: {}, //content text container style
         contentText: {
          color:'green',
          fontSize:10
         }, //after selected text Style
         }} // optional 
        // centerAlign // optional text will align center or not
        // allowFontScaling={false} // optional
        placeholder={'Select your available date'}
         markText={'Select your available date'}
        //buttonText={'hello'}
        mode={'range'}
        customButton = {confirmButton}
        selectedBgColor={'green'}
        dateSplitter='to'
        onConfirm={(value)=>handleConfirm(value)}
        outFormat='MMM-DD'
      />
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