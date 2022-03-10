import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Animation from "lottie-react-native";
import { goldColor, mainBackgroundColor, screenHeight, screenWidth, textColor } from "./GlobalValue";
export default function Loading() {
  return (
    <View style={styles.lottieDialog}>
      <Animation
        source={require("../assets/lottie/loading.json")}
        autoPlay={true}
        loop={true}
        style={styles.animate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  lottieDialog: {
    paddingTop: 20,
    backgroundColor: mainBackgroundColor,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    height: screenHeight * 0.5,
    width: screenWidth * 0.9,
    elevation:11,
    borderRadius: 30
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
