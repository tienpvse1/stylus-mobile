import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Barcode from "react-native-barcode-builder";
import {
  dotIcon, locationIcon,
  scissorIcon,
  starIcon
} from "../../../global/GlobalIcon";
import {
  darkBackground, goldColor,
  secondaryTextColor
} from "../../../global/GlobalValue";
import { getSlot } from "../../../global/SlotGetter";
export default function BookInfo({ bookInfo }) {
  const stylist = bookInfo.stylist;
  const service = bookInfo.service;
  const date = bookInfo.date;
  const slot = bookInfo.slot;
  const paid = require("../../../image/payment/paid.png");
  const ID = new Date().getTime().toString().slice(0, 7);
  const end = getSlot(bookInfo.slot + 2);
  return (
    <View style={styles.bookInfo}>
      <View style={styles.firstBlock}>
        <View style={styles.leftText}>
          <View style={styles.line}>
            <Text style={styles.heading}>Stylist: </Text>
            <Text style={styles.stylistName}>{stylist.stylistName}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.heading}>Mã đặt hẹn: </Text>
            <Text style={styles.id}>{ID}</Text>
          </View>
          <View style={styles.line}>
            <Text style={styles.stylistInfo}>
              {locationIcon}
              {stylist.time}phút{dotIcon}
              {stylist.distance}km{dotIcon}
              {stylist.vote}
              {starIcon}
            </Text>
          </View>
        </View>
        <View style={styles.rightPaidIcon}>
          <Image source={paid} style={styles.paidImage} />
        </View>
      </View>
      <View style={styles.secondBlock}>
        <View style={styles.hairStyle}>
          <Text style={styles.hairStyleHeading}>Kiểu tóc đã chọn</Text>
          <Text style={styles.hairStyleName}>
            {scissorIcon} {service.name}
          </Text>
        </View>
        <View style={styles.dateAndSlot}>
          <Text style={styles.time}>{date.text}</Text>
          <Text style={styles.time}>
            {slot}
          </Text>
        </View>
      </View>
      <View style={styles.thirdBlock}>
        <Text style={styles.barcodeHeading}>Scan Barcode</Text>
        <View style={styles.barcode}>
          <Barcode
            lineColor={goldColor}
            background={"transparent"}
            height={80}
            format={"CODE128"}
            value={ID}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bookInfo: {
    backgroundColor: darkBackground,
    height: Dimensions.get("screen").height * 0.45,
    width: Dimensions.get("window").width * 0.92,
    borderRadius: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  firstBlock: {
    flexDirection: "row",
    borderBottomColor: secondaryTextColor,
    borderBottomWidth: 0.7,
    height: 128,
    marginBottom: 10,
  },
  leftText: {
    width: 180,
  },
  rightPaidIcon: {
    flex: 0.3,
  },
  stylistName: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  stylistInfo: {
    fontSize: 14,
    color: secondaryTextColor,
  },
  line: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 14,
  },
  heading: {
    fontSize: 17,
    color: secondaryTextColor,
    width: 100,
  },
  id: {
    color: "white",
    fontSize: 19,
  },
  paidImage: {
    height: 80,
    width: 80,
    marginLeft: 60,
    transform: [{ rotateZ: "-19deg" }],
  },
  rightPaidIcon: {
    flex: 1,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  hairStyleHeading: {
    fontSize: 17,
    color: secondaryTextColor,
    marginBottom: 1,
  },
  hairStyleName: {
    color: "white",
    fontSize: 17,
    paddingLeft: 15,
  },
  secondBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: secondaryTextColor,
    borderBottomWidth: 0.7,
    paddingBottom: 20,
  },
  time: {
    color: goldColor,
    fontSize: 15,
    marginBottom: 7,
  },
  barcode: {
    transform: [{ translateX: 25 }, { translateY: 10 }],
  },
  barcodeHeading: {
      fontSize: 20,
      fontWeight:"bold",
      color:"white",
      transform: [{ translateY: 40}]
  },

  thirdBlock:{
      flexDirection:"row"
  }
});
