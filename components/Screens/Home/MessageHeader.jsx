import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import {
  activedIcon,
  goBackIcon3,
  tripleDotIcon,
  videoIcon2,
} from "../../../global/GlobalIcon";
import { useNavigation } from "@react-navigation/core";
import { mainBackgroundColor, textColor } from "../../../global/GlobalValue";
export default function MessageHeader({ reciverName }) {
  const navigation = useNavigation();
  return (
    <View style={styles.messageHeaderContainer}>
      <TouchableWithoutFeedback onPress={()=>navigation.pop()}>{goBackIcon3}</TouchableWithoutFeedback>
      <Text style={styles.stylistName}>
        <Text style={styles.isActived}>• </Text>
        {reciverName}
      </Text>
      <View style={styles.videoCall}>
        {videoIcon2}
        {tripleDotIcon}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  messageHeaderContainer: {
    paddingTop: 20,
    backgroundColor: mainBackgroundColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: 90,
    elevation: 4,
  },
  stylistName: {
    fontSize: 20,
    fontWeight: "bold",
    color: textColor,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
  },
  isActived: {
    color: "#77dd77",
    fontSize: 40,
  },
  videoCall: {
    flexDirection: "row",
    alignItems: "center",
    width: 60,
    justifyContent: "space-between",
  },
});
