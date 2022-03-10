import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Animation from 'lottie-react-native'
export default function Loading() {
    const animateSource = require('../../../assets/lottie/calendar.json');
    return (
        <View style={styles.animateContainer}>
            <Animation
                source={animateSource}
                autoPlay
                loop
                style={styles.animate}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    animate:{
        height: 400,
        width: 400
    },
    animateContainer:{
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    }
})
