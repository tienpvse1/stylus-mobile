import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import { emptyStarIcon3, starIcon3 } from "../../../../global/GlobalIcon";
import { mediumTextColor } from "../../../../global/GlobalValue";

export default function RatingHeader({ order, rating }) {
  const [stars, setStars] = useState([{ id: 0, icon: null }]);
  useEffect(() => {
    onStarClick(rating)
  }, []);
  const onStarClick = (index) => {
    let result = [];
    for (let i = 0; i < index; i++) {
      result.push({
        id: i,
        icon: starIcon3,
      });
    }
    for (let i = index; i < 5; i++) {
      result.push({
        id: i,
        icon: emptyStarIcon3,
      });
    }
    setStars(result);
  };
  return (
    <View style={styles.container}>
      <Image source={order.service.image} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.serviceName}>{order.service.name}</Text>
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
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    padding: 20,
    borderBottomWidth: 15,
    borderBottomColor:"#D3D3D3"
  },
  image: {
    width: 80,
    height: 80,
  },
  starContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  serviceName:{
      fontSize: 17,
      color: mediumTextColor
  },
  rightContainer:{
      marginLeft: 15
  }
});
