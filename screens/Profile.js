import * as React from 'react';
import MapView from 'react-native-maps';
import { Text, View, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function Profile() {
  const events = [
    {
      name: 'Blood Donation Program',
      num: 1
    },
    {
      name: 'Cloth Donation Program',
      num: 2

    },
    {
      name: 'Counseling Program',
      num: 3

    },
    {
      name: 'River Cleaning Program',
      num: 4

    },
  ]
  return (
    <View className=' bg-green-800 p-1'>
      <View className='mt-10 flex-row '>
        <Ionicons name='arrow-back' color='white' size={30} />
        <Text className='text-white  items-center  text-lg'>Profile</Text>
      </View>
      <View className='items-center mt-4'>
        <Image
          source={require('../assets/profilepic.jpg')}
          className='rounded-full h-16 w-16 justify-center'
        />
        <Text className='font-black text-center text-5xl mt-3 text-white'>Username</Text>
      </View>
      {/* Points and Events Organized section */}
      <View className='flex-row justify-evenly'>
        <View>
          <Text className='text-lg text-slate-200 font-medium'>Points</Text>
          <Text className='text-lg text-white text-center'>40</Text>
        </View>
        <View>
          <Text className='text-lg text-slate-200 font-medium'>Events Organized</Text>
          <Text className='text-lg text-white text-center'>0</Text>
        </View>
      </View>
      {/* Email Card */}
      <View className=' mt-4  bg-slate-300 h-full rounded-3xl p-6'>
        <View className='bg-white p-3'>
          <Text className='text-lg font-bold'>Email:</Text>
          <Text>username@gmail.com</Text>
        </View>
        <View>
          <Text className='font-bold mt-3 text-lg'>Events Attended</Text>
          {
            events.map((e) => {
              return (
                <View className='flex-row '>
                  <Text>{e.num}</Text>
                  <Text className='ml-2'>{e.name}</Text>

                </View>
              )
            })
          }
        </View>
      </View>

    </View>
  );
}

