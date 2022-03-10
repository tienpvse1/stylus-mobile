import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Checkbox } from "react-native-paper";
import { goBackIcon3 } from "../../../global/GlobalIcon";
import axios from "../../../global/axios";
import {
  contactButtonColor,
  mainBackgroundColor,
  mediumTextColor,
  screenHeight,
  screenWidth,
} from "../../../global/GlobalValue";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loading from "../../../global/Loading";
export default function CreateAccount() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const saveToStorage = async (item) => {
    const objAsString = JSON.stringify(item);
    await AsyncStorage.setItem("user", objAsString);
  };
  const onCreatePress = () => {
    setLoading(true);
    axios
      .post("/user/create", {
        name: name,
        address: address,
        password: password,
        username: username,
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
    <View style={{ backgroundColor: mainBackgroundColor, flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={styles.header}>{goBackIcon3}</View>
      </TouchableWithoutFeedback>
      <View style={styles.bottomInfoContainer}>
        <Text style={styles.heading}>Tạo tài khoản</Text>
        <TextInput
          style={styles.inputField}
          value={name}
          onChangeText={setName}
          placeholder="Tên của bạn"
        />
        <TextInput
          style={styles.inputField}
          value={address}
          onChangeText={setAddress}
          placeholder="Địa chỉ của bạn"
        />
        <TextInput
          style={styles.inputField}
          value={username}
          onChangeText={setUsername}
          placeholder="Tên đăng nhập"
        />
        <TextInput
          style={styles.inputField}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          placeholder="Mật khẩu"
        />
        <TextInput
          style={styles.inputField}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          placeholder="Xác nhận mật khẩu"
        />
        <TouchableWithoutFeedback onPress={() => onCreatePress()}>
          <Text style={styles.signupButton}>Tạo tài khoản</Text>
        </TouchableWithoutFeedback>
        <Text style={styles.description}>
          Bằng việc <Text style={{ fontWeight: "bold" }}>đăng kí</Text>, bạn đã
          đồng ý với Stylus về{" "}
          <Text style={styles.note}>điều khoản dịch vụ</Text> &{" "}
          <Text style={styles.note}>chính sách bảo mật</Text>
        </Text>
        <TouchableWithoutFeedback onPress={() => navigation.pop()}>
          <Text style={{ marginTop: screenHeight * 0.25, fontSize: 16 }}>
            Bạn đã có tài khoản?{" "}
            <Text style={{ color: contactButtonColor, fontWeight: "bold" }}>
              Đăng nhập
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
  header: {
    marginTop: 20,
  },
  bottomInfoContainer: {
    alignItems: "center",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputField: {
    backgroundColor: "#f0f0f0",
    fontSize: 20,
    width: screenWidth * 0.9,
    paddingVertical: 10,
    borderRadius: 999,
    paddingLeft: 20,
    elevation: 1,
    marginBottom: 15,
  },
  signupButton: {
    width: screenWidth * 0.7,
    paddingVertical: 15,
    fontWeight: "bold",
    color: mainBackgroundColor,
    backgroundColor: contactButtonColor,
    borderRadius: 999,
    fontSize: 20,
    textAlign: "center",
    elevation: 3,
  },
  note: {
    fontWeight: "bold",
    color: contactButtonColor,
  },
  description: {
    width: screenWidth * 0.8,
    fontSize: 15,
    textAlign: "center",
    marginTop: 15,
    color: mediumTextColor,
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
