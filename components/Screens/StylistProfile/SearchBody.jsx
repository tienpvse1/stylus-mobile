import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Animation from "lottie-react-native";
export default function SearchBody({ searchKey, stylist , navigation }) {
  const [result, setResult] = useState([]);
  const hairStyles = [
    {
      key: 1,
      name: "Curtain bangs",
      image: require("../../../image/hair_style/curtain-bangs.jpg"),
      price: 750,
    },
    {
      key: 2,
      name: "Face framing",
      image: require("../../../image/hair_style/face-framing.jpg"),
      price: 900,
    },
    {
      key: 3,
      name: "Fun medium",
      image: require("../../../image/hair_style/fun-medium.jpg"),
      price: 600,
    },
    {
      key: 4,
      name: "Long shaggy",
      image: require("../../../image/hair_style/long-shaggy-bob-haircut.jpg"),
      price: 500,
    },
    {
      key: 5,
      name: "Medium bob",
      image: require("../../../image/hair_style/medium-bob.jpg"),
      price: 550,
    },
    {
      key: 6,
      name: "Medium one-length",
      image: require("../../../image/hair_style/medium-one-length.jpg"),
      price: 200,
    },
    {
      key: 7,
      name: "Pixie bob",
      image: require("../../../image/hair_style/pixie-bob.jpg"),
      price: 700,
    },
    {
      key: 8,
      name: "Razored brunette",
      image: require("../../../image/hair_style/razored-brunette.jpg"),
      price: 849,
    },
    {
      key: 9,
      name: "Razored Feather",
      image: require("../../../image/hair_style/razored-feathered.jpg"),
      price: 650,
    },
    {
      key: 10,
      name: "Short angle bob",
      image: require("../../../image/hair_style/short-angled-bob.jpg"),
      price: 650,
    },
    {
      key: 11,
      name: "Short franch bob",
      image: require("../../../image/hair_style/short-franch-bob.jpg"),
      price: 535,
    },
    {
      key: 12,
      name: "Straight layered",
      image: require("../../../image/hair_style/straight-layered.jpg"),
      price: 450,
    },
    {
      key: 13,
      name: "Textured",
      image: require("../../../image/hair_style/texture-hair-cut.jpg"),
      price: 439,
    },
    {
      key: 14,
      name: "2 Tones",
      image: require("../../../image/hair_style/two-tone-messy.jpg"),
      price: 339,
    },
  ];
  useEffect(() => {
    setResult([]);
    const tmp = [];
    hairStyles.forEach((hairStyle) => {
      if (hairStyle.name.toLowerCase().includes(searchKey.toLowerCase())) {
        tmp.push(hairStyle);
      }
    });
    setResult(tmp);
  }, [searchKey]);
  const goToBooking = (item) => {
    navigation.navigate("BookingProcess", {
      stylist: stylist,
      styles: item,
    });
  };
  return (
    <View
      style={{ marginTop: 148, backgroundColor: "#3B3A39", height: "100%" }}
    >
      {result.length > 0 ? (
        <ScrollView style={styles.scrollView}>
          {result.map((item) => (
            <TouchableWithoutFeedback key={item.key} onPress={()=>goToBooking(item)}>
              <View style={styles.searchContainer} >
                <Image source={item.image} style={styles.saleImage} />
                <View>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.originalPrice}>{item.price}.000</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
      ) : (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.lottieContainer}>
            <Animation
              source={require("../../../assets/lottie/butterfly.json")}
              autoPlay={true}
              loop
              style={styles.lottie}
            />
            <Text style={styles.upperNotFound}>
              Không tìm thấy kết quả phù hợp
            </Text>
            <Text style={styles.notFound}>
              Hãy thử thay đổi từ khóa hoặc tìm style bạn thích ở những stylist
              khác
            </Text>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    marginBottom: 10,
    borderBottomColor: "rgba(207,207,196,0.8)",
    borderBottomWidth: 0.3,
    marginHorizontal: 20,
    paddingBottom: 20,
  },
  scrollView: {
    paddingTop: 30,
    flex: 1,
    marginBottom: 300,
  },
  name: {
    fontSize: 17,
    color: "white",
  },
  originalPrice: {
    color: "#cfcfc4",
    fontSize: 12,
    marginVertical: 7,
  },
  price: {
    fontSize: 15,
    color: "white",
    fontWeight: "bold",
  },
  saleImage: {
    height: 120,
    width: 120,
    marginRight: 10,
    borderRadius: 8,
  },
  saleText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 25,
    marginBottom: 15,
  },
  lottieContainer: {
    paddingTop: 50,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  lottie: {
    height: "100%",
    width: 300,
  },
  upperNotFound: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  notFound: {
    width: "80%",
    marginTop: 10,
    color: "white",
    textAlign: "center",
  },
});
