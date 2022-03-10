import { useNavigation, useRoute } from "@react-navigation/core";
import axios from "../../../global/axios";
import React, { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from "react-native";
import {
  cartIcon,
  goBackIcon,
  searchIcon,
  starIcon4,
  threeDotsHorizontal
} from "../../../global/GlobalIcon";
import {
  base64Prefix,
  contactButtonColor,
  mainBackgroundColor,
  screenWidth
} from "../../../global/GlobalValue";

export default function Category() {
  const [searchKey, setSearchKey] = useState("");
  const route = useRoute();
  const navigation = useNavigation();

  const [selectedIndex, setSelectedIndex] = useState(0);

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

  const [suggestStyles, setSuggestStyles] = useState([]);

  const onStylePress = (service) => {
    const item = {
      key: service.id,
      name: service.name,
      image: service.image,
      price: service.price,
    };
    console.log(service.stylistId);
    axios.get(`/stylist/get-stylist-by-id/${service.stylistId}`).then(res=>{
      console.log(res.data.name);
      navigation.navigate("BookingProcess", {
        stylist: res.data,
        styles: item,
      });
    })
    
  };
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      const dest = route.params.dest;
      axios.get(`/service/get-by-category/${dest}`).then((res) => {
        setSuggestStyles(res.data);
      });
    }
    return () => {
      isMounted = false;
    };
  }, []);

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
            placeholder={route.params.name}
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
            {suggestStyles.map(
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
                        <Image source={{uri: base64Prefix + item.image}} style={styles.styleImage} />
                      </View>
                      <View style={styles.underImageInfo}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.voting}>
                          {starIcon4}
                          {starIcon4}
                          {starIcon4}
                          {starIcon4} | lượt đặt: 65
                        </Text>
                        <Text style={styles.price}>{item.price}.000đ</Text>
                      </View>
                    </View>
                  </TouchableWithoutFeedback>
                )
            )}
          </View>
          <View>
            {suggestStyles.map(
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
                        <Image source={{uri: base64Prefix + item.image}} style={styles.styleImage} />
                      </View>
                      <View style={styles.underImageInfo}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.voting}>
                          {starIcon4}
                          {starIcon4}
                          {starIcon4}
                          {starIcon4} | lượt đặt: 65
                        </Text>
                        <Text style={styles.price}>{item.price}.000đ</Text>
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
