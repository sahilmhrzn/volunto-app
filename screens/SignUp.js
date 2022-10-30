import { View, Text, TextInput, Button, Dimensions } from 'react-native'
import React from 'react'

const SignUp = () => {
    return (
        <View style={{ width: Dimensions.get('window').width, paddingHorizontal:20,}}>
            <Text>Signup</Text>
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
    )
}

export default SignUp