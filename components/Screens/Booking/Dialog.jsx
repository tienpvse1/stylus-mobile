import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import {
  contactButtonColor,
  mainBackgroundColor,
  mediumTextColor,
  textColor,
} from "../../../global/GlobalValue";
import { RadioButton } from "react-native-paper";
import { userIcon } from "../../../global/GlobalIcon";
import {
  appointmentRef,
  db,
  getNofificationRefByUsername,
} from "../../../global/Firebase";
const screen = Dimensions.get("window");

export default function Dialog({
  action,
  deleteId,
  deleteUsername,
  doc1Id,
  doc2Id,
  myUsername,
  date
}) {
  const image = require("../../../image/hair_style/curtain-bangs.jpg");
  const [seletedIndex, setSelectedIndex] = useState(0);

  const [reasons] = useState([
    {
      text: "Thay đổi nhu cầu làm đẹp",
    },
    {
      text: "Muốn thay đổi thời gian đặt",
    },
    {
      text: "Chưa áp dụng mã giảm giá",
    },
    {
      text: "Khác...",
    },
  ]);

  useEffect(() => {
    console.log(deleteId);
    console.log(deleteUsername);
  }, []);

  const onConfirmPress = () => {
    appointmentRef()
      .doc(doc1Id)
      .collection("appointments")
      .doc(doc2Id)
      .collection("appointmentsOfDate")
      .doc(deleteId)
      .delete()
      .then(
        getNofificationRefByUsername(deleteUsername).then((res) => {
          res.docs[0].ref.collection("notifications").add({
            guest: myUsername, 
            isRead: true,
            delete: true,
            time: new Date(),
            bookedDate: date
          }).then(action(false));
        })
      );
  };

  return (
    <View style={styles.container}>
      <View style={styles.dialog}>
        <View style={styles.textContent}>
          <Image source={image} style={styles.image} />
          <View style={styles.rightContent}>
            <Text style={styles.code}>Mã đặt lịch: #1625049</Text>
            <Text style={styles.stylist}>{userIcon} Teletubby</Text>
            <Text style={styles.datetime}>Lịch hẹn: 12:00, 30/6/2021</Text>
          </View>
        </View>
        <View>
          <Text style={styles.heading}>Lí do bạn muốn hủy lịch: </Text>
          {reasons.map((item, index) => (
            <View key={index}>
              <TouchableWithoutFeedback onPress={() => setSelectedIndex(index)}>
                <View style={styles.reason}>
                  <RadioButton
                    color={contactButtonColor}
                    status={seletedIndex === index ? "checked" : "unchecked"}
                    onPress={() => setSelectedIndex(index)}
                  />
                  <Text>{item.text}</Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          ))}
        </View>
        <View style={styles.buttons}>
          <TouchableWithoutFeedback onPress={() => onConfirmPress()}>
            <Text style={styles.confirm}>XÁC NHẬN</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.buttons}>
          <TouchableWithoutFeedback onPress={() => action(false)}>
            <Text style={styles.back}>Trở về</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.2)",
    zIndex: 2,
    elevation: 10,
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  dialog: {
    width: screen.width * 0.8,
    height: screen.height * 0.5,
    backgroundColor: mainBackgroundColor,
    transform: [{ translateY: -screen.height * 0.1 }],
    borderRadius: 20,
  },
  textContent: {
    marginLeft: 20,
    marginTop: 20,
    flexDirection: "row",
  },
  image: {
    height: 80,
    width: 80,
  },
  rightContent: {
    marginLeft: 15,
  },
  code: {
    fontSize: 17,
    fontWeight: "bold",
  },
  datetime: {
    marginTop: 8,
    fontSize: 14,
    color: mediumTextColor,
  },
  heading: {
    marginLeft: 10,
    marginTop: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
  reason: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 15,
  },
  stylist: {
    color: textColor,
    fontSize: 16,
    marginTop: 10,
  },
  buttons: {
    alignItems: "center",
    marginTop: 10,
  },
  confirm: {
    width: "90%",
    backgroundColor: contactButtonColor,
    color: mainBackgroundColor,
    fontSize: 17,
    textAlign: "center",
    paddingVertical: 7,
    borderRadius: 10,
    fontWeight: "bold",
  },
  back: {
    color: textColor,
  },
});
