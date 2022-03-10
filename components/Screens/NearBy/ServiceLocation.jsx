import React from 'react'
import { StyleSheet, Text, View , Image} from 'react-native'
import { serviceLocation } from '../../../global/GlobalIcon'

export default function ServiceLocation({serviceName}) {
    const image = require('../../../image/markers/marker.png');
    return (
        <View>
            <Image source={image} style={styles.markerImage}/>
        </View>
    )
}

const styles = StyleSheet.create({

    markerImage:{
        height: 50,
        width: 50
    }

})
