import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { dotIcon, scissorIcon, starIcon } from "../../../global/GlobalIcon";
import {
  base64Prefix,
  contactButtonColor, mainBackgroundColor,
  mediumTextColor,
  secondaryTextColor, textColor
} from "../../../global/GlobalValue";

export default function OrderCard({ order }) {
  const stylist = order.stylist;
  const service = order.service;
  const slotTime = order.slot;
  const date = order.date;

  return (
    <View style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <Image source={{uri:base64Prefix + order.stylist.image}} style={styles.image} />
        <View style={styles.headerRightContainer}>
          <Text style={styles.stylistName}>{stylist.name}</Text>
          <Text style={styles.distance}>112, Bạch Đằng, Bình Thạnh </Text>
          <Text style={styles.distance}>
            {stylist.time}phút{dotIcon}
            {stylist.distance}km{dotIcon}
            {stylist.vote}
            {starIcon}
          </Text>
        </View>
      </View>
      <View style={styles.calculateOrderAndService}>
        <Text style={styles.serviceHeading}>Kiểu tóc đã chọn</Text>
        <View style={styles.serviceNameContainer}>
          {scissorIcon}
          <Text style={styles.serviceName}>{service.name}</Text>
        </View>
        <View style={styles.moreInfo}>
          <Text style={styles.moreInfoText}>{slotTime}</Text>
          <Text style={styles.moreInfoText}>{date.text}</Text>
          <Text style={styles.moreInfoText}>{service.price}.000</Text>
        </View>
      </View>
      <View style={styles.total}>
        <Text style={styles.totalHeading}>Tạm tính</Text>
        <Text style={styles.totalPrice}>{service.price}.000</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  orderCard: {
    backgroundColor: mainBackgroundColor,
    borderRadius: 10,
    padding: 10,
    paddingBottom: 15,
    elevation: 9,
  },
  image: {
    height: 75,
    width: 120,
    borderRadius: 10,
  },
  orderHeader: {
    flexDirection: "row",
    paddingBottom: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: secondaryTextColor,
  },
  headerRightContainer: {
    marginLeft: 10,
  },
  stylistName: {
    color: textColor,
    fontSize: 20,
    fontWeight: "bold",
  },
  distance: {
    color: mediumTextColor,
    fontSize: 15,
  },
  calculateOrderAndService: {
    paddingTop: 10,
    paddingBottom: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: secondaryTextColor,
  },
  serviceHeading: {
    fontSize: 15,
    fontWeight: "bold",
    color: textColor,
  },
  serviceNameContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    marginTop: 10,
  },
  serviceName: {
    color: mediumTextColor,
    fontSize: 17,
    marginLeft: 8,
  },
  moreInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  moreInfoText: {
    fontSize: 16,
    fontWeight:"bold",
    color: textColor,
  },
  total: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 10,
  },
  totalHeading: {
    color: textColor,
    fontSize: 20,
    fontWeight: "bold",
  },
  totalPrice: {
    color: contactButtonColor,
    fontSize: 20,
    fontWeight: "bold",
  },
});
