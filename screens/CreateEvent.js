import { View, Text, TextInput, Button, ScrollView } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Ionicons from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import { Formik } from 'formik';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEvent } from '../redux/EventSlice';
import moment from 'moment';
import MapView from 'react-native-maps';
import Profile from './Profile';
import SelectList from 'react-native-dropdown-select-list'
import DatePicker from 'react-native-date-ranges';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  eventName: Yup.string().required('Event Name is required!'),
  organizerName: Yup.string().required('Organizer name is required!'),
  description: Yup.string().required('Event Description is required!'),
  category: Yup.string().required('Event Category is required!'),
  points: Yup.string().required('Points is required!'),
  maxVolunteer: Yup.string().required('Max no. of volunteer is required!'),
})
const CreateEvent = () => {
  const dispatch = useDispatch()
  const [tempdate, settempdate] = useState('')
  const [temptime, settemptime] = useState('')
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selected, setSelected] = useState("");
  const [cord, setCord] = useState({})
  const navigation = useNavigation();
  const data = [
    {
      value: 'Street CleanUp',
      key: '1',
    },
    {
      value: 'Blood Donation',
      key: '2',
    },
    {
      value: 'Park Cleanup',
      key: '3',
    },
    {
      value: 'Food Donation',
      key: '4',
    },
    {
      value: 'Money Donation',
      key: '5',
    },
    {
      value: 'Cloth Donation',
      key: '6',
    },
    {
      value: 'Climate Change',
      key: '7',
    },
    {
      value: 'Animal Rescue',
      key: '8',
    },
    {
      value: 'WildLife Conservation',
      key: '9',
    },
    {
      value: 'Teaching',
      key: '10',
    },
    {
      value: 'Counselling',
      key: '11',
    },
    {
      value: 'Others',
      key: '1',
    },

  ];
  const sponser = [

    {
      value: 'Scout',
      key: '1',
    },
    {
      value: 'Blood Donation',
      key: '2',
    },
    {
      value: 'Park Cleanup',
      key: '3',
    },
    {
      value: 'Food Donation',
      key: '4',
    },
  ];
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const handleConfirm = (date) => {
    const d = moment(date).format('ll');

    settempdate(d)
    // console.warn(date.toString())
    hideDatePicker();
  };
  const handleTimeConfirm = (time) => {
    const t = moment(time).format('LT');
    console.warn("A  time has been picked: ", t);
    settemptime(t)
    hideTimePicker();
  };
  const handleSubmit = () => {
    // console.log()
    // dispatch(addEvent({eventName::props.title, price:props.price, served:false, quantity:1}}))
  }
  const datehandler = (e) => {
    settempdate(tempdate)
  }
  const timehandler = (e) => {
    settemptime(temptime)
  }
  const handleRangeConfirm = (value) => {
    // settempdate(value)
    console.warn(value)
  }

  const confirmButton = (onConfirm) => {
    return (<Button
      onPress={onConfirm}
      title='confirm'
      color='green'
    />)
  }
  return (
    <View>
      <Formik
        initialValues={{
          eventName: '',
          organizerName: '',
          location: '',
          description: '',
          category: '',
          sponser: '',
          points: '',
          maxVolunteer: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.warn(values);
          dispatch(addEvent({
            eventName: values.eventName,
            organizerName: values.organizerName,
            location: values.location,
            description: values.description,
            date: tempdate,
            time: temptime,
            points:values.points,
          }))
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <View>
            <Text className='text-center text-4xl mt-8 font-bold'>Create Event</Text>
            <ScrollView className='px-6 '>
              {touched.eventName && errors.eventName ? (<Text className='text-red-500 text-right mb-1'>{errors.eventName}</Text>) : null}
              <TextInput
                placeholder='Event Name'
                className='flex-row  items-center  bg-white p-4 mb-2 shadow-sm'
                onChangeText={handleChange('eventName')}
                value={values.eventName}
                onBlur={handleBlur('eventName')}
              />
              {touched.organizerName && errors.organizerName ? (<Text className='text-red-500 text-right mb-1'>{errors.organizerName}</Text>) : null}
              <TextInput
                placeholder='Name of Organizer'
                className='flex-row  items-center  bg-white p-4 mb-2 shadow-sm'
                onChangeText={handleChange('organizerName')}
                value={values.organizerName}
                onBlur={handleBlur('organizerName')}

              />
              <View className='flex-row '>
                <View className='flex-row  items-center  bg-white p-4 mb-2 shadow-sm flex-1  '>
                  <Ionicons name='calendar' size={25} color='grey' />
                  {/* <TextInput
                    placeholder='Event Date'
                    onPressIn={showDatePicker}
                    onChange={datehandler}
                    value={tempdate}
                  /> */}


                  <DatePicker
                    style={{ borderWidth: 0, borderRadius: 0, width: 80 }}
                    customStyles={{
                      placeholderText: { fontSize: 13, color: 'grey', border: 0 }, // placeHolder style
                      headerStyle: {
                        backgroundColor: "green"
                      },			// title container style
                      headerMarkTitle: {
                        color: 'white',
                      },
                      contentText: {
                        color: 'black',
                        fontSize: 10,

                      }, //after selected text Style

                    }} // optional 
                    placeholder={'Event Date'}
                    markText={'Select your Event date'}
                    mode={'range'}
                    customButton={confirmButton}
                    selectedBgColor={'green'}
                    dateSplitter='to'
                    onConfirm={(value) => handleRangeConfirm(value)}
                    outFormat='MMM-DD'
                  />
                </View>
                {/* <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="range"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                /> */}

                <View className='flex-row  items-center space-x-2  bg-white p-4 mb-2 shadow-sm flex-1 ml-1'>
                  <Ionicons name='time' size={25} color='grey' />
                  <TextInput
                    placeholder='Event Time'
                    onPressIn={showTimePicker}
                    onChange={timehandler}
                    value={temptime}
                  />

                </View>
                <DateTimePickerModal
                  isVisible={isTimePickerVisible}
                  mode="time"
                  onConfirm={handleTimeConfirm}
                  onCancel={hideTimePicker}
                />
              </View>
              <View className='flex-row bg-white space-x-2 items-center p-4 mb-2 shadow-sm'>
                <Ionicons name='location' size={25} color='grey' />
                <TextInput
                  placeholder='Location'
                  autoComplete='street-address'
                  // onChangeText={props.handleChange('location')}
                  // onChange={()=>setlocation(cord)}
                  value={(Object.keys(cord).length == 0) ? '' : "location selected"}
                  onPressIn={() => {
                    navigation.navigate('Map', { setCordi: setCord });
                  }
                  }
                />
              </View>
              {/* Picking Category */}
              <View className='mb-2'>
                <SelectList
                  setSelected={setSelected}
                  data={data}
                  onSelect={() => console.warn(selected)}
                  placeholder='Pick a Category'
                  boxStyles={{ borderRadius: 0, padding: 10, backgroundColor: 'white', height: 65, alignItems: 'center' }}
                />
              </View>
              <View className='mb-2'>
                <SelectList
                  setSelected={setSelected}
                  data={sponser}
                  onSelect={() => console.warn(selected)}
                  placeholder='Choose a sponser'
                  boxStyles={{ borderRadius: 0, padding: 10, backgroundColor: 'white', height: 65, alignItems: 'center' }}
                />
              </View>
              <View className='flex-row justify-between'>
                <View className='flex-1 bg-white space-x-2 items-center p-4 mb-2 shadow-sm mr-2 ' >
                {touched.points && errors.points ? (<Text className='text-red-500 text-right mb-1'>{errors.points}</Text>) : null}
                  <TextInput
                    placeholder='Set points'
                    keyboardType='number-pad'
                    value={values.points}
                    onBlur={handleBlur('points')}
                  />
                </View>
                <View className='flex-row bg-white space-x-2 items-center p-4 mb-2 shadow-sm ' >
                  <TextInput
                    placeholder='Max no. of volunteers'
                    keyboardType='number-pad'
                  />
                </View>
              </View>
              <View >
                <TextInput
                  placeholder='Write Short Description about Event'
                  className='bg-white p-4 mb-3 shadow-sm '
                  multiline={true}
                  numberOfLines={5}
                  onChangeText={handleChange('description')}
                  value={values.description}
                  onBlur={handleBlur('description')}

                />
              </View>
              <Button title='Create' color='green' onPress={handleSubmit} />
            </ScrollView>
          </View>
        )}
      </Formik>
    </View>
  )
}

export default CreateEvent