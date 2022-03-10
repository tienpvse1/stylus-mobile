import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { textColor } from "../../../global/GlobalValue";

export default function Style({ service, pickable, navigation, stylist }) {
  const [firstColumn, setFirstColumn] = useState([]);
  const [secoundColumn, setSecoundColumn] = useState([]);
  useEffect(() => {
    const fragmentIndex = pickable.length / 2;
    let firstTmp = [];
    let secoundTmp = [];
    for (let i = 0; i < fragmentIndex; i++) {
      firstTmp.push(pickable[i]);
    }
    for (let i = fragmentIndex; i < pickable.length; i++) {
      secoundTmp.push(pickable[i]);
    }
    setFirstColumn(firstTmp);
    setSecoundColumn(secoundTmp);
  }, []);
  const goToBooking = (item) => {
    navigation.navigate("BookingProcess", {
      stylist: stylist,
      styles: item,
    });
  };
  return (
    <View>
      <Text style={styles.suggest}>Gợi ý kiểu tóc</Text>
      <View style={styles.servicesContainer}>
        <View style={styles.column}>
          {firstColumn.map((item) => (
            <TouchableWithoutFeedback
              onPress={() => goToBooking(item)}
              key={item.key}
            >
              <View style={styles.itemContainer}>
                <Image style={styles.styleImage} source={item.image} />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}.000đ</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
        <View style={styles.column}>
          {secoundColumn.map((item) => (
            <TouchableWithoutFeedback onPress={()=> goToBooking(item)} key={item.key}>
              <View style={styles.itemContainer}>
                <Image style={styles.styleImage} source={item.image} />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}.000đ</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  suggest: {
    color: textColor,
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 25,
    marginBottom: 15,
  },
  servicesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  styleImage: {
    height: 170,
    width: 170,
    borderRadius: 20,
  },
  itemContainer: {
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    color: textColor,
  },
  price: {
    color: textColor,
    fontSize: 15,
    fontWeight: "bold",
  },
});
