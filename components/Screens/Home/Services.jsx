import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { textColor } from "../../../global/GlobalValue";
import Service from "./Service";
export default function Services() {
  const services = [
    {
      key: 2,
      service: "Makeup",
      image: require("../../../image/icon/make-up.png"),
      stylists: 968,
    },
    {
      key: 1,
      service: "Làm tóc",
      image: require("../../../image/icon/hairstyle.png"),
      stylists: 150,
    },
    {
      key: 3,
      service: "Làm móng",
      image: require("../../../image/icon/nail-polish.png"),
      stylists: 389,
    },
    {
      key: 4,
      service: "Dưỡng da ",
      image: require("../../../image/icon/acne.png"),
      stylists: 243,
    },
    {
      key: 5,
      service: "Waxing",
      image: require("../../../image/icon/waxing.png"),
      stylists: 300,
    },
  ];
  return (
    <View style={styles.services}>
      <Text style={styles.heading}>Danh mục nổi bật </Text>
      <ScrollView horizontal={true} style={styles.scrollView} showsHorizontalScrollIndicator={false}>
        {services.map((service) => (
          <Service
            key={service.key}
            image={service.image}
            dest={service.key}
            name={service.service}
            stylists={service.stylists}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  services: {},
  heading: {
    fontSize: 25,
    fontWeight: "bold",
    color: textColor,
    marginLeft: 20,
    marginBottom: 5,
  },
  scrollView: {
    marginLeft: 20,
  },
});
