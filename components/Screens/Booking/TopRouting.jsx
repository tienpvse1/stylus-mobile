import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import { mainBackgroundColor, textColor } from '../../../global/GlobalValue';
import BookingStack from '../../stacks/BookingStack';
import Ongoing from './Ongoing';

const Tab = createMaterialTopTabNavigator();

export default function TopRouting() {
    return (
        <Tab.Navigator style={{flex:1}} tabBarOptions={{tabStyle:{backgroundColor:mainBackgroundColor , paddingTop: 30}, activeTintColor:textColor}}>
            <Tab.Screen options={{tabBarLabel:"Đang xử lí"}} name="Ongoing" component={Ongoing} />
            <Tab.Screen options={{tabBarLabel:"Lịch sử", }} name="BookingStack" component={BookingStack}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})
