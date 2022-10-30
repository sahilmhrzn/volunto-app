import { View, Text, TextInput, Button, TouchableWithoutFeedback, ScrollView, Animated, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import FormSelectorBtn from '../components/FormSelectorBtn'
import Login from './Login'
import SignUp from './SignUp'

const { width } = Dimensions.get('window');

const Form = () => {
    const animation = useRef(new Animated.Value(0)).current;

    const loginColorInterpolate = animation.interpolate({
        inputRange: [0, width],
        outputRange: ['rgba(27,27,51,1)', 'rgba(27,27,51,0.4)']
    });
    const signUpColorInterpolate = animation.interpolate({
        inputRange: [0, width],
        outputRange: ['rgba(27,27,51,0.4)', 'rgba(27,27,51,1)']
    });
    return (
        <View className=' bg-green-800'>
            <Text className='font-black text-center text-5xl mt-20 text-white'>Volunto</Text>

            <View className=' mt-10  bg-slate-300 h-full rounded-3xl'>
                <View className='flex-row mt-2 px-3'>
                    <FormSelectorBtn
                        backgroundColor={loginColorInterpolate}
                        borderTopLeftRadius={8}
                        borderBottomLeftRadius={8}
                        title='LogIn'
                    />
                    <FormSelectorBtn
                        backgroundColor={signUpColorInterpolate}
                        borderTopRightRadius={8}
                        borderBottomRightRadius={8}
                        title='Sign Up'
                    />
                </View>
                <ScrollView
                    horizontal
                    pagingEnabled
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: animation } } }],
                        { useNativeDriver: false }
                    )}
                >
                    <Login />
                    <SignUp />
                </ScrollView>
            </View>
        </View>
    )
}

export default Form