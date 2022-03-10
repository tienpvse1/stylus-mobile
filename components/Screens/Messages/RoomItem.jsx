import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import axios from "../../../global/axios";
import { useNavigation } from "@react-navigation/core";
import {
  base64Prefix,
  getMyDataProfile,
  mediumTextColor,
} from "../../../global/GlobalValue";
export default function RoomItem({ data }) {
  const [stylist, setStylist] = useState({
    stylistId: 1,
    name: "",
    address: "",
    image: null,
    phoneNumber: "",
    longtitude: 10.0391,
    latitude: 10.0391,
    birth: "",
    username: "",
    email: "",
    password: "",
    position: "",
    served: 0,
  });
  const [mins, setMins] = useState("");
  const [myUsername, setMyUsername] = useState("sam");
  const navigation = useNavigation();
  const calculateTime = () => {
    var today = new Date();
    var lastTime = data.lastMessageTime;
    var diffMs = today - lastTime;
    var diffDays = Math.floor(diffMs / 86400000); // days
    var diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
    var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
    console.log(diffDays + "days - " + diffHrs + " hrs - " + diffMins);
    if (diffDays > 0) {
      setMins(diffDays + " ngày trước");
    } else if (diffHrs > 0) {
      setMins(diffHrs + " giờ trước");
    } else if (diffMins > 1) {
      setMins(diffMins + " phút trước");
    } else {
      setMins("vừa xong");
    }
  };
  const getStorageData = () => {
    getMyDataProfile().then((res) => {
      const profile = JSON.parse(res);
      setMyUsername(profile.username);
    });
  };

  const onMessagePress = () => {
    const recieverName = data.peoples.filter(
      (people) => people !== myUsername
    )[0];
    navigation.navigate("Message", {
      chatRoomId: data.id,
      reciverName: recieverName,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={onMessagePress}>
      <View style={styles.messageItemContainer}>
        <Image
          source={{
            uri: "https://i0.wp.com/www.hadviser.com/wp-content/uploads/2020/02/6-textured-dark-hairstyle-CLR74c8swZM.jpg?resize=929%2C1039&ssl=1",
          }}
          style={styles.avatar}
        />
        <View style={styles.rightContent}>
          <Text style={styles.stylistName}>Teletubby</Text>
          <Text style={styles.lastMessage}>
             Tôi: abc qwerty • 20 phút trước
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  messageItemContainer: {
    flexDirection: "row",
    marginVertical: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 999,
  },
  stylistName: {
    fontSize: 17,
    fontWeight: "bold",
  },
  rightContent: {
    marginLeft: 15,
    paddingTop: 7,
  },
  lastMessage: {
    color: mediumTextColor,
  },
});
