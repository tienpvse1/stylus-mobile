import Animation from "lottie-react-native";
import React from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { darkerBackground, goldColor } from "../../../global/GlobalValue";

export default function LottieDialog({action}) {
  return (
    <View style={styles.lottieDialog}>
      <Animation
        source={require("../../../assets/lottie/success.json")}
        autoPlay={true}
        loop={false}
        style={styles.animate}
      />
      <Text style={styles.successText}>Đặt hẹn thành công</Text>
      <TouchableWithoutFeedback onPress={()=>action(false)}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>OK</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  lottieDialog: {
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.2)",
    height: Dimensions.get("window").height * 0.4,
    width: Dimensions.get("window").height * 0.4,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  animate: {
    height: 100,
    width: 100,
  },
  successText: {
    color: "white",
    fontSize: 30,
  },
  buttonText: {
      color:darkerBackground,
      textAlign:"center",
      fontSize: 20,
    fontWeight:"bold",
  },
  buttonContainer: {
    backgroundColor: goldColor,
    width: "60%",
    paddingVertical: 15,
    borderRadius: 20,
    marginTop: 15,
  },
});
