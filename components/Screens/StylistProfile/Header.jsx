import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { followIcon, goBackIcon } from "../../../global/GlobalIcon";
import { LinearGradient } from "expo-linear-gradient";
export default function Header({ navigation }) {
  const backToHome = () => {
    navigation.pop();
  };
  return (
    <View style={styles.header}>
      <LinearGradient
        colors={["rgba(0,0,0,0.7)", "rgba(0,0,0,0.3)"]}
        style={styles.gradient}
      >
        <TouchableWithoutFeedback onPress={backToHome} >
          {goBackIcon}
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback >{followIcon}</TouchableWithoutFeedback>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    zIndex: 2,
    width: "100%",
  },
  gradient: {
    height: 270,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingTop: 50,
  },

});
