import { View, Text, TouchableOpacity, TextInput, Modal, SafeAreaView, FlatList, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Events from './Events'
import DatePicker from 'react-native-date-ranges';
//import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
//import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker';
import Categories from '../components/Categories'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchFilterModal from '../components/SearchFilterModal';
import EventCard from '../components/EventCard';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEvent } from '../redux/EventSlice';

export default function HomeScreen() {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.event)
  const [modalVisible, setModalVisible] = useState(false);
  // fetch data
  const [events, setEvents] = useState([
    {
      eventName: "Cleaning Program",
      location: "Mangal Bazar",
      date: "2022/04/15",
      time: "2:00 PM",
      organizerId: '11',
      organizerName: 'ramo',
      volunteerId: [],
      eventId: '1',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    },
    {
      eventName: "Blood Donation Program",
      location: "Mangal Bazar",
      date: "2022/04/15",
      time: "2:00 PM",
      organizerName: 'ramooo',
      organizerId: '12',
      volunteerId: [],
      eventId: '2',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    }
  ])

  const handleConfirm = (value) => {
    console.log(value)
  }

  const confirmButton = (onConfirm) => {
    return (<Button
      onPress={onConfirm}
      title='confirm'
      color='green'
    />)
  }
  useEffect(() => {
    // console.warn(data)
    dispatch(fetchEvent(events))
  }, [])

  return (
    <SafeAreaView className='p-2'>
      {/* Header Section */}
      <View className='flex-row items-center pb-2 '>
        <TouchableOpacity className="flex-1">
          <Text className="text-black text-xl font-extrabold" >Volunto</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity>
          <Ionicons name="menu" size={30} />
        </TouchableOpacity> */}
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
        <TouchableOpacity>
          <Ionicons name='search' size={20} />
        </TouchableOpacity>
        {/* <AdjustmentsIcon color="green" /> */}
        {/* <View><SearchFilterModal /></View> */}

      </View>
      <DatePicker
        style={{ width: 150, height: 40, }}
        customStyles={{
          placeholderText: { fontSize: 10, color: 'green' }, // placeHolder style
          headerStyle: {
            backgroundColor: "green"
          },			// title container style
          headerMarkTitle: {
            color: 'white',
          },
          contentText: {
            color: 'green',
            fontSize: 10
          }, //after selected text Style
        }} // optional 
        // centerAlign // optional text will align center or not
        // allowFontScaling={false} // optional
        placeholder={'Select your available date'}
        markText={'Select your available date'}
        //buttonText={'hello'}
        mode={'range'}
        customButton={confirmButton}
        selectedBgColor={'green'}
        dateSplitter='to'
        onConfirm={(value) => handleConfirm(value)}
        outFormat='MMM-DD'
      />
      {/* --------------------------------------------------- */}
      {/* Categories */}
      <View className='mt-1'>
        <Categories />
      </View>
      <View className='mt-1'>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <EventCard
              item={item}
            />
          )
          }
        />
      </View>
      {/* <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <EventCard
              name={item.eventName}
              organizerName={item.organizerName}
              location={item.location}
              date={item.date}
              description={item.description}
            />
          )
          }
        />
      </View> */}
    </SafeAreaView>
  )
}