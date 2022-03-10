import { StyleSheet, View } from "react-native";
import { hexagonSize } from "../../../global/GlobalValue";
import AvatarBorder from "./AvatarBorder";
import AvatarImage from "./AvatarImage";
import React from "react";
export default function Avatar({ image }) {
  const avatar = require("../../../image/background/avatar-placeholder.png");
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <AvatarBorder />
      </View>
      <View style={styles.image}>
        <AvatarImage image={image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  avatar: {
    width: 100,
    height: 100,
  },
  border: {
    width: hexagonSize,
    height: hexagonSize,
    transform: [{ rotateZ: "90deg" }, { translateY: 30 }],
  },
  image: {
    position: "absolute",
    top: 16,
    left: -32,
  },
});
