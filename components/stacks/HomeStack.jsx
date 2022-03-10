import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import BookingProcess from '../Screens/BookingProcess';
import Discount from '../Screens/Discount';
import Home from '../Screens/Home';
import Category from '../Screens/Home/Category';
import Message from '../Screens/Home/Message';
import Payment from '../Screens/Payment';
import StylistProfile from '../Screens/StylistProfile';
import SuccessBooking from '../Screens/SuccessBooking';

const Stack = createStackNavigator();
export default function HomeStack() {
    
    return (
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="StylistProfile" component={StylistProfile} />
            <Stack.Screen name="BookingProcess" component={BookingProcess}/>
            <Stack.Screen name="Payment" component={Payment}  />
            <Stack.Screen  name="SuccessBooking" component={SuccessBooking} />
            <Stack.Screen name="Message" component={Message} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Discount" component={Discount} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
