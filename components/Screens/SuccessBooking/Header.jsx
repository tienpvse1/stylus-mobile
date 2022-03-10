import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { goBackIcon } from "../../../global/GlobalIcon";
import { darkBackground } from "../../../global/GlobalValue";

export default function Header({action}) {
  return (
    <View style={styles.header}>
        <TouchableWithoutFeedback onPress={action}>
        {goBackIcon}
        </TouchableWithoutFeedback>
      <Text style={styles.headerText}>Thông tin lịch hẹn</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: 80,
    backgroundColor:darkBackground,
    flexDirection:"row",
    alignItems:"center",
    paddingLeft: 10
  },
  headerText: {
      color: "white",
      fontSize: 24,
      fontWeight:"bold"
  }
});
