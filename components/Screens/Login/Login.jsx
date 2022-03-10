import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import {
  contactButtonColor,
  mainBackgroundColor,
  screenHeight,
  screenWidth,
  textColor,
} from "../../../global/GlobalValue";
import { useNavigation } from "@react-navigation/core";
import axios from "../../../global/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function Login() {
  const [username, setUsername] = useState("dinowaelchi");
  const [password, setPassword] = useState("username666");
  const navigation = useNavigation();
  const introImage = require("../../../image/background/logo.png");

  

 
  return (
    <View style={styles.loginContainer}>
      <View>
        <Image source={introImage} style={styles.introImage} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.heading}>Đăng nhập với Stylus</Text>
        <TextInput
          value={username}
          style={styles.inputField}
          placeholder="Tên tài khoản"
          onChangeText={setUsername}
        />
        <TextInput
          value={password}
          style={styles.inputField}
          placeholder="Mật khẩu"
          secureTextEntry={true}
          onChangeText={setPassword}
        />
        <TouchableWithoutFeedback>
          <Text style={styles.loginButton}>Đăng nhập</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.push("ForgotPassword")}
        >
          <Text style={{ marginTop: 20 }}>Quên mật khẩu ?</Text>
        </TouchableWithoutFeedback>
        <Text style={{ marginTop: 70 }}>
          Bạn chưa có tài khoản?{" "}
          <TouchableWithoutFeedback
            onPress={() => navigation.push("CreateAccount")}
          >
            <Text style={{ color: contactButtonColor, fontWeight: "bold" }}>
              Tạo ngay
            </Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  introImage: {
    width: screenWidth,
    height: screenHeight,
    position: "absolute",
    top: 0,
    left: 0,
  },
  bottomContainer: {
    position: "absolute",
    color: textColor,
    width: screenWidth,
    height: screenHeight * 0.65,
    position: "absolute",
    zIndex: 3,
    top: screenHeight * 0.35,
    backgroundColor: mainBackgroundColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 20,
  },
  inputField: {
    backgroundColor: "#f0f0f0",
    width: screenWidth * 0.8,
    fontSize: 20,
    alignItems: "center",
    marginTop: 20,
    paddingLeft: 20,
    paddingVertical: 15,
    borderRadius: 999,
    elevation: 1,
  },
  loginButton: {
    width: screenWidth * 0.7,
    backgroundColor: contactButtonColor,
    paddingVertical: 15,
    borderRadius: 999,
    textAlign: "center",
    color: mainBackgroundColor,
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
  },
});
