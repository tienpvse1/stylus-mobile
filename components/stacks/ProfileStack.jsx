import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import Profile from "../Screens/Profile";
import EditProfile from "../Screens/profile/Stack/EditProfile";
import React from 'react'
const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
