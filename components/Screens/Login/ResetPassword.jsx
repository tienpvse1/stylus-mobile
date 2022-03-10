import React, { useState , useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { goBackIcon3 } from "../../../global/GlobalIcon";
import {
  contactButtonColor,
  mainBackgroundColor,
  mediumTextColor,
  screenHeight,
  screenWidth,
} from "../../../global/GlobalValue";
import { useNavigation } from "@react-navigation/core";
import SuccessDialog from "./SuccessDialog";
export default function ResetPassword() {
  const navigation = useNavigation();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [show, setShow] = useState(false);
  const [match, setMatch] = useState(false);
  const onConfirmPress = () => {
    Keyboard.dismiss();
    navigation.replace("Login");
  };

  const onContinuePress = () => {
    setShow(false);
    navigation.replace("ResetPassword");
  };

  const onPasswordInput = (value) => {
    setPassword(value);
  };
  const onConfirmPasswordInput = (value) => {
    setConfirmPassword(value);
  };
  useEffect(()=>{
    if (password.length === 0 || confirmPassword.length === 0) {
        setMatch(false);
      } else {
        password === confirmPassword ? setMatch(true) : setMatch(false);
      }
  },[password, confirmPassword])
  
  return (
    <View style={{ backgroundColor: mainBackgroundColor, flex: 1 }}>
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={styles.header}>{goBackIcon3}</View>
      </TouchableWithoutFeedback>
      <View style={styles.mainContent}>
        <Text style={styles.heading}>Đặt lại mật khẩu</Text>
        <TextInput
          value={password}
          onChangeText={(value) => onPasswordInput(value)}
          secureTextEntry={true}
          placeholder={"Mật khẩu mới"}
          style={styles.inputField}
        />
        <TextInput
          value={confirmPassword}
          onChangeText={(value) => onConfirmPasswordInput(value)}
          secureTextEntry={true}
          placeholder={"Xác nhận mật khẩu mới"}
          style={styles.inputField}
        />
        {match ? (
          <TouchableWithoutFeedback onPress={() => onConfirmPress()}>
            <Text style={styles.confirmButton}>Xác nhận</Text>
          </TouchableWithoutFeedback>
        ) : (
          <Text style={styles.disableButton}>Xác nhận</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContent: {
    alignItems: "center",
  },
  header: {
    marginVertical: 20,
    marginLeft: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
  },
  description: {
    width: screenWidth * 0.75,
    textAlign: "center",
    fontSize: 15,
    marginBottom: screenHeight * 0.08,
  },
  inputField: {
    backgroundColor: "#f0f0f0",
    fontSize: 20,
    width: screenWidth * 0.9,
    paddingVertical: 10,
    borderRadius: 999,
    paddingLeft: 20,
    elevation: 1,
    marginBottom: screenHeight * 0.05,
  },
  confirmButton: {
    backgroundColor: contactButtonColor,
    color: mainBackgroundColor,
    width: screenWidth * 0.8,
    paddingVertical: 10,
    fontSize: 20,
    borderRadius: 999,
    textAlign: "center",
    fontWeight: "bold",
  },
  disableButton: {
    backgroundColor: mediumTextColor,
    color: mainBackgroundColor,
    width: screenWidth * 0.8,
    paddingVertical: 10,
    fontSize: 20,
    borderRadius: 999,
    textAlign: "center",
    fontWeight: "bold",
  },
});
