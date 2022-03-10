import React from "react";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import {
  appointmentIcon,
  heartIcon,
  infoIcon,
  inviteIcon,
  keyIcon,
  logoutIcon,
  myVoteIcon,
  paymentIcon,
  rightIcon,
  walletIcon,
} from "../../../global/GlobalIcon";
import { profileBodyColor, textColor } from "../../../global/GlobalValue";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Body({myUsername}) {
  const navigation = useNavigation();
  const logout = () => {
    AsyncStorage.removeItem("user").then(navigation.replace("LoginStack")).then(console.log("removed"));
  };

  const touchableItems = [
    { key: 1, text: "Đơn đặt và lịch hẹn", icon: appointmentIcon },
    { key: 2, text: "Đánh giá của tôi", icon: myVoteIcon },
    { key: 3, text: "Stylist đã thích", icon: heartIcon },
    { key: 4, text: "Phương thức thanh toán", icon: walletIcon },
    { key: 5, text: "Lịch sử thanh toán", icon: paymentIcon },
    { key: 6, text: "Đổi mật khẩu", icon: keyIcon },
    { key: 7, text: "Mời bạn bè", icon: inviteIcon },
    { key: 8, text: "Về Stylus", icon: infoIcon },
    { key: 9, text: "Đăng xuất", icon: logoutIcon, action: logout },
  ];
  return (
    <View style={styles.body}>
      <View style={styles.scrollView}>
        {touchableItems.map((item) =>
          item.action ? (
            <TouchableWithoutFeedback
              key={item.key}
              onPress={() => item.action()}
            >
              <View style={styles.item}>
                <View style={styles.icon}>{item.icon}</View>
                <View style={styles.text}>
                  <Text style={{ color: textColor, fontSize: 16 }}>
                    {item.text}
                  </Text>
                </View>
                <View style={styles.goTo}>{rightIcon}</View>
              </View>
            </TouchableWithoutFeedback>
          ) : (
            <View style={styles.item} key={item.key}>
              <View style={styles.icon}>{item.icon}</View>
              <View style={styles.text}>
                <Text style={{ color: textColor, fontSize: 16 }}>
                  {item.text}
                </Text>
              </View>
              <View style={styles.goTo}>{rightIcon}</View>
            </View>
          )
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: "100%",
    backgroundColor: "#f2f2f2",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 0.19,
    borderBottomColor: "#cfcfc4",
    justifyContent: "space-between",
  },
  icon: {
    flex: 0.12,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    flex: 0.78,
    color: "white",
  },
  goTo: {
    flex: 0.1,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 15,
  },
});
