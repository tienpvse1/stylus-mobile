import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import {
  dropDownIcon,
  followIcon2,
  goBackIcon2,
  searchIcon,
} from "../../../global/GlobalIcon";

export default function TopInfo({ stylistName, location, navigation, action }) {
  const backToHome = () => {
    navigation.popToTop();
  };

  return (
    <View style={styles.topInfo}>
      <View style={styles.topInfoContainer}>
        <TouchableWithoutFeedback onPress={backToHome}>
          <View style={styles.iconContainer}>{goBackIcon2}</View>
        </TouchableWithoutFeedback>
        <Text style={styles.mainInfo}>
          {stylistName}-{location}
        </Text>
        <View style={styles.iconContainer}>{followIcon2}</View>
      </View>
      <View style={styles.filterContainer}>
        <View style={styles.dropdownContainer}>
          <Text style={{ fontWeight: "bold" }}>Gợi ý kiểu tóc Trending</Text>
          {dropDownIcon}
        </View>
        <TouchableWithoutFeedback onPress={()=>action()}>
          <View style={styles.search}>
            {searchIcon}
            <Text>Tìm</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topInfo: {
    backgroundColor: "white",
    position: "absolute",
    zIndex: 3,
    width: "100%",
    paddingHorizontal: 10,
    height: 125,
    top:20
  },
  topInfoContainer: {
    height: "50%",
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
    flex: 0.15,
  },
  mainInfo: {
    flex: 0.7,
    fontSize: 17,
  },
  filterContainer: {
    flexDirection: "row",
  },
  dropdownContainer: {
    flexDirection: "row",
    width: "70%",
    backgroundColor: "#ecf2ff",
    paddingHorizontal: 10,
    paddingVertical: 7,
    justifyContent: "space-between",
    borderRadius: 999,
  },
  search: {
    flexDirection: "row",
    width: "25%",
    backgroundColor: "#ecf2ff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    marginLeft: 15,
  },
});
