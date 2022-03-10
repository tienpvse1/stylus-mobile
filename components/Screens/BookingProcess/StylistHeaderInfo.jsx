import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { dotIcon, emptyStarIcon, starIcon } from "../../../global/GlobalIcon";
import {
  contactButtonColor,
  imageSize,
  mainBackgroundColor,
} from "../../../global/GlobalValue";
export default function StylistHeaderInfo({ stylist }) {
  const [stars, setStars] = useState([
    {
      id: 0,
      icon: null,
    },
  ]);
  const [emptyStars, setEmptyStars] = useState([
    {
      id: 0,
      icon: null,
    },
  ]);
  useEffect(() => {
    let tmp = [];
    for (let i = 0; i < stylist.vote; i++) {
      tmp.push({
        id: i,
        icon: starIcon,
      });
    }
    let emptyTmp = [];
    for (let i = stylist.vote; i < 5; i++) {
      emptyTmp.push({
        id: i,
        icon: emptyStarIcon,
      });
    }
    setStars(tmp);
    setEmptyStars(emptyTmp);
  }, []);

  return (
    <LinearGradient
      colors={["rgba(0,0,0,0.05)", "rgba(0,0,0,0.6)"]}
      style={styles.linear}
    >
      <View style={styles.headerContainer}>
        <View style={styles.busyImageContainer}>
          <Image
            source={{
              uri: "https://media.istockphoto.com/photos/female-fashion-designer-picture-id921284684?k=20&m=921284684&s=612x612&w=0&h=4zixDFHiVclzlNfCTpVgKA8h-gMucWCfbK07sizZ5dc=",
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.rightInfoContainer}>
          <Text style={styles.name}>{stylist.name}</Text>
          <Text style={styles.distanceAndTime}>
            {stylist.time} phút{dotIcon}
            {stylist.distance}km
          </Text>
          <Text style={styles.served}>Đã phục vụ: {stylist?.served}</Text>
          <View style={styles.starContainer}>
            {stars.map((star) => (
              <View key={star.id}>{star.icon}</View>
            ))}
            {emptyStars.map((star) => (
              <View key={star.id}>{star.icon}</View>
            ))}
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linear: {
    flexDirection: "row",
    position: "absolute",
    paddingBottom: 10,
    paddingLeft: 10,
    width: "100%",
    height: 250,
    bottom: 0,
    alignItems: "flex-end",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 999,
    borderWidth: 2,
  },
  imageContainer: {
    height: imageSize,
    width: imageSize,
    padding: 5,
    borderWidth: 2,
    borderColor: contactButtonColor,
    borderRadius: 999,
  },
  busyImageContainer: {
    height: imageSize,
    width: imageSize,
    padding: 5,
    borderWidth: 2,
    borderColor: contactButtonColor,
    borderRadius: 999,
  },
  starContainer: {
    flexDirection: "row",
  },
  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 0,
  },
  rightInfoContainer: {
    paddingLeft: 10,
  },
  served: {
    color: mainBackgroundColor,
  },
  distanceAndTime: {
    color: mainBackgroundColor,
  },
  headerContainer: {
    flexDirection: "row",
  },
});
