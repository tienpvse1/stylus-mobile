import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { starIcon4 } from "../../global/GlobalIcon";
import {
  base64Prefix,
  mainBackgroundColor,
  screenWidth,
} from "../../global/GlobalValue";
import HeaderNavigation from "./BookingProcess/HeaderNavigation";
import StylistHeaderInfo from "./BookingProcess/StylistHeaderInfo";
import TimeTable from "./BookingProcess/TimeTable";
export default function BookingProcess({ navigation, route }) {
  const stylist = route.params.stylist;
  const service = route.params.styles;
  const [vote, setVote] = useState([{ number: 0 }]);

  const goToPayment = (order) => {
    navigation.navigate("Payment", { order: order });
  };

  useEffect(() => {
    let isUnmount = false;
    if (!isUnmount) {
      let tmp = [];
      for (let i = 0; i < getRandomInt(2); i++) {
        tmp.push({ number: i });
      }
      setVote(tmp);
    }
    return () => {
      isUnmount = true;
    };
  }, []);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max) + 3;
  };

  return (
    <View style={styles.bookingProcess}>
      <HeaderNavigation navigation={navigation} service={service} />
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://media.istockphoto.com/photos/female-fashion-designer-picture-id921284684?k=20&m=921284684&s=612x612&w=0&h=4zixDFHiVclzlNfCTpVgKA8h-gMucWCfbK07sizZ5dc=",
          }}
          style={styles?.serviceImage}
        />
        <StylistHeaderInfo stylist={stylist} />
      </View>
      <View style={styles.previewService}>
        <Image
          source={{
            uri: "https://static.wixstatic.com/media/160bf8_6af69b246fec4633a1c1024f983005fd~mv2.png/v1/fill/w_779,h_885,al_c,q_95/160bf8_6af69b246fec4633a1c1024f983005fd~mv2.webp",
          }}
          style={styles.previewImage}
        />
        <View style={styles.previewStyleContent}>
          <Text style={{ fontSize: 17 }}>Dịch vụ đã chọn : {service.name}</Text>
          <Text style={{ fontWeight: "bold", marginVertical: 4 }}>
            Giá: {service.price}.000đ
          </Text>
          <Text>
            {vote.map((item) => (
              <Text key={item.number}> {starIcon4}</Text>
            ))}
          </Text>
        </View>
      </View>
      <TimeTable
        navigation={navigation}
        service={service}
        stylist={stylist}
        action={goToPayment}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "relative",
  },
  bookingProcess: {
    flex: 1,
    backgroundColor: mainBackgroundColor,
  },
  serviceImage: {
    width: "100%",
    height: 220,
  },
  previewService: {
    flexDirection: "row",
    width: screenWidth * 0.9,
    elevation: 4,
    backgroundColor: mainBackgroundColor,
    borderRadius: 15,
    padding: 10,
    marginLeft: screenWidth * 0.05,
    marginTop: 15,
  },

  previewImage: {
    height: 60,
    width: 60,
    borderRadius: 10,
    marginRight: 15,
  },
});
