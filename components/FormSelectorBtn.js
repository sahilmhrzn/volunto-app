import { View, Text, TouchableWithoutFeedback, StyleSheet,Animated } from 'react-native'
import React from 'react'

export default function FormSelectorBtn({
    backgroundColor,
    title,
    borderTopLeftRadius,
    borderBottomLeftRadius,
    borderTopRightRadius,
    borderBottomRightRadius,
}) {
    return (
        <TouchableWithoutFeedback>
            <Animated.View style={[styles.container, { backgroundColor }, { borderTopLeftRadius }, { borderBottomLeftRadius }, { borderTopRightRadius }, { borderBottomRightRadius }]}>
                <Text className='text-white text-lg'>{title}</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 45,
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',

    }
})