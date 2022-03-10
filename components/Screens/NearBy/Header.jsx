import React from 'react'
import { StyleSheet, Text, View , TouchableWithoutFeedback } from 'react-native'
import { filterIcon2 } from '../../../global/GlobalIcon'
import { darkBackground } from '../../../global/GlobalValue'

export default function Header({action}) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Stylist gần bạn</Text>
            <TouchableWithoutFeedback onPress={action}>
                <Text style={styles.filteIcon}>{filterIcon2}</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        position:"absolute",
        left: 0,
        zIndex: 2,
        paddingTop: 30,
        flex: 1,
        width: "100%"
    },
    headerText:{
        fontSize: 26,
        fontWeight:"bold",
        flex: 0.9,
        paddingLeft: 100
    },
    filteIcon:{
        backgroundColor:darkBackground,
        paddingHorizontal: 10,
        justifyContent:"center",
        alignItems:"center",
        paddingVertical: 7,
        borderRadius: 10
    }
})
