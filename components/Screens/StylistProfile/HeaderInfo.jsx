import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { emptyStarIcon, starIcon } from "../../../global/GlobalIcon";

export default function HeaderInfo({ stylist }) {
  const headerImage = require("../../../image/profile/teletubby.jpg");
  const [empty, setEmpty] = useState([]);
  const [full, setFull] = useState([]);
  const getFullStar = () => {
    let full = [];
    for (let i = 0; i < stylist.vote; i++) {
      full.push(i);
    }
    return full;
  };
  const getEmptyStar = () => {
    let empty = [];
    for (let i = stylist.vote; i < 5; i++) {
      empty.push(i);
    }
    return empty;
  };
  useEffect(() => {
    setFull(getFullStar());
    setEmpty(getEmptyStar());
  }, []);
  return (
    <View style={{ position: "relative" }}>
      <Image source={headerImage} style={styles.image} />
      <View style={styles.textAboveImage}>
        <Text style={styles.stylistName}>{stylist.name}</Text>
        <Text style={{color:"white"}}>110 Nguyễn Du, Phường Bến Thành, Q.1, TP HCM</Text>
        <View style={styles.starContainer}>
          {full.map((index) => (
            <View key={index}>{starIcon}</View>
          ))}
          {empty.map((index) => (
            <View key={index}>{emptyStarIcon}</View>
          ))}
          <Text style={{transform:[{translateY:3}],color:"white"}}>(125 lượt đánh giá)</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 270,
  },
  starContainer: {
    marginTop: 8,
    flexDirection: "row",
  },
  textAboveImage: {
    position: "absolute",
    bottom: 20,
    left: 20,
    zIndex:2
  },
  stylistName: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
});
