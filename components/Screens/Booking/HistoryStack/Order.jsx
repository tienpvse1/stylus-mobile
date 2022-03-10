import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { emptyStarIcon2, starIcon2 } from "../../../../global/GlobalIcon";
import { useNavigation } from "@react-navigation/core";
export default function Order({ order }) {
  const navigation = useNavigation();
  const [stars, setStars] = useState([{ id: 0, icon: null }]);
  useEffect(() => {
    let tmp = [];
    for (let i = 0; i < 5; i++) {
      tmp.push({
        id: i,
        icon: emptyStarIcon2,
      });
    }
    setStars(tmp);
  }, []);

  const onStarClick = (index) => {
    let result = [];
    for (let i = 0; i < index; i++) {
      result.push({
        id: i,
        icon: starIcon2,
      });
    }
    for (let i = index; i < 5; i++) {
      result.push({
        id: i,
        icon: emptyStarIcon2,
      });
    }
    setStars(result);
    navigation.push("RatingDetail", { rating: index, order: order });
  };
  return (
    <View style={styles.secondBlock}>
      <View style={styles.imageContainer}>
        <Image source={order.service.image} style={styles.serviceImage} />
      </View>
      <View style={styles.serviceInfo}>
        <Text style={styles.serviceName}>{order.service.name}</Text>
        <Text style={styles.dueDate}>{order.date.text}</Text>
        <View style={styles.starContainer}>
          {stars.map((star, index) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => onStarClick(star.id + 1)}
            >
              <View>{star.icon}</View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  secondBlock: {
    marginTop: 10,
    flexDirection: "row",
  },
  imageContainer: {
    borderColor: "rgba(0,0,0,0.5)",
    borderWidth: 0.7,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    width: 120,
    height: 130,
  },
  serviceImage: {
    height: 130,
    width: 100,
  },
  serviceInfo: {
    marginTop: 7,
    marginHorizontal: 10,
  },

  serviceName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  starContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
});
