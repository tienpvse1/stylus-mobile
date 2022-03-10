import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native'
import { goBackIcon3 } from '../../../global/GlobalIcon'
import { textColor } from '../../../global/GlobalValue'

export default function Header({navigation}) {
    return (
        <View style={styles.headerNavigation}>
            <TouchableNativeFeedback onPress={()=>navigation.goBack()} style={styles.icon}>
                {goBackIcon3}
            </TouchableNativeFeedback>
            <Text style={styles.done}>Hoàn tất</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerNavigation:{
        backgroundColor:"#f9f9f9",
        flexDirection:"row",
        alignItems:"center",
        paddingTop: 20,
        paddingLeft: 10,
        paddingBottom: 5,
        position: "absolute",
        top: 0,
        zIndex: 3,
        width:"100%"
    },
    done:{
        fontSize: 20,
        marginLeft: 10,
        color:textColor
    }
})
