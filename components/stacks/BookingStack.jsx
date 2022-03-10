import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import History from '../Screens/Booking/History';
import RatingDetail from '../Screens/Booking/HistoryStack/RatingDetail';
export default function BookingStack() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen component={History} name="History" />
            <Stack.Screen component={RatingDetail} name="RatingDetail" />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
