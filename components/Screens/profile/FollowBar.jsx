import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  goldColor,
  mediumTextColor,
  secondaryTextColor,
  textColor,
} from "../../../global/GlobalValue";

export default function FollowBar({ following, follower, likes }) {
  return (
    <View style={styles.followBar}>
      <View style={styles.itemContainer}>
        <Text style={styles.number}>{following}</Text>
        <Text style={styles.text}>Đang theo dõi</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.number}>{follower}</Text>
        <Text style={styles.text}>Người theo dõi</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text style={styles.number}>{likes}</Text>
        <Text style={styles.text}>Đã thích</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  followBar: {
    flexDirection: "row",
    marginTop: 10,
    paddingHorizontal: 0,
  },
  itemContainer: {
    flex: 0.333,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    fontSize: 20,
    color: textColor,
  },
  text: {
    color: mediumTextColor,
  },
});
