import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { dotIcon, myVoteIcon, starIcon } from "../../../global/GlobalIcon";
import {
  contactButtonColor,
  darkBackground,
  mainBackgroundColor,
  mediumTextColor,
  secondaryTextColor,
  textColor,
} from "../../../global/GlobalValue";

export default function Info() {
  const stylists = [
    {
      key: "1",
      stylistName: "Teletubby",
      vote: 5,
      distance: 0.4,
      time: 4,
      image: require("../../../image/booked/stylist.jpg"),
      status: "busy",
      served: 100,
      services: ["Làm tóc"],
    },
    {
      key: "2",
      stylistName: "Trish",
      vote: 5,
      distance: 0.7,
      time: 7,
      image: require("../../../image/booked/stylist2.jpg"),
      status: "available",
      served: 369,
      services: ["Làm tóc"],
    },
    {
      key: "3",
      stylistName: "Lady",
      vote: 3,
      distance: 1,
      time: 12,
      image: require("../../../image/booked/stylist3.jpg"),
      status: "available",
      served: 250,
      services: ["Làm tóc"],
    },
    {
      key: "4",
      stylistName: "Sarah",
      vote: 4,
      distance: 1.2,
      time: 15,
      image: require("../../../image/booked/stylist4.jpg"),
      status: "busy",
      served: 370,
      services: ["Làm tóc", "Dưỡng da"],
    },
    {
      key: "5",
      stylistName: "Kelly",
      vote: 5,
      distance: 2,
      time: 20,
      image: require("../../../image/booked/stylist5.jpg"),
      status: "available",
      served: 690,
      services: ["Làm tóc"],
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} style={{paddingLeft: 10}}>
        {stylists.map((stylist) => (
          <View key={stylist.key} style={styles.infoContainer}>
            <Image source={stylist.image} style={styles.image} />
            <View style={styles.leftContainer}>
              <Text style={styles.stylistName}>{stylist.stylistName}</Text>
              <Text style={styles.stylistInfo}>
                {stylist.distance}km{dotIcon}
                {stylist.time}phút{dotIcon}
                {stylist.vote}
                {starIcon}
              </Text>
              <View style={styles.services}>
                {stylist.services.map((service , index) => (
                  <Text key={index} style={styles.service}>
                    {service}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    zIndex: 10,
    bottom: 70
  },
  image: {
    height: 80,
    width: 120,
    borderRadius: 10,
  },
  leftContainer: {
    marginLeft: 10,
  },
  infoContainer: {
    flexDirection: "row",
    backgroundColor: mainBackgroundColor,
    padding: 10,
    marginHorizontal: 7,
    borderRadius: 10,
    paddingBottom: 15,
    elevation:5
  },
  stylistName: {
    fontSize: 15,
    fontWeight: "bold",
    color: textColor,
  },
  stylistInfo: {
    color: mediumTextColor,
    justifyContent: "center",
    alignItems: "center",
  },
  service: {
    marginHorizontal: 6,
    borderColor: contactButtonColor,
    borderWidth: 0.4,
    padding: 4,
    color: contactButtonColor,
  },
  services: {
    flexDirection: "row",
    marginTop: 10,
  },
});
