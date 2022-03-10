import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { searchIcon2 } from "../../../global/GlobalIcon";
import { mainBackgroundColor, screenWidth } from "../../../global/GlobalValue";
import RoomItem from "./RoomItem";

export default function MessageTab() {
  const [roomInfo, setRoomInfo] = useState([
    {
      lastMessageText: "",
      lastMessageTime: null,
      lastSender: "",
      name: "",
      peoples: ["", ""],
      id: "",
    },
  ]);

  return (
    <View style={styles.messageContainer}>
      <View style={styles.searchBoxContainer}>
        <TextInput
          defaultValue={""}
          style={styles.searchBox}
          placeholder="Tìm kiếm"
        />
        <View style={styles.searchIconContainer}>{searchIcon2}</View>
      </View>
      <View>
        <RoomItem data={roomInfo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBoxContainer: {
    position: "relative",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 20,
  },
  searchBox: {
    borderRadius: 999,
    backgroundColor: mainBackgroundColor,
    width: screenWidth * 0.9,
    fontSize: 17,
    paddingVertical: 10,
    paddingLeft: 60,
    elevation: 4,
    marginLeft: screenWidth * 0.05,
  },
  searchIconContainer: {
    position: "absolute",
    elevation: 5,
    left: 40,
  },
});
