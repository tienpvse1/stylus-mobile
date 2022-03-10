import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet } from "react-native";
import Booking from "../components/Screens/Booking";
import Messages from "../components/Screens/Messages";
import NearBy from "../components/Screens/NearBy";
import HomeStack from "../components/stacks/HomeStack";
import ProfileStack from "../components/stacks/ProfileStack";
import {
  calendarIcon, focusCalendarIcon, focusHomeIcon,
  focusLocationIcon, focusMessageIcon, focusProfileIcon, homeIcon, locationIcon, messageIcon, profileIcon
} from "../global/GlobalIcon";
const Tabs = createBottomTabNavigator();
export default function Router() {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "#ef1d6a",
        tabStyle: { backgroundColor: "#f9f9f9" },
        
      }}
    >
      <Tabs.Screen
        component={HomeStack}
        name="Home"
        options={{ tabBarIcon: ({focused}) => focused? focusHomeIcon : homeIcon,tabBarLabel:"Trang chủ"}}
      />
      <Tabs.Screen
        component={NearBy}
        name="NearBy"
        options={{ tabBarIcon: ({focused}) => focused? focusLocationIcon : locationIcon, tabBarLabel:"Gần tôi" }}
      />
      <Tabs.Screen
        component={Messages}
        name="Messages"
        options={{ tabBarIcon: ({focused}) => focused? focusMessageIcon : messageIcon, tabBarLabel:"Tin nhắn" }}
      />
      <Tabs.Screen
        component={Booking}
        name="Booking"
        options={{ tabBarIcon: ({focused}) => focused? focusCalendarIcon: calendarIcon, tabBarLabel:"Lịch hẹn" }}
      />
      <Tabs.Screen
        component={ProfileStack}
        name="Profile"
        options={{ tabBarIcon: ({focused}) => focused? focusProfileIcon : profileIcon, tabBarLabel:"Cá nhân" }}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({});
