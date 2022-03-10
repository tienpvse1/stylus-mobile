import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { base64Prefix, textColor } from "../../../global/GlobalValue";
import Style from "./Style";
import axios from "../../../global/axios";
export default function Styles({ stylist, navigation }) {
  const [services, setServices] = useState([
    {
      id: 0,
      service: "",
    },
  ]);
  const key = stylist.key;

  const [onSale, setOnSale] = useState([]);
  const goToBooking = (item) => {
    console.log("id:" ,item.id)
    navigation.navigate("BookingProcess", {
      stylist: stylist,
      styles: item,
    });
  };
  useEffect(() => {
    let isMount = true;
    console.log(stylist.stylistId);
    if (isMount) {
      axios
        .get(`/service/get-by-stylistId/${stylist.stylistId}`)
        .then((res) => {
          setOnSale(res.data);
        });
    }
    return () => {
      isMount = false;
    };
  }, []);
  return (
    <View>
      <Text style={styles.saleText}>
        Chỉ từ 300k - Nhập NEWUSER giảm ngay 10% cho mọi kiểu tóc
      </Text>
      {onSale.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => goToBooking(item)}>
          <View style={styles.saleItemContainer}>
            <Image source={{uri : base64Prefix + item.image}} style={styles.saleImage} />
            <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.originalPrice}>Giá gốc {item.price}.000</Text>
              <Text style={styles.price}>
                {item.price - Math.floor((item.price * 10) / 100)}.000
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
      <View style={styles.blank}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  saleItemContainer: {
    flexDirection: "row",
    marginBottom: 10,
    borderBottomColor: "rgba(207,207,196,0.8)",
    borderBottomWidth: 0.3,
    marginHorizontal: 20,
    paddingBottom: 20,
  },
  name: {
    fontSize: 17,
    color: textColor,
  },
  originalPrice: {
    color: "#838383",
    fontSize: 12,
    marginVertical: 7,
  },
  price: {
    fontSize: 15,
    color: textColor,
    fontWeight: "bold",
  },
  saleImage: {
    height: 120,
    width: 120,
    marginRight: 10,
    borderRadius: 8,
  },
  saleText: {
    color: textColor,
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 25,
    marginBottom: 15,
  },
  blank: {
    height: 140,
  },
});
