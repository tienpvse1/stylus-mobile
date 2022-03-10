import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { darkerBackground } from "../../global/GlobalValue";
import BookInfo from "./SuccessBooking/BookInfo";
import ButtonGroup from "./SuccessBooking/ButtonGroup";
import Header from "./SuccessBooking/Header";
import LottieDialog from "./SuccessBooking/LottieDialog";
export default function SuccessBooking({ navigation, route }) {
  const [show, setShow] = useState(false);

  const bookInfo = route.params.order.order;
  const order = route.params.order;
  useEffect(() => {
    console.log("info :", order);
  }, []);

  const goToHome =()=>{
    // navigation.popToTop();
    navigation.popToTop();
  }

  const goToAppointment =()=>{
    navigation.popToTop();
    navigation.navigate("Booking",{order:order})
  }

  return (
    <View style={styles.successBooking}>
      <Header action={goToHome} />
      {show ? <LottieDialog action={setShow} /> : <></>}

      <BookInfo bookInfo={bookInfo} />
      <ButtonGroup action={goToAppointment} backToHome={goToHome} />
    </View>
  );
}

const styles = StyleSheet.create({
  successBooking: {
    flex: 1,
    paddingTop: 100,
    alignItems: "center",
    backgroundColor: darkerBackground,
  },
});
