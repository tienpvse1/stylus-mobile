import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { darkerBackground, secondaryBackgroundColor } from "../../global/GlobalValue";
import TopRouting from "./Booking/TopRouting";
export default function Booking({ navigation}) {
  return (
    <View style={styles.booking}>
      {/* <ScrollView style={{ flex: 1 }}> */}
        <TopRouting  />
      {/* </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  booking: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  
});
