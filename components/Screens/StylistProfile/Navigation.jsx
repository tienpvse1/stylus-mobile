import React , {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Navigation() {
    const [index , setIndex] = useState(0);
    return (
        <View>
            <Text>Navbar</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
