import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Dimensions, StyleSheet, View, Text, TextInput } from "react-native";
import {
  filterIcon,
  navIcon,
  notificationIcon,
  searchIcon,
} from "../../../global/GlobalIcon";
import { mainBackgroundColor } from "../../../global/GlobalValue";
export default function Header() {
  return (
    <View style={styles.header}>
      <LinearGradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={styles.headerBackground}
      />
      <View style={styles.headerIcon}>
        <View style={styles.rightIcon}>{navIcon}</View>
        <View style={styles.leftIcons}>
          {filterIcon}
          <View style={{ width: 20 }} />
          {notificationIcon}
        </View>
      </View>
      <View style={styles.searchBox}>
        {searchIcon}
        <TextInput style={styles.searchInput} placeholder={"Bạn cần tìm..."} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    top: 0,

    position: "absolute",
    zIndex: 2,
    width: "100%",
    paddingTop: 32,
    paddingHorizontal: 20,
  },
  rightIcon: {},
  headerIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftIcons: {
    flexDirection: "row",
  },
  headerBackground: {
    position: "absolute",
    width: Dimensions.get("screen").width,
    height: 150,
    top: 0,
  },
  searchBox:{
    flexDirection:"row",
    alignItems:"center",
    backgroundColor: mainBackgroundColor,
    paddingVertical: 10,
    paddingLeft: 7,
    borderRadius: 10,
    marginTop: 10
  },
  searchInput:{
    fontSize: 18
  }
});
