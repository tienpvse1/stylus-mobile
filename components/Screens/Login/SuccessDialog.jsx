import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";
import Animation from "lottie-react-native";
import {
  contactButtonColor,
  mainBackgroundColor,
  mediumTextColor,
  screenHeight,
  screenWidth,
} from "../../../global/GlobalValue";
export default function SuccessDialog({ action }) {
  const lottie = require("../../../assets/password.json");
  const [resetCode, setResetCode] = useState("");
  return (
    <View style={styles.successDialogContainer}>
      <View style={styles.dialogContainer}>
        <Animation source={lottie} autoPlay={true} style={styles.lottie} />
        <Text style={styles.description}>Mã đặt lại mật khẩu đã được gửi</Text>
        <Text style={styles.moreInfo}>
          Hãy kiểm tra email của bạn và nhập mã xác nhận
        </Text>
        <TextInput
          style={styles.inputField}
          keyboardType="numeric"
          value={resetCode}
          onChangeText={setResetCode}
          placeholder="Mã xác nhận"
        />
        <TouchableWithoutFeedback>
          <Text style={styles.confirmButton} onPress={() => action(false)}>
            Tiếp tục
          </Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  successDialogContainer: {
    position: "absolute",
    height: screenHeight,
    width: screenWidth,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
  },
  dialogContainer: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.55,
    borderRadius: 20,
    backgroundColor: mainBackgroundColor,
    alignItems: "center",
  },
  lottie: {
    height: 150,
    width: 150,
  },
  description: {
    fontSize: 18,
    fontWeight: "bold",
    width: screenWidth * 0.5,
    textAlign: "center",
    marginVertical: 10,
  },
  moreInfo: {
    textAlign: "center",
    width: screenWidth * 0.6,
    color: mediumTextColor,
    marginBottom: 45,
  },
  confirmButton: {
    backgroundColor: contactButtonColor,
    width: screenWidth * 0.6,
    paddingVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: mainBackgroundColor,
    borderRadius: 999,
  },
  inputField: {
    backgroundColor: "#f0f0f0",
    width: screenWidth * 0.7,
    borderRadius: 999,
    paddingVertical: 15,
    fontSize: 18,
    paddingLeft: 20,
    marginBottom: 20,
  },
});
