import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Animation from "lottie-react-native";
import { textColor } from "../../../global/GlobalValue";

export default function Empty() {
  return (
    <View>
      <Animation
        source={require("../../../assets/lottie/emptyBox.json")}
        loop={false}
        autoPlay={true}
        style={styles.emptyBoxAnimation}
      />
      <Text style={styles.text}>
          Chưa có đơn hàng
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyBoxAnimation: {
    width: 100,
    height: 350,
    paddingLeft: 50,
  },
  text:{
      color: textColor,
      fontSize: 23,
      fontWeight:"bold",
      textAlign:"center",
      transform:[{translateY:-50}]
  }
});
