import { View, Text, TextInput, Button, Dimensions } from 'react-native'
import React from 'react'
import { Formik } from 'formik';


const SignUp = () => {
    return (
        <View>
            <Formik
                initialValues={{ fullName: '', email: '', password: '' }}
                onSubmit={(values) => {
                    console.warn(values);
                }}
            >
                {(props) => (
                    <View style={{ width: Dimensions.get('window').width, paddingHorizontal: 20, }}>
                        <Text className='text-3xl mt-8 font-bold text-center'>Signup</Text>
                        <Text className='text-lg mt-5'>Create your Account</Text>
                        <View className='flex-row  items-center space-x-2 bg-white p-1 mb-2 shadow-sm'>
                            <TextInput
                                placeholder='Full Name'
                                className=' items-center  bg-white p-2 mb-2 shadow-sm'
                                onChangeText={props.handleChange('fullName')}
                                value={props.values.fullName}
                            />
                        </View>
                        <View className='flex-row  items-center space-x-2 bg-white p-1 mb-2 shadow-sm'>
                            <TextInput
                                placeholder='Email'
                                keyboardType='email-address'
                                className=' items-center  bg-white p-2 mb-2 shadow-sm'
                                onChangeText={props.handleChange('email')}
                                value={props.values.email}
                            />
                        </View>
                        <View className='flex-row  items-center space-x-2 bg-white p-1 mb-2 shadow-sm'>
                            <TextInput
                                placeholder='Password'
                                //keyboardType='visible-password'
                                className=' items-center  bg-white p-2 mb-2 shadow-sm'
                                secureTextEntry
                                onChangeText={props.handleChange('password')}
                                value={props.values.password}
                            />
                        </View>
                        <View>
                            <Button title="Sign Up" color="green" onPress={props.handleSubmit} />
                        </View>

                    </View>
                )}
            </Formik>
        </View>
    )
}

export default SignUp