import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import Blank from "../../global/Blank";
import BookedStylists from "./Home/BookedStylists";
import Header from "./Home/Header";
import MaybeLike from "./Home/MaybeLike";
import OtherStylists from "./Home/OtherStylists";
import Services from "./Home/Services";
import Suggestion from "./Home/Suggestion";
import axios from "../../global/axios";
// import Discount from "./Home/Discount";
export default function Home({ navigation }) {
  const [services, setServices] = useState([
    {
      stylistId: 1,
      name: "short angle",
      price: 555,
      image: null,
      slotConsume: 1,
      categoryId: 1,
      feedback: null,
      vote: 0,
      liked: 0,
      id: 19,
    },
  ]);
  const [discountServices, setDiscountServices] = useState([
    
  ]);

  const bindingDiscountServices = () =>{
    axios.get("/service/get-most-liked").then((res) => {
      setDiscountServices(res.data);
    });
  }

  const bindingServices = () => {
    axios.get("/service/get-random").then((res) => {
      setServices(res.data);
    });
  };

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
  
  const suggests = [
    {
      key: 1,
      suggest: "Khuyến mãi",
      image: require("../../image/icon/suggest/sale.png"),
      dest: "Discount",
    },
    {
      key: 2,
      suggest: "Gần tôi",
      image: require("../../image/icon/suggest/location.png"),
      dest: "NearBy",
    },
    {
      key: 3,
      suggest: "Cửa hàng",
      image: require("../../image/icon/suggest/hygiene-products.png"),
      dest: "Store",
    },
    {
      key: 4,
      suggest: "Làm móng",
      image: require("../../image/icon/nail.png"),
      dest: "Nails",
    },
  ];
  const headerImage = require("../../image/header/header2.jpg");

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      bindingServices();
      bindingDiscountServices();
    }
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <ScrollView style={styles.home} showsVerticalScrollIndicator={false}>
      <Header />
      <Image source={headerImage} style={styles.headerBackground} />
      <View style={styles.suggestionsContainer}>
        {suggests.map((suggest) => (
          <Suggestion
            key={suggest.key}
            dest={suggest.dest}
            image={suggest.image}
            suggest={suggest.suggest}
          />
        ))}
      </View>
      <Blank />
      <Services />
      <BookedStylists navigation={navigation} />
      <MaybeLike
        heading={"Có thể bạn thích"}
        services={services}
        stylists={stylists}
        isDiscount={false}
      />
      <MaybeLike
        heading={"Khuyến mãi 50%"}
        services={discountServices}
        stylists={stylists}
        isDiscount={true}
      />
      <OtherStylists />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#fff",
    flex: 1,
  },
  headerBackground: {
    marginTop: 32,
    height: 200,
    width: "100%",
    transform: [{ translateY: -30 }],
  },

  suggestionsContainer: {
    flexDirection: "row",
    width: "94%",
    marginLeft: "3%",
    backgroundColor: "white",
    justifyContent: "space-around",
    height: 120,
    alignItems: "center",
    position: "absolute",
    transform: [{ translateY: 140 }],
    borderRadius: 20,
    elevation: 5,
  },
});
