import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Intro from '../Screens/Login/Intro';
import Login from '../Screens/Login/Login';
import CreateAccount from '../Screens/Login/CreateAccount';
import ForgotPassword from '../Screens/Login/ForgotPassword';
import ResetPassword from '../Screens/Login/ResetPassword';
export default function LoginStack() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="CreateAccount" component={CreateAccount} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
