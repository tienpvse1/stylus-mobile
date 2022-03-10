import React, { useState, useEffect } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  emptyStarIcon,
  emptyStarIcon2,
  starIcon,
  starIcon2,
} from "../../../global/GlobalIcon";
import { mainBackgroundColor } from "../../../global/GlobalValue";
import { useNavigation } from "@react-navigation/core";
import Order from "./HistoryStack/Order";
export default function History() {
  const orders = [
    {
      date: {
        isWeekend: true,
        text: "T7 (26/06)",
      },
      service: {
        image: 38,
        key: 1,
        name: "Two tone messy",
        price: 549,
      },
      slot: "1:00 PM",
      status: "paid",
      stylist: {
        distance: 0.4,
        image: 31,
        key: "1",
        served: 100,
        services: ["Làm tóc"],
        status: "busy",
        stylistName: "Teletubby",
        time: 4,
        vote: 5,
      },
    },
    {
      date: {
        isWeekend: true,
        text: "T2 (21/06)",
      },
      service: {
        image: 39,
        key: 1,
        name: "Texture hair cut",
        price: 549,
      },
      slot: "3:00 PM",
      status: "paid",
      stylist: {
        distance: 0.4,
        image: 32,
        key: "1",
        served: 100,
        services: ["Làm tóc"],
        status: "busy",
        stylistName: "Trish",
        time: 4,
        vote: 5,
      },
    },
  ];
  const [vote, setVote] = useState(0);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {orders.map((order, index) => (
        <TouchableWithoutFeedback
          key={index}
          onPress={() =>
            navigation.navigate("RatingDetail", { rating: 0, order: order })
          }
        >
          <View style={styles.historyCard}>
            <Order order={order} />
          </View>
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  historyCard: {
    width: Dimensions.get("window").width * 0.96,
    marginHorizontal: Dimensions.get("window").width * 0.02,
    borderRadius: 15,
    backgroundColor: mainBackgroundColor,
    elevation: 4,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 20,
  },

  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
