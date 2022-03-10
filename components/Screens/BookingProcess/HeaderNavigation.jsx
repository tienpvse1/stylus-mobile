import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import { goBackIcon2 } from '../../../global/GlobalIcon'
import { darkBackground } from '../../../global/GlobalValue'

export default function HeaderNavigation({service , navigation}) {
    return (
        <View style={styles.headerNavigation}>
            <TouchableNativeFeedback onPress={()=>navigation.goBack()} style={styles.icon}>
                {goBackIcon2}
            </TouchableNativeFeedback>
            <Text style={styles.serviceName}>{service.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerNavigation:{
        backgroundColor:"transparent",
        flexDirection:"row",
        alignItems:"center",
        paddingTop: 30,
        paddingLeft: 10,
        paddingBottom: 5,
        position: "absolute",
        top: 0,
        zIndex: 3,
        width:"100%"
    },
    serviceName:{
        fontSize: 26,
        marginLeft: 10,
        color:"white",
        fontWeight:"bold"
    }
})
