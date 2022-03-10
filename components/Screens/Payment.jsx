import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { db } from "../../global/Firebase";
import {
  contactButtonColor,
  getMyDataProfile,
  secondaryBackgroundColor,
} from "../../global/GlobalValue";
import Body from "./Payment/Body";
import Header from "./Payment/Header";
import SuccessBooking from "./Payment/SuccessBooking";
export default function Payment() {
  const navigation = useNavigation();
  const route = useRoute();
  const [myUsername, setMyUsername] = useState("");
  const order = route.params.order;
  const [isMounted, setIsMounted] = useState(true);
  const cash = require("../../image/payment/money.png");
  const [selected, setSelected] = useState(0);
  const [done, setDone] = useState(false);
  const getStorageData = () => {
    getMyDataProfile().then((res) => {
      const profile = JSON.parse(res);
      if (isMounted) setMyUsername(profile.username);
    });
  };
  const [method] = useState([
    {
      key: 0,
      text: "Thanh toán tiền mặt",
      image: cash,
      description: "Thanh toán tại nhà bạn sau khi dịch vụ hoàn tất",
    },
    // { key: 1, text: "Ví Styleus", image: wallet },
  ]);

  const updateAppointmentFirestore = () => {
    let stylistUsername = order.stylist.username;
    let bookedDate = new Date(order.selectedDate);
    let ref = db.collection("appointment");
    ref.where("username", "==", stylistUsername).onSnapshot((snapshot) => {
      findSelectedDate(snapshot.docs[0].id, bookedDate);
    });
  };

  const findSelectedDate = (id, bookedDate) => {
    let isMouted = true;
    if (isMouted) {
      bookedDate.setHours(0, 0, 0, 0);
      db.collection("appointment")
        .doc(id)
        .collection("appointments")
        .where("date", "==", bookedDate)
        .onSnapshot((snapshot) => {
          snapshot.docs.forEach((doc) => {
            addAppoinment(id, doc.id);
          });
        });
    }
    return () => {
      isMouted = false;
    };
  };

  const addAppoinment = (appointmentId, dateId) => {
    let stylistUsername = order.stylist.username;
    const refer = db
      .collection("appointment")
      .doc(appointmentId)
      .collection("appointments")
      .doc(dateId);
    refer
      .collection("appointmentsOfDate")
      .add({
        guestUsername: myUsername,
        slot: order.slotId,
        styleId: order.service.id,
        stylistUsername: stylistUsername,
      })
      .then((res) => {
        sendNotification();
      });
  };

  const sendNotification = () => {
    let stylistUsername = order.stylist.username;
    const notificationRef = db.collection("notification");
    notificationRef
      .where("username", "==", stylistUsername)
      .onSnapshot((snapshot) => {
        if (snapshot.docs.length > 0) {
          snapshot.docs[0].ref.collection("notifications").add({
            bookedDate: new Date(order.selectedDate),
            guest: myUsername,
            isRead: true,
            styleId: order.service.id,
            styleName: order.service.name,
            time: new Date(),
          });
        } else {
          notificationRef.add({
            username: stylistUsername,
            checked: false,
          });
        }
      });
  };
  useEffect(() => {
    if (isMounted) {
      console.log(order.service.id);
      getStorageData(isMounted);
    }
    return () => {
      setIsMounted(false);
    };
  }, []);

  const complete = async () => {
    if (isMounted) setDone(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.payment}>
        <Header navigation={navigation} />
        <View style={styles.body}>
          <Body
            order={order}
            method={method}
            selected={selected}
            setSelected={setSelected}
          />
        </View>
      </ScrollView>
      <TouchableOpacity onPress={complete} style={styles.button}>
        <Text style={styles.buttonText} onPress={complete}>
          Đặt ngay!
        </Text>
      </TouchableOpacity>
      {done && <SuccessBooking navigation={navigation} />}
    </View>
  );
}

const styles = StyleSheet.create({
  payment: {
    flex: 1,
    backgroundColor: secondaryBackgroundColor,
  },
  body: {
    backgroundColor: secondaryBackgroundColor,
    flex: 1,
    marginBottom: 100,
  },
  button: {
    position: "absolute",
    backgroundColor: contactButtonColor,
    zIndex: 2,
    bottom: 50,
    left: -45,
    width: "90%",
    marginLeft: (Dimensions.get("screen").width * 0.3334) / 2,
    paddingVertical: 15,
    borderRadius: 999,
  },
  buttonText: {
    color: "white",
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
