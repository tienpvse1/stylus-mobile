import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { textColor } from "../../../global/GlobalValue";
import BookedStylist from "./BookedStylist";
import axios from "../../../global/axios";
export default function BookedStylists({ navigation }) {
  const [bookedStylists, setBookedStylist] = useState([]);

  useState(() => {
    let mounted = true;
    if (mounted) {
      axios.get("/stylist/get-all").then((res) => {
        setBookedStylist(res.data)
      });
    }
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <View style={styles.bookedStylists}>
      <Text style={styles.headingBooked}>Xem gần đây </Text>
      <ScrollView
        horizontal={true}
        style={styles.bookedScrollView}
        showsHorizontalScrollIndicator={false}
      >
        {bookedStylists.map((stylist,index) => (
          <BookedStylist
            stylist={stylist}
            key={index}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  bookedStylists: {},
  headingBooked: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
    marginVertical: 10,
    color: textColor,
  },
  bookedScrollView: {
    marginLeft: 20,
  },
});
