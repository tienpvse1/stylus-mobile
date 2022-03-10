import React from 'react'
import { StyleSheet, Text, View , Dimensions,TouchableWithoutFeedback } from 'react-native'
import { darkBackground, goldColor } from '../../../global/GlobalValue'

export default function ButtonGroup({backToHome, action}) {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback onPress={backToHome}>
                <Text style={styles.fullFillButton}>
                    Tiếp tục đặt lịch
                </Text>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={action}>
                <Text style={styles.button}>
                    Xem các lịch hẹn
                </Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 10
    },
    fullFillButton:{
        width: Dimensions.get("window").width * 0.9,
        backgroundColor:goldColor,
        color:darkBackground,
        fontSize: 20,
        fontWeight:"bold",
        textAlign: "center",
        paddingVertical: 10,
        marginBottom: 10,
        borderRadius: 10
    },
    button:{
        backgroundColor:"transparent",
        borderWidth: 1,
        borderColor: goldColor,
        color:goldColor,
        fontSize: 20,
        fontWeight:"bold",
        textAlign: "center",
        width:Dimensions.get("window").width * 0.9,
        paddingVertical: 10,
        borderRadius: 10
    }
})
