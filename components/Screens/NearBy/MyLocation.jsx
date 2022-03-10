import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { myLocationIcon } from "../../../global/GlobalIcon";

export default function MyLocation() {
  return (
    <View style={styles.container}>
      {myLocationIcon}
      <Image
        source={require("../../../image/avatar/avatar.png")}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      position:"relative",
      alignItems:"center"
  },
  image: {
    height: 40,
    width: 40,
    borderRadius: 999,
    position:"absolute",
    top: 10
  },
});
