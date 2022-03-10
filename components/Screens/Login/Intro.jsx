import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { TextInput } from "react-native-paper";
import { eyeIcon, eyeOffIcon } from "../../../global/GlobalIcon";
import {
  contactButtonColor,
  mainBackgroundColor,
  mediumTextColor,
  screenHeight,
  screenWidth,
} from "../../../global/GlobalValue";
import axios from "../../../global/axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../../global/Loading";
export default function Intro() {
  const introImage = require("../../../image/background/logo.png");
  const google = require("../../../image/background/google.png");
  const facebook = require("../../../image/background/facebook.png");
  const [username, setUsername] = useState("dinowaelchi");
  const [password, setPassword] = useState("username666");
  const [show, setShow] = useState(true);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const onEyePress = () => {
    show ? setShow(false) : setShow(true);
  };
  const saveToStorage = async (item) => {
    const objAsString = JSON.stringify(item);
    await AsyncStorage.setItem("user", objAsString);
  };
  const onLoginPress = () => {
    setLoading(true);
    console.log("username: " + username);
    axios
      .post("/user/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        saveToStorage(res.data).then((res1) => {
          setLoading(false);
          navigation.replace("Router");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.introContainer}>
      <View style={styles.imageContainer}>
        <Image source={introImage} style={styles.introImage} />
      </View>
      <View style={styles.bottomLoginInfo}>
        <TextInput
          placeholder="username"
          label="username"
          value={username}
          onChangeText={setUsername}
          style={styles.inputField}
        />
        <View style={styles.passwordInputContainer}>
          <TextInput
            value={password}
            outlineColor="transparent"
            placeholder="password"
            label="password"
            style={styles.inputField}
            onChangeText={setPassword}
            secureTextEntry={show}
          />
          <View style={styles.iconContainer}>
            <TouchableWithoutFeedback onPress={() => onEyePress()}>
              {!show ? eyeIcon : eyeOffIcon}
            </TouchableWithoutFeedback>
          </View>
        </View>
        <TouchableWithoutFeedback
          onPress={() => navigation.push("ForgotPassword")}
        >
          <Text style={styles.forgotPassword}>Quên mật khẩu?</Text>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => onLoginPress()}>
          <Text style={styles.loginButton}>Đăng nhập</Text>
        </TouchableWithoutFeedback>
        <View style={styles.orSignWith}>
          <Text style={styles.heading}>Hoặc đăng nhập với</Text>
          <View style={styles.crossline}></View>
        </View>
        <View style={styles.loginIconContainer}>
          <View style={styles.imageWrapper}>
            <Image source={google} style={styles.loginImage} />
          </View>
          <View style={styles.imageWrapper}>
            <Image source={facebook} style={styles.loginImage} />
          </View>
        </View>
        <TouchableWithoutFeedback
          onPress={() => navigation.push("CreateAccount")}
        >
          <Text style={{ marginTop: screenHeight * 0.1 }}>
            Bạn chưa có tài khoản?
            <Text style={{ fontWeight: "bold", color: contactButtonColor }}>
              {" "}
              Tạo ngay
            </Text>
          </Text>
        </TouchableWithoutFeedback>
      </View>
      {loading && (
        <View style={styles.loadingContainer}>
          <Loading />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  introContainer: {
    position: "relative",
    backgroundColor: "#e54861",
    flex: 1,
    alignItems: "center",
  },
  introImage: {
    width: 250,
    height: 250,
  },
  bottomLoginInfo: {
    backgroundColor: mainBackgroundColor,
    width: screenWidth,
    height: screenHeight * 0.65,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    elevation: 10,
    paddingTop: 20,
    alignItems: "center",
  },
  inputField: {
    width: screenWidth * 0.7,
    backgroundColor: "transparent",
    color: contactButtonColor,
    fontSize: 17,
  },
  passwordInputContainer: {
    position: "relative",
    justifyContent: "center",
  },
  iconContainer: {
    position: "absolute",
    right: 10,
    paddingTop: 10,
  },
  forgotPassword: {
    width: screenWidth * 0.7,
    textAlign: "right",
    marginTop: 15,
    fontSize: 17,
    color: contactButtonColor,
    fontWeight: "bold",
  },
  loginButton: {
    backgroundColor: "#e54861",
    width: screenWidth * 0.65,
    paddingVertical: 15,
    fontSize: 17,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    borderRadius: 15,
    marginTop: 30,
  },
  orSignWith: {
    position: "relative",
    paddingTop: 20,
    alignItems: "center",
  },
  crossline: {
    borderBottomColor: mediumTextColor,
    borderBottomWidth: 1,
    width: screenWidth * 0.7,
    marginTop: 20,
  },
  heading: {
    position: "absolute",
    top: 28,
    backgroundColor: mainBackgroundColor,
    zIndex: 2,
    paddingHorizontal: 10,
    fontSize: 17,
  },
  loginIconContainer: {
    flexDirection: "row",
  },
  imageWrapper: {
    marginTop: 20,
    marginHorizontal: 10,
  },
  loginImage: {
    width: 50,
    height: 50,
  },
  loadingContainer: {
    position: "absolute",
    zIndex: 12,
    height: screenHeight,
    width: screenWidth,
    backgroundColor: "rgba(0,0,0,0.4)",
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
