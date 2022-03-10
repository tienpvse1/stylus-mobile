import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import {
  base64Prefix,
  contactButtonColor,
  getMyDataProfile,
  mainBackgroundColor,
  textColor,
} from "../../../global/GlobalValue";

export default function MessageText({ message }) {
  const [myUsername, setMyUsername] = useState("");
  const getStorageData = () => {
    getMyDataProfile().then((res) => {
      const profile = JSON.parse(res);
      setMyUsername(profile.username);
    });
  };
  useEffect(() => {
    getStorageData();
  }, []);
  return (
    <View
      style={
        message.username === myUsername
          ? styles.myMessageContainer
          : styles.stylistMessageContainer
      }
    >
      {message.text.length > 0 && (
        <Text
          style={
            message.username === myUsername
              ? styles.myMessage
              : styles.stylistMessage
          }
        >
          {message.text}
        </Text>
      )}

      {message.isAbort
        ? message.userImage && (
            <View style={styles.abortedStyles}>
              <Image
                source={{ uri: base64Prefix + message.userImage }}
                height={100}
                width={100}
                style={{ height: 100, width: 100, borderRadius: 10 }}
              />
              <Text style={styles.description}>{message.username} đã hủy lịch hẹn : </Text>
            </View>
          )
        : message.userImage && (
            <Image
              source={{ uri: base64Prefix + message.userImage }}
              height={100}
              width={100}
              style={{ height: 100, width: 100, borderRadius: 10 }}
            />
          )}
    </View>
  );
}

const styles = StyleSheet.create({
  myMessageContainer: {
    flex: 1,
    // width: Dimensions.get("screen").width,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  stylistMessageContainer: {
    maxWidth: Dimensions.get("screen").width * 0.65,

    flex: 1,
  },
  myMessage: {
    backgroundColor: contactButtonColor,
    color: mainBackgroundColor,
    paddingHorizontal: 20,
    borderRadius: 999,
    fontSize: 17,
    paddingVertical: 7,
    marginBottom: 5,
  },
  stylistMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#e6e6e0",
    flex: 1,
    color: textColor,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 999,
    borderBottomRightRadius: 999,
    borderTopRightRadius: 999,
    fontSize: 17,
    paddingVertical: 7,
    marginBottom: 5,
  },
  abortedStyles:{
    backgroundColor: "#e6e6e0",
    flexDirection: "row",
    padding: 10
  },
  description:{
    width:120,
    marginLeft:10
  }
});
