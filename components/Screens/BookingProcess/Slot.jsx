import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { nextIcon, nextIconDisable } from "../../../global/GlobalIcon";
import {
  darkBackground,
  goldColor,
  secondaryTextColor,
} from "../../../global/GlobalValue";

export default function Slot({ time, status }) {
  return (
    <View>
      {status === "OK" ? (
        <View style={styles.container}>
          <Text style={styles.timeText}>
            {time} 
          </Text>
          {nextIcon}
        </View>
      ) : (
        <View style={styles.disableContainer}>
          <Text style={styles.timeTextDisable}>
            {time} 
          </Text>
          {nextIconDisable}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: darkBackground,
    paddingVertical: 17,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    borderBottomColor: secondaryTextColor,
    borderBottomWidth: 0.8,
  },
  disableContainer:{
      backgroundColor: "#464757",
      paddingVertical: 17,
      justifyContent: "space-between",
      flexDirection: "row",
      paddingHorizontal: 15,
      alignItems: "center",
      borderBottomColor: secondaryTextColor,
      borderBottomWidth: 0.8,
    },
  timeText: {
    color: "white",
    fontSize: 18,
  },
  timeTextDisable:{
    color: secondaryTextColor,
    fontSize: 18,
  }
});
