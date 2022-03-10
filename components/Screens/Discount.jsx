import { useRoute, useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  cartIcon,
  goBackIcon,
  searchIcon,
  starIcon4,
  threeDotsHorizontal,
} from "../../global/GlobalIcon";
import {
  contactButtonColor,
  mainBackgroundColor,
  mediumTextColor,
  screenWidth,
} from "../../global/GlobalValue";

export default function Discount() {
  const [searchKey, setSearchKey] = useState("");
  const route = useRoute();
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [suggestStyles, setSuggestStyles] = useState([]);
  const stylists = [
    {
      key: "1",
      username: "teletubby",
      stylistName: "Teletubby",
      vote: 5,
      distance: 0.4,
      time: 4,
      image: require("../../image/booked/stylist.jpg"),
      status: "busy",
      served: 100,
      services: ["Làm tóc"],
    },
    {
      key: "2",
      username: "",
      stylistName: "Trish",
      vote: 5,
      distance: 0.7,
      time: 7,
      image: require("../../image/booked/stylist2.jpg"),
      status: "available",
      served: 369,
      services: ["Làm tóc"],
    },
    {
      key: "3",
      username: "",
      stylistName: "Lady",
      vote: 3,
      distance: 1,
      time: 12,
      image: require("../../image/booked/stylist3.jpg"),
      status: "available",
      served: 250,
      services: ["Làm tóc"],
    },
    {
      key: "4",
      username: "",
      stylistName: "Sarah",
      vote: 4,
      distance: 1.2,
      time: 15,
      image: require("../../image/booked/stylist4.jpg"),
      status: "busy",
      served: 370,
      services: ["Làm tóc", "Dưỡng da"],
    },
    {
      key: "5",
      username: "",
      stylistName: "Kelly",
      vote: 5,
      distance: 2,
      time: 20,
      image: require("../../image/booked/stylist5.jpg"),
      status: "available",
      served: 690,
      services: ["Làm tóc"],
    },
    {
      key: "6",
      username: "",
      stylistName: "Britney",
      vote: 5,
      distance: 2.2,
      time: 20,
      image: require("../../image/booked/stylist6.jpg"),
      status: "available",
      served: 132,
      services: ["Làm tóc"],
    },
    {
      key: "7",
      username: "",
      stylistName: "Sonny",
      vote: 5,
      distance: 4,
      time: 27,
      image: require("../../image/booked/stylist7.jpg"),
      status: "busy",
      served: 46,
      services: ["Làm tóc"],
    },
    {
      key: "8",
      username: "",
      stylistName: "Malkova",
      vote: 4,
      distance: 0.5,
      time: 3,
      image: require("../../image/hair/hair1.jpg"),
      status: "available",
      served: 302,
      isDiscount: true,
      services: ["làm tóc", "makeup"],
    },
    {
      key: "9",
      username: "",
      stylistName: "Kyrie",
      vote: 3,
      distance: 1,
      time: 10,
      image: require("../../image/hair/hair2.jpg"),
      status: "available",
      served: 235,
      isDiscount: false,
      services: ["makeup"],
    },
    {
      key: "10",
      username: "",
      stylistName: "May",
      vote: 4,
      distance: 1.2,
      time: 11,
      image: require("../../image/hair/hair3.jpg"),
      status: "busy",
      served: 420,
      isDiscount: true,
      services: ["làm tóc"],
    },
    {
      key: "11",
      username: "",
      stylistName: "Connor",
      vote: 5,
      distance: 1.5,
      time: 15,
      image: require("../../image/hair/hair4.jpg"),
      status: "busy",
      served: 511,
      isDiscount: false,
      services: ["làm tóc", "làm móng"],
    },
    {
      key: "12",
      username: "",
      stylistName: "Kelly",
      vote: 4,
      distance: 2,
      time: 20,
      image: require("../../image/hair/hair5.jpg"),
      status: "available",
      served: 25,
      isDiscount: true,
      services: ["waxing", "dưỡng da"],
    },
    {
      key: "13",
      username: "",
      stylistName: "Lucy",
      vote: 3,
      distance: 2.2,
      time: 20,
      image: require("../../image/hair/hair6.jpg"),
      status: "available",
      served: 89,
      isDiscount: false,
      services: ["dưỡng da", "trang điểm"],
    },
    {
      key: "14",
      username: "",
      stylistName: "Cole",
      vote: 5,
      distance: 4,
      time: 27,
      image: require("../../image/hair/hair7.jpg"),
      status: "busy",
      served: 46,
      isDiscount: false,
      services: ["trang điểm"],
    },
  ];
  const headerTags = [
    {
      text: "Phổ biến",
    },
    {
      text: "Được ưa thích",
    },
    {
      text: "Style mới",
    },
    {
      text: "Giá",
    },
  ];
  const discountServices = [
    {
      id: 1,
      stylistId: "1",
      username: "teletubby",
      stylistName: "Teletubby",
      image: require("../../image/makeup/chocolate-makeup.jpg"),
      price: 549,
      liked: 105,
      name: "Chocolate style",
      discountAmmount: 0.4
    },
    {
      id: 2,
      stylistId: "2",
      stylistName: "Trish",
      username: "trish",
      image: require("../../image/makeup/clam-beige.jpg"),
      price: 489,
      liked: 97,
      name: "Clam Beige",
      discountAmmount: 0.4
    },
    {
      id: 3,
      stylistId: "1",
      stylistName: "Teletubby",
      username: "teletubby",
      image: require("../../image/makeup/clear-rose.jpg"),
      price: 435,
      liked: 105,
      name: "Clear rose",
      discountAmmount: 0.4
    },
    {
      id: 4,
      stylistId: "3",
      stylistName: "Lady",
      username: "lady",
      image: require("../../image/makeup/glass-makeup.jpg"),
      price: 649,
      liked: 27,
      name: "Glass makeup",
      discountAmmount: 0.4
    },
    {
      id: 5,
      stylistId: "4",
      stylistName: "sarah",
      username: "sarah",
      image: require("../../image/makeup/glowy-coral.jpg"),
      price: 549,
      liked: 105,
      name: "Glowy coral",
      discountAmmount: 0.4
    },
    {
      id: 6,
      stylistId: "1",
      stylistName: "Teletubby",
      username: "teletubby",
      image: require("../../image/makeup/kira-kira.jpg"),
      price: 549,
      liked: 43,
      name: "Kira Kira",
      discountAmmount: 0.4
    },
    {
      id: 7,
      stylistId: "1",
      stylistName: "Teletubby",
      username: "teletubby",
      image: require("../../image/makeup/korean.jpg"),
      price: 549,
      liked: 105,
      name: "Korean style",
      discountAmmount: 0.4
    },
    {
      id: 8,
      stylistId: "5",
      stylistName: "Kelly",
      username: "teletubby",
      image: require("../../image/makeup/burgundy-makeup.jpg"),
      price: 549,
      liked: 105,
      name: "Burgundy",
      discountAmmount: 0.4
    },
  ];
  const onStylePress = (service) => {
    const stylist = stylists.filter(
      (person) => person.key === service.stylistId
    )[0];
    const item = {
      key: service.id,
      name: service.name,
      image: service.image,
      price: service.price,
    };
    navigation.navigate("BookingProcess", {
      stylist: stylist,
      styles: item,
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableWithoutFeedback onPress={() => navigation.pop()}>
          {goBackIcon}
        </TouchableWithoutFeedback>
        <View style={styles.searchBox}>
          <TextInput
            value={searchKey}
            onChangeText={setSearchKey}
            style={styles.inputField}
            placeholder={"Bạn cần tìm..."}
          />
          <View style={styles.searchIconContainer}>{searchIcon}</View>
        </View>
        <View style={styles.iconContainer}>{cartIcon}</View>
        <View style={styles.iconContainer}>{threeDotsHorizontal}</View>
      </View>
      <View style={styles.underHeader}>
        {headerTags.map((tag, index) =>
          index === selectedIndex ? (
            <Text key={index} style={[styles.selectedTag, styles.tag]}>
              {tag.text}
            </Text>
          ) : (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => setSelectedIndex(index)}
            >
              <Text style={[styles.disableTag, styles.tag]}>{tag.text}</Text>
            </TouchableWithoutFeedback>
          )
        )}
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ flexDirection: "row" }}>
          <View>
            {discountServices.map(
              (item, index) =>
                index !== 0 &&
                index % 2 !== 0 && (
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={() => onStylePress(item)}
                  >
                    <View style={styles.styleItem}>
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image source={item.image} style={styles.styleImage} />
                      </View>
                      <View style={styles.underImageInfo}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.voting}>
                          {starIcon4}
                          {starIcon4}
                          {starIcon4}
                          {starIcon4} | lượt đặt: 65
                        </Text>
                        <Text style={styles.price}>{item.price}.000đ <Text style={{color: mediumTextColor, fontSize: 15}}> -{100*item.discountAmmount}%</Text></Text>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                )
            )}
          </View>
          <View>
            {discountServices.map(
              (item, index) =>
                index !== 0 &&
                index % 2 === 0 && (
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={() => onStylePress(item)}
                  >
                    <View style={styles.styleItem}>
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image source={item.image} style={styles.styleImage} />
                      </View>
                      <View style={styles.underImageInfo}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.voting}>
                          {starIcon4}
                          {starIcon4}
                          {starIcon4}
                          {starIcon4} | lượt đặt: 65
                        </Text>
                        <Text style={styles.price}>{item.price}.000đ <Text style={{color: mediumTextColor, fontSize: 15}}> -{100*item.discountAmmount}%</Text></Text>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                )
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: mainBackgroundColor,
    flexDirection: "row",
    paddingTop: 20,
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#e54861",
  },
  searchBox: {
    marginLeft: 15,
    position: "relative",
    justifyContent: "center",
    backgroundColor: mainBackgroundColor,
    borderRadius: 10,
    paddingLeft: 10,
  },
  inputField: {
    width: screenWidth * 0.6,
    paddingLeft: 30,
    fontSize: 17,
    padding: 10,
  },
  searchIconContainer: {
    position: "absolute",
    left: 10,
  },
  iconContainer: {
    marginLeft: 10,
  },
  underHeader: {
    flexDirection: "row",
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
  },
  selectedTag: {
    color: contactButtonColor,
  },
  tag: {
    fontSize: 17,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginVertical: 15,
  },
  styleImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  name: {
    fontSize: 17,
  },
  price: {
    fontWeight: "bold",
    fontSize: 20,
  },
  styleItem: {
    width: screenWidth * 0.5,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderRightWidth: 1,
    borderRightColor: "rgba(0,0,0,0.1)",
    paddingVertical: 10,
  },
  underImageInfo: {
    marginLeft: 10,
  },
});
