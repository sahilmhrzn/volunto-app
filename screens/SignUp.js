import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'

const SignUp = () => {
    return (
        <View className=' bg-green-800'>
            <Text className='font-black text-center text-5xl mt-20 text-white'>Volunto</Text>

            <View className='px-8 mt-10 ml-2 mr-2 bg-slate-300 h-full rounded-3xl'>
                <Text className='text-lg mt-5'>Create your Account</Text>
                <View className='flex-row  items-center space-x-2 bg-white p-1 mb-2 shadow-sm'>
                    <TextInput
                        placeholder='Full Name'
                    />
                </View>
                <View className='flex-row  items-center space-x-2 bg-white p-1 mb-2 shadow-sm'>
                    <TextInput
                        placeholder='Email'
                        keyboardType='email-address'
                    />
                </View>
                <View className='flex-row  items-center space-x-2 bg-white p-1 mb-2 shadow-sm'>
                    <TextInput
                        placeholder='Password'
                        //keyboardType='visible-password'
                        secureTextEntry
                    />
                </View>
                <View>
                    <Button title="Sign Up" color="green" />
                </View>
            </View>
        </View>
    )
}

export default SignUp