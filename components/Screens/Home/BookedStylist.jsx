import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { base64Prefix, textColor } from "../../../global/GlobalValue";

export default function BookedStylist({ stylist, navigation }) {
  const navigateToProfile = () => {
    navigation.navigate("StylistProfile", { stylist: stylist });
  };

  return (
    <TouchableWithoutFeedback onPress={navigateToProfile}>
      <View style={styles.bookedContainer}>
        {stylist.status === "busy" ? (
          <View style={styles.busyImageContainer}>
            <Image source={{ uri: stylist.image }} style={styles.bookedImage} />
          </View>
        ) : (
          <View style={styles.imageContainer}>
            <Image source={{ uri: stylist.image }} style={styles.bookedImage} />
          </View>
        )}
        <View style={styles.bottomInfo}>
          <View style={styles.nameAndDistance}>
            <Text style={styles.stylistName}>{stylist.stylistName}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  bookedContainer: {
    marginHorizontal: 10,
  },
  imageContainer: {
    borderWidth: 2,
    height: 70,
    width: 70,
    borderRadius: 999,
    overflow: "hidden",
    padding: 4,
    borderColor: "#f26a5a",
  },
  busyImageContainer: {
    borderWidth: 2,
    height: 70,
    width: 70,
    borderRadius: 999,
    overflow: "hidden",
    padding: 4,
    borderColor: "#f26a5a",
  },
  bookedImage: {
    height: "100%",
    width: "100%",
    padding: 20,
    borderRadius: 999,
  },
  nameAndDistance: {
    alignContent: "center",
    justifyContent: "center",
  },
  stylistName: {
    textAlign: "center",
    fontSize: 12.5,
    color: textColor,
    marginTop: 3,
  },
  vote: {
    textAlign: "center",
    color: "#FFD700",
  },
});
