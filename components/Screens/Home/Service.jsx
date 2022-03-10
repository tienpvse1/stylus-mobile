import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { textColor } from "../../../global/GlobalValue";
import { useNavigation } from "@react-navigation/core";
export default function Service({ name, image, background, stylists, dest }) {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.push("Category", { name: name, dest: dest })}
    >
      <View style={styles.serviceContainer}>
        <View style={styles.service}>
          <Image source={image} style={styles.image} />
        </View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.name}>{stylists} stylists</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  service: {
    width: 55,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor: "#e54861",
    marginHorizontal: 20,
  },
  image: {
    width: 35,
    height: 35,
  },
  name: {
    fontSize: 12,
    color: textColor,
  },
  serviceContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
