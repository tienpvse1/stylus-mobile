import { LinearGradient } from "expo-linear-gradient";
import Animation from "lottie-react-native";
import React from "react";
import {
  Dimensions, StyleSheet,
  Text, TouchableWithoutFeedback, View
} from "react-native";
import {
  contactButtonColor,
  mainBackgroundColor,
  mediumTextColor,
  textColor
} from "../../../global/GlobalValue";
export default function SuccessBooking({ navigation }) {
  return (
    <View style={styles.successBooking}>
      <View style={styles.container}>
        <Animation
          source={require("../../../assets/lottie/done2.json")}
          autoPlay
          loop={false}
          style={styles.animation}
        />
        <Text style={styles.message}>Bạn đã đặt lịch thành công</Text>
        <Text style={styles.description}>
          Bạn có thể xem chi tiết lịch hẹn trong mục{" "}
          <Text style={{ fontWeight: "bold", color: textColor }}>
            "Booking"
          </Text>
        </Text>
        <TouchableWithoutFeedback onPress={() => navigation.popToTop()}>
          <LinearGradient
            colors={[contactButtonColor, contactButtonColor]}
            style={styles.buttonBackground}
            start={[0, 0.5]}
            end={[1, 0.5]}
          >
            <Text style={styles.buttonText}>Tiếp tục đặt lịch</Text>
          </LinearGradient>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={()=>navigation.navigate("Booking")}>
          <Text style={styles.goToAppointment}>Xem các lịch hẹn</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: Dimensions.get("screen").height * 0.56,
    backgroundColor: mainBackgroundColor,
    borderRadius: 24,
    alignItems: "center",
  },
  successBooking: {
    position: "absolute",
    zIndex: 2,
    backgroundColor: "rgba(0,0,0,0.4)",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: 180,
    height: 180,
  },
  message: {
    color: textColor,
    fontSize: 25,
    fontWeight: "bold",
    width: "60%",
    textAlign: "center",
    marginBottom: 10,
  },
  description: {
    color: mediumTextColor,
    width: "80%",
    textAlign: "center",
    marginBottom: 20,
  },
  buttonBackground: {
    width: "80%",
    paddingVertical: 12,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
  },
  buttonText: {
    color: mainBackgroundColor,
    fontSize: 20,
    fontWeight: "bold",
  },
  goToAppointment: {
    marginTop: 15,
    fontSize: 16,
  },
});
