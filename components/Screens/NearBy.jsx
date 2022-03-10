import React, { useRef, useState } from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import Header from "./NearBy/Header";
import Info from "./NearBy/Info";
import MyBottomSheet from "./NearBy/MyBottomSheet";
import MyLocation from "./NearBy/MyLocation";
import ServiceLocation from "./NearBy/ServiceLocation";

export default function NearBy({ navigation }) {
  const sheetRef = useRef(null);

  const [markers] = useState([
    {
      id: 1,
      image: "hairdresser.png",
      coords: {
        latitude: 10.8123775225755,
        longitude: 106.70780181884767,
      },
    },
    {
      id: 2,
      image: "makeup.png",
      coords: {
        latitude: 10.815265020504775,
        longitude: 106.70754432678224,
      },
    },
    {
      id: 3,
      image: "nail.png",
      coords: {
        latitude: 10.813009823768972,
        longitude: 106.71258687973022,
      },
    },
    {
      id: 4,
      image: "skin.png",
      coords: {
        latitude: 10.808941996134765,
        longitude: 106.71372413635255,
      },
    },
  ]);

  const stylists = [
    {
      key: "1",
      stylistName: "Teletubby",
      vote: 5,
      distance: 0.4,
      time: 4,
      image: require("../../image/booked/stylist.jpg"),
      status: "busy",
      served: 100,
      services: ["Làm tóc"],
      address: "57 QL13, Phường 26, Bình Thạnh, Thành phố Hồ Chí Minh",
    },
    {
      key: "2",
      stylistName: "Trish",
      vote: 5,
      distance: 0.7,
      time: 7,
      image: require("../../image/booked/stylist2.jpg"),
      status: "available",
      served: 369,
      services: ["Làm tóc"],
      address: "102 Nguyễn Xí, Phường 26, Bình Thạnh, Thành phố Hồ Chí Minh",
    },
    {
      key: "3",
      stylistName: "Lady",
      vote: 3,
      distance: 1,
      time: 12,
      image: require("../../image/booked/stylist3.jpg"),
      status: "available",
      served: 250,
      services: ["Làm tóc"],
      address: "94 Chu Văn An, Phường 26, Bình Thạnh, Thành phố Hồ Chí Minh",
    },
    {
      key: "4",
      stylistName: "Sarah",
      vote: 4,
      distance: 1.2,
      time: 15,
      image: require("../../image/booked/stylist4.jpg"),
      status: "busy",
      served: 370,
      services: ["Làm tóc", "Dưỡng da"],
      address: " 2 Đường số 1, Phường 26, Bình Thạnh, Thành phố Hồ Chí Minh",
    },
    {
      key: "5",
      stylistName: "Kelly",
      vote: 5,
      distance: 2,
      time: 20,
      image: require("../../image/booked/stylist5.jpg"),
      status: "available",
      served: 690,
      services: ["Làm tóc"],
      address: " 154 Nguyễn Xí, Phường 26, Bình Thạnh, Thành phố Hồ Chí Minh",
    },
    {
      key: "6",
      stylistName: "Britney",
      vote: 5,
      distance: 2.2,
      time: 20,
      image: require("../../image/booked/stylist6.jpg"),
      status: "available",
      served: 132,
      services: ["Làm tóc"],
      address: "292 Đinh Bộ Lĩnh, Phường 26, Bình Thạnh, Thành phố Hồ Chí Minh",
    },
    {
      key: "7",
      stylistName: "Sonny",
      vote: 5,
      distance: 4,
      time: 27,
      image: require("../../image/booked/stylist7.jpg"),
      status: "busy",
      served: 46,
      services: ["Làm tóc"],
      address:
        "67 Xô Viết Nghệ Tĩnh, Phường 26, Bình Thạnh, Thành phố Hồ Chí Minh",
    },
    {
      key: "8",
      stylistName: "Malkova",
      vote: 4,
      distance: 0.5,
      time: 3,
      image: require("../../image/hair/hair1.jpg"),
      status: "available",
      served: 302,
      isDiscount: true,
      services: ["làm tóc", "makeup"],
      address:
        "801 Xô Viết Nghệ Tĩnh, Phường 26, Bình Thạnh, Thành phố Hồ Chí Minh",
    },
    {
      key: "9",
      stylistName: "Kyrie",
      vote: 3,
      distance: 1,
      time: 10,
      image: require("../../image/hair/hair2.jpg"),
      status: "available",
      served: 235,
      isDiscount: false,
      services: ["makeup"],
      address: "26 Ung Văn Khiêm, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh",
    },
    {
      key: "10",
      stylistName: "May",
      vote: 4,
      distance: 1.2,
      time: 11,
      image: require("../../image/hair/hair3.jpg"),
      status: "busy",
      served: 420,
      isDiscount: true,
      services: ["làm tóc"],
      address: "15 Đường D5, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh",
    },
    {
      key: "11",
      stylistName: "Connor",
      vote: 5,
      distance: 1.5,
      time: 15,
      image: require("../../image/hair/hair4.jpg"),
      status: "busy",
      served: 511,
      isDiscount: false,
      services: ["làm tóc", "làm móng"],
      address: "131 Bùi Đình Tuý, Phường 24, Bình Thạnh, Thành phố Hồ Chí Minh",
    },
    {
      key: "12",
      stylistName: "Kelly",
      vote: 4,
      distance: 2,
      time: 20,
      image: require("../../image/hair/hair5.jpg"),
      status: "available",
      served: 25,
      isDiscount: true,
      services: ["waxing", "dưỡng da"],
      address:
        "hẻm 118, 118/19 Đường Bạch Đằng, Phường 24, Bình Thạnh, Thành phố Hồ Chí Minh",
    },
    {
      key: "13",
      stylistName: "Lucy",
      vote: 3,
      distance: 2.2,
      time: 20,
      image: require("../../image/hair/hair6.jpg"),
      status: "available",
      served: 89,
      isDiscount: false,
      services: ["dưỡng da", "trang điểm"],
      address:
        "305 Đường Bạch Đằng, Phường 15, Bình Thạnh, Thành phố Hồ Chí Minh",
    },
    {
      key: "14",
      stylistName: "Cole",
      vote: 5,
      distance: 4,
      time: 27,
      image: require("../../image/hair/hair7.jpg"),
      status: "busy",
      served: 46,
      isDiscount: false,
      services: ["trang điểm"],
      address:
        "118/154 Đường Bạch Đằng, Phường 24, Bình Thạnh, Thành phố Hồ Chí Minh",
    },
  ];

  const [showListNearBy, setShowListNearBy] = useState(true);

  const [myLocation, setMyLocation] = useState({
    latitude: 10.8127655,
    longitude: 106.7096755,
  });

  const openBottomSheet = () => {
    sheetRef.current.snapTo(0);
    setShowListNearBy(false);
  };

  const openBySwipeHandler = () => {
    setShowListNearBy(true);
  };

  return (
    <View>
      <Header action={openBottomSheet} />
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 10.8127655,
          longitude: 106.7096755,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: myLocation.latitude,
            longitude: myLocation.longitude,
          }}
          description="here"
        >
          <MyLocation />
        </Marker>
        {markers.map((marker) => (
          <Marker key={marker.id} coordinate={marker.coords}>
            <ServiceLocation />
          </Marker>
        ))}
      </MapView>
      {showListNearBy && <Info />}
      <MyBottomSheet
        stylists={stylists}
        refer={sheetRef}
        navigation={navigation}
        action={openBottomSheet}
        swipeHandler={openBySwipeHandler}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
