import { View, Text, TextInput, Button, Pressable } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Formik } from 'formik';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEvent } from '../redux/EventSlice';
import moment from 'moment';

const EditEvent = () => {
    const dispatch = useDispatch()
    const [tempdate, settempdate] = useState('')
    const [temptime, settemptime] = useState('')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);


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
    return (
        <View >
            <Formik
                initialValues={{ eventName: '', organizerName: '', location: '', description: '' }}
                onSubmit={(values) => {
                    console.warn(values);
                    dispatch(addEvent({
                        eventName: values.eventName,
                        organizerName: values.organizerName,
                        location: values.location,
                        description: values.description,
                        date: tempdate,
                        time: temptime,
                    }))
                }}
            >
                {(props) => (
                    <View className='m-3 bg-white p-3 items-center'>
                        <Text className='text-center text-4xl mt-8 font-bold'>Edit Event</Text>
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
                                        onChange={datehandler}
                                        value={tempdate}
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
                            <Button title='Submit' color='green' onPress={props.handleSubmit} />
                        </View>
                    </View>
                )}
            </Formik>
            
        </View>
    )
}

export default EditEvent