import { View, Text, TextInput, Button } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Formik } from 'formik';
import React, { useState } from 'react'

const CreateEvent = ({ addEvent }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

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
    console.warn("A date  has been picked: ", date);
    hideDatePicker();
  };
  const handleTimeConfirm = (time) => {
    console.warn("A  time has been picked: ", time);
    hideTimePicker();
  };
  return (
    <View>
      <Formik
        initialValues={{ eventName: '', organizerName: '', date: '', time: '', location: '', description: '' }}
        onSubmit={(values) => {
          addEvent(values)
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <Text className='text-center text-4xl mt-8 font-bold'>Create Event</Text>
            <View className='px-8 mt-7'>
              <TextInput
                placeholder='Event Name'
                className='flex-row  items-center  bg-white p-4 mb-2 shadow-sm'
                onChangeText={props.handleChange('eventName')}
                value={props.values.eventName}
              />
              <TextInput
                placeholder='Name of Organizer'
                className='flex-row  items-center  bg-white p-4 mb-2 shadow-sm'
                onChangeText={props.handleChange('organizerName')}
                value={props.values.organizerName}
              />
              <View className='flex-row '>
                <View className='flex-row  items-center space-x-2 bg-white p-2 mb-2 shadow-sm flex-1 mr-1'>
                  <Ionicons name='calendar' size={25} color='grey' />
                  <TextInput
                    placeholder='Event Date'
                    onPressIn={showDatePicker}

                  />
                </View>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
                <View className='flex-row  items-center space-x-2  bg-white p-2 mb-2 shadow-sm flex-1 ml-1'>
                  <Ionicons name='time' size={25} color='grey' />
                  <TextInput
                    placeholder='Event Time'
                    onPressIn={showTimePicker}
                  />
                </View>
                <DateTimePickerModal
                  isVisible={isTimePickerVisible}
                  mode="time"
                  onConfirm={handleTimeConfirm}
                  onCancel={hideTimePicker}
                />
              </View>
              <View className='flex-row bg-white space-x-2 items-center p-2 mb-2 shadow-sm'>
                <Ionicons name='location' size={25} color='grey' />
                <TextInput
                  placeholder='Location'
                  autoComplete='street-address'
                  onChangeText={props.handleChange('location')}
                  value={props.values.location}
                />
              </View>
              <TextInput
                placeholder='Write Short Description about Event'
                className='bg-white p-4 mb-3 shadow-sm border'
                multiline={true}
                numberOfLines={5}
                onChangeText={props.handleChange('description')}
                value={props.values.description}
              />
              <Button title='Create' color='green' onPress={props.handleSubmit} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  )
}

export default CreateEvent