import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import { mainBackgroundColor, textColor } from '../../../global/GlobalValue';
import MessageTab from '../Messages/MessageTab';
// import CallTab from './CallTab';
const Tab = createMaterialTopTabNavigator();

export default function TopRouting() {
    return (
        <Tab.Navigator style={{flex:1}} tabBarOptions={{tabStyle:{backgroundColor:mainBackgroundColor , paddingTop: 30}, activeTintColor:textColor}}>
            <Tab.Screen options={{tabBarLabel:"Tin nhắn"}} name="MessageContainer" component={MessageTab} />
            {/* <Tab.Screen options={{tabBarLabel:"Facetime", }} name="CallContainer" component={CallTab}/> */}
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})