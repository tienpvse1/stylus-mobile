import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { textColor } from "../../../global/GlobalValue";
import OtherStylist from "./OtherStylist";
export default function OtherStylists() {
  const otherStylists = [
    {
      key: "8",
      stylistName: "Malkova",
      vote: 4,
      distance: 0.5,
      time: 3,
      image: require("../../../image/hair/hair1.jpg"),
      status: "available",
      served: 302,
      isDiscount: true,
      services: ["làm tóc", "makeup"],
    },
    {
      key: "9",
      stylistName: "Kyrie",
      vote: 3,
      distance: 1,
      time: 10,
      image: require("../../../image/hair/hair2.jpg"),
      status: "available",
      served: 235,
      isDiscount: false,
      services: ["makeup"],
    },
    {
      key: "10",
      stylistName: "May",
      vote: 4,
      distance: 1.2,
      time: 11,
      image: require("../../../image/hair/hair3.jpg"),
      status: "busy",
      served: 420,
      isDiscount: true,
      services: ["làm tóc"],
    },
    {
      key: "11",
      stylistName: "Connor",
      vote: 5,
      distance: 1.5,
      time: 15,
      image: require("../../../image/hair/hair4.jpg"),
      status: "busy",
      served: 511,
      isDiscount: false,
      services: ["làm tóc", "làm móng"],
    },
    {
      key: "12",
      stylistName: "Kelly",
      vote: 4,
      distance: 2,
      time: 20,
      image: require("../../../image/hair/hair5.jpg"),
      status: "available",
      served: 25,
      isDiscount: true,
      services: ["waxing", "dưỡng da"],
    },
    {
      key: "13",
      stylistName: "Lucy",
      vote: 3,
      distance: 2.2,
      time: 20,
      image: require("../../../image/hair/hair6.jpg"),
      status: "available",
      served: 89,
      isDiscount: false,
      services: ["dưỡng da", "trang điểm"],
    },
    {
      key: "14",
      stylistName: "Cole",
      vote: 5,
      distance: 4,
      time: 27,
      image: require("../../../image/hair/hair7.jpg"),
      status: "busy",
      served: 46,
      isDiscount: false,
      services: ["trang điểm"],
    },
  ];

  return (
    <View style={styles.otherStylists}>
      <Text style={styles.heading}>Chuyên viên được ưa thích</Text>
      <View style={styles.otherListContainer}>
        {otherStylists.map((stylist) => (
          <OtherStylist key={stylist.key} stylist={stylist} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  otherStylists: {
    marginTop: 20
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
    marginVertical: 10,
    color: textColor,
  },
  otherListContainer: {
    marginLeft: 20,
  },
});
