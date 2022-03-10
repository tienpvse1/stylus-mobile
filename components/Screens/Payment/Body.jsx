import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { plusIcon } from "../../../global/GlobalIcon";
import { textColor } from "../../../global/GlobalValue";
import OrderCard from "./OrderCard";
import PaymentMethod from "./PaymentMethod";

export default function Body({ order, method , selected , setSelected }) {
  return (
    <View style={styles.body}>
      <OrderCard order={order} />
      <View style={styles.paymentHeadingContainer}>
        <Text style={styles.bodyHeading}>Hình thức thanh toán</Text>
        {plusIcon}
      </View>
      <PaymentMethod method={method} selected={selected} setSelected={setSelected} />

    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    marginTop: 70,
  },
  bodyHeading: {
    marginVertical: 10,
    fontSize: 25,
    color: textColor,
    paddingLeft: 10,
  },
  paymentHeadingContainer:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      paddingRight: 10
  }
});
