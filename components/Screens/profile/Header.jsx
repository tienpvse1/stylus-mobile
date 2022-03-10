import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";
import { cogIcon, notificationIcon2 } from "../../../global/GlobalIcon";
import {
  contactButtonColor,
  mainBackgroundColor,
  mediumTextColor,
  textColor,
} from "../../../global/GlobalValue";
import Avatar from "./Avatar";
import FollowBar from "./FollowBar";
import axios from "../../../global/axios";

export default function Header({ onEditClick, myUsername }) {
  const [user, setUser] = useState({
    address: "256 Phạm Văn Đồng",
    birth: "27/10/2000",
    email: "dinowaelchi@gmail.com",
    gender: "female",
    id: 0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStp2a_OQzfEJEDYVMYv-Xclq_0tRRxZNWFRw&usqp=CAU",
    name: "Dino Waelchi",
    password: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);

  return (
    !loading && (
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <View style={styles.icon}>{notificationIcon2}</View>
          <View style={styles.icon}>{cogIcon}</View>
        </View>
        <View style={styles.mainInfo}>
          <Avatar image={user.image} />
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
            <TouchableNativeFeedback
              onPress={onEditClick}
              style={styles.touchable}
            >
              <Text style={styles.changeButton}>Sửa thông tin</Text>
            </TouchableNativeFeedback>
          </View>
        </View>
        <FollowBar following={128} follower={640} likes={240} />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: mainBackgroundColor,
    paddingBottom: 24,
    paddingLeft: 0,
  },
  header: {
    flexDirection: "row",
    paddingTop: 38,
    justifyContent: "flex-end",
    paddingRight: 10,
  },
  icon: {
    marginRight: 15,
  },
  mainInfo: {
    flexDirection: "row",
    paddingTop: 0,
    paddingLeft: 40,
  },
  name: {
    fontSize: 25,
    fontWeight: "bold",
    color: textColor,
    paddingTop: 10,
  },
  email: {
    color: mediumTextColor,
  },
  changeButton: {
    backgroundColor: contactButtonColor,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 5,
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    borderRadius: 999,
  },
});
