import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Router from '../../routes/Router';
import LoginStack from './LoginStack';

export default function AppStack() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="LoginStack" component={LoginStack} />
            <Stack.Screen name="Router" component={Router} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})
