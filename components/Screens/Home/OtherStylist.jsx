import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { dotIcon, starIcon } from "../../../global/GlobalIcon";
import { contactButtonColor, mediumTextColor, secondaryTextColor, textColor } from "../../../global/GlobalValue";

export default function OtherStylist({ stylist }) {
  const [services, setServices] = useState([
    {
      key: 0,
      service: "",
    },
  ]);
  useEffect(() => {
    let tmp = [];
    for (let i = 0; i < stylist.services.length; i++) {
      tmp.push({ key: i, service: stylist.services[i] });
    }
    setServices(tmp);
  }, []);
  return (
    <View style={styles.otherStylistContainer}>
      <Image source={stylist.image} style={styles.image} />
      <View style={styles.leftInfo}>
        <Text style={styles.stylistName}>{stylist.stylistName}</Text>
        <Text style={styles.served}>Đã phục vụ: {stylist.served}</Text>
        <Text style={styles.moreInfo}>
          {stylist.time} phút{dotIcon}{stylist.distance}km{dotIcon}{" "}
          {starIcon} {stylist.vote}
        </Text>
        <View style={styles.services}>
          {services.map((service) => (
            <Text key={service.key} style={styles.service}>
              {service.service}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  otherStylistContainer: {
    flexDirection: "row",
    height: 140,
    marginVertical: 10,
    borderRadius: 10,
  },
  image: {
    height: "100%",
    width: 140,
    borderRadius: 10,
    marginRight: 12,
  },
  stylistName: {
    fontSize: 20,
    fontWeight: "bold",
    color: textColor,
  },
  moreInfo: {
    color: textColor,
  },
  served: {
    color: mediumTextColor,
  },
  service: { 
      marginHorizontal: 6,
      borderColor: contactButtonColor,
      borderWidth: 0.4,
      padding: 4,
      color: contactButtonColor
  },
  services:{
      flexDirection:"row",
      marginTop: 10
  },
  discount:{
    color: '#00FF00',
    fontWeight:"bold"
  }
});
