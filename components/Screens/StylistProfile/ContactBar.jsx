import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import {
  callIcon,
  profileLocationIcon,
  shareIcon,
  videoIcon,
} from "../../../global/GlobalIcon";
import { getMyDataProfile, textColor } from "../../../global/GlobalValue";
import { db } from "../../../global/Firebase";
import { useNavigation } from "@react-navigation/core";
export default function ContactBar({ username }) {
  const [myUsername, setMyUsername] = useState("");
  const navigation = useNavigation();
  const onMessagePress = () => {
    const roomId = username + "_" + myUsername;

    db.collection("room")
      .where("name", "==", roomId)
      .onSnapshot((snapshot) => {
        if (snapshot.empty) {
          db.collection("room")
            .add({
              name: roomId,
              peoples: [username, myUsername],
              lastMessageTime: new Date(),
              lastMessageText: "Hello",
              lastSender: myUsername,
            })
            .then((res) => {
              console.log("added");
              navigation.push("Message", { chatRoomId: res.id, reciverName: username });
            });
        } else {
          navigation.push("Message", { chatRoomId: snapshot.docs[0].id, reciverName: username });
        }
      });
  };
  useEffect(()=>{
    getMyDataProfile().then(res=>{
      const profile = JSON.parse(res);
      setMyUsername(profile.username);
    })
  },[])

  return (
    <View style={styles.iconContainer}>
      <TouchableWithoutFeedback onPress={onMessagePress}>
        <View style={styles.item}>
          {callIcon}
          <Text style={styles.text}>Nhắn tin</Text>
        </View>
      </TouchableWithoutFeedback>
      <View style={styles.item}>
        {videoIcon}
        <Text style={styles.text}>Facetime</Text>
      </View>
      <View style={styles.item}>
        {profileLocationIcon}
        <Text style={styles.text}>Vị trí</Text>
      </View>
      <View style={styles.item}>
        {shareIcon}
        <Text style={styles.text}>Chia sẻ</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text: {
    color: textColor,
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
  },
});
