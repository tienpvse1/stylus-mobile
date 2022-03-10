import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import axios from "../../../global/axios";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { starIcon4, stylistIcon } from "../../../global/GlobalIcon";
import { base64Prefix, mediumTextColor } from "../../../global/GlobalValue";
export default function MaybeLike({ services, stylists, heading, isDiscount }) {
  const navigation = useNavigation();
  const [vote, setVote] = useState(0);
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max) + 1;
  };

  useEffect(() => {
    setVote(getRandomInt(5));
  }, []);

  const onStylePress = (service) => {
    const item = {
      key: service.id,
      name: service.name,
      image: service.image,
      price: service.price,
    };
    axios.get(`/stylist/get-stylist-by-id/${service.stylistId}`).then((res) => {
      console.log(res.data.name);
      navigation.navigate("BookingProcess", {
        stylist: res.data,
        styles: item,
      });
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{heading}</Text>
      <ScrollView
        horizontal={true}
        style={styles.scrollView}
        showsHorizontalScrollIndicator={false}
      >
        {services.map((service, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => onStylePress(service)}
          >
            <View style={styles.service}>
              <Image source={{ uri: service.image }} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.serviceName}>{service.name}</Text>
                <Text style={styles.stylistName}>
                  {stylistIcon}
                  {service.stylistName}
                </Text>

                <Text style={styles.price}>
                  {service.price}.000đ{" "}
                  {isDiscount && (
                    <Text
                      style={{
                        textDecorationLine: "line-through",
                        textDecorationStyle: "solid",
                        fontSize: 11,
                        fontWeight: "normal",
                      }}
                    >
                      {service.price * 2}.000đ
                    </Text>
                  )}
                </Text>
                <Text>
                  {starIcon4}
                  {service.vote}{" "}
                  <Text style={{ fontSize: 11 }}>
                    {"          "}({service.vote} đánh giá)
                  </Text>
                </Text>
              </View>
              <Text style={styles.likes}>
                {service.liked > 100 ? "100+" : service.liked} lượt thích
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 0,
  },
  image: {
    height: 120,
    width: 135,
  },
  serviceName: {
    fontWeight: "bold",
    fontSize: 15,
  },
  service: {
    width: 135,
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,0.2)",
    paddingBottom: 10,
    position: "relative",
    marginLeft: 6,
  },
  stylistName: {
    color: mediumTextColor,
    marginVertical: 4,
  },
  textContainer: {
    paddingLeft: 7,
  },
  scrollView: {
    paddingLeft: 15,
  },
  likes: {
    backgroundColor: "#ff9e14",
    fontSize: 12,
    width: 95,
    padding: 5,
    position: "absolute",
  },
  price: {
    fontWeight: "bold",
  },
});
