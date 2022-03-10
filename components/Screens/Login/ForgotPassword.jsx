import React, { useState } from "react";
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
  screenHeight,
  screenWidth,
} from "../../../global/GlobalValue";
import { useNavigation } from "@react-navigation/core";
import SuccessDialog from "./SuccessDialog";

export default function ForgotPassword() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const onConfirmPress = () => {
    Keyboard.dismiss();
    setShow(true);
  };

  const onContinuePress = () => {
    setShow(false);
    navigation.replace("ResetPassword");
  };
  return (
    <View style={{ backgroundColor: mainBackgroundColor, flex: 1 }}>
      <TouchableWithoutFeedback onPress={()=> navigation.pop()}>
        <View style={styles.header}>{goBackIcon3}</View>
      </TouchableWithoutFeedback>
      <View style={styles.mainContent}>
        <Text style={styles.heading}>Quên mật khẩu</Text>
        <Text style={styles.description}>
          Vui lòng nhập email của bạn sau đó bấm "
          <Text style={{ fontWeight: "bold" }}>Xác nhận</Text>", bạn sẽ nhận
          được mã đặt lại mật khẩu qua email
        </Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder={"Email của bạn"}
          style={styles.inputField}
        />
        <TouchableWithoutFeedback onPress={() => onConfirmPress()}>
          <Text style={styles.confirmButton}>Xác nhận</Text>
        </TouchableWithoutFeedback>
      </View>
      {show && <SuccessDialog action={onContinuePress} />}
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
});
