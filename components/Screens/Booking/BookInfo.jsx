import React, { useState, useEffect } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  dotIcon,
  locationIcon,
  scissorIcon,
  starIcon,
} from "../../../global/GlobalIcon";
import {
  base64Prefix,
  contactButtonColor,
  mainBackgroundColor,
  mediumTextColor,
  secondaryTextColor,
  textColor,
} from "../../../global/GlobalValue";
import axios from "../../../global/axios";
export default function BookInfo({
  bookInfo,
  showDialog,
  setDeleteUsername,
  setDeleteId,
  setDoc1Id,
  setDoc2Id
}) {
  const [stylist, setStylist] = useState({
    stylistId: 1,
    name: "",
    address: "",
    image: null,
    phoneNumber: "",
    longtitude: 0,
    latitude: 0,
    birth: "",
    username: "",
    email: "",
    password: "",
    position: "",
    served: 0,
  });
  const [service, setService] = useState({
    stylistId: 0,
    name: "",
    price: 659,
    image: null,
    slotConsume: 0,
    categoryId: 0,
    id: 0,
  });
  const [date, setDate] = useState(bookInfo.date.toLocaleDateString());
  const [loading, setLoading] = useState(true);
  const getStylist = () => {
    let stylistUsername = bookInfo.data.stylistUsername;
    axios
      .get(`/stylist/get/${stylistUsername}`)
      .then((res) => {
        setStylist(res.data);
      })
      .then(getService());
  };

  const getService = () => {
    let serviceId = bookInfo.data.styleId;
    axios
      .get(`/service/get/${serviceId}`)
      .then((res) => {
        setService(res.data);
      })
      .then(setLoading(false));
  };

  const Id = bookInfo.id.slice(0, 8);

  const onDeleteHandler = () => {
    setDeleteId(bookInfo.id);
    setDeleteUsername(stylist.username);
    setDoc1Id(bookInfo.doc1Id);
    setDoc2Id(bookInfo.doc2Id);
    showDialog(true);
  };

  useEffect(() => {
    getStylist();
  }, []);

  //   useEffect(() => {
  //     console.log(require("../../../image/hair_style/medium-bob.jpg"));
  //   });
  return (
    !loading && (
      <View style={styles.bookInfo}>
        <View style={styles.firstBlock}>
          <View style={styles.leftText}>
            <View style={styles.line}>
              <Text style={styles.heading}>Stylist: </Text>
              <Text style={styles.stylistName}>{stylist.name}</Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.heading}>Mã đặt hẹn: </Text>
              <Text style={styles.id}>{Id}</Text>
            </View>
            <View style={styles.line}>
              <Text style={styles.stylistInfo}>
                {locationIcon}
                4phút{dotIcon}
                0.4km{dotIcon}
                3.5
                {starIcon}
              </Text>
            </View>
          </View>
          <View style={styles.rightPaidIcon}>
            {stylist.image ? (
              <Image
                source={{ uri: base64Prefix + stylist.image }}
                style={styles.paidImage}
              />
            ) : (
              <Image
                source={require("../../../image/background/avatar-placeholder.png")}
                style={styles.paidImage}
              />
            )}
          </View>
        </View>
        <View style={styles.secondBlock}>
          <View style={styles.hairStyle}>
            <Text style={styles.hairStyleHeading}>Kiểu tóc đã chọn</Text>
            <Text style={styles.hairStyleName}>
              {scissorIcon} {service.name}
            </Text>
            <Image
              source={{ uri: base64Prefix + service.image }}
              style={styles.image}
            />
          </View>
          <View style={styles.dateAndSlot}>
            <Text style={styles.time}>{date}</Text>
            <Text style={styles.time}>{bookInfo.data.slot}</Text>
          </View>
        </View>
        <TouchableWithoutFeedback onPress={() => onDeleteHandler()}>
          <Text style={styles.button}>Hủy đặt lịch</Text>
        </TouchableWithoutFeedback>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  bookInfo: {
    backgroundColor: mainBackgroundColor,
    height: Dimensions.get("screen").height * 0.47,
    width: Dimensions.get("window").width * 0.92,
    borderRadius: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
    elevation: 5,
  },
  firstBlock: {
    flexDirection: "row",
    borderBottomColor: secondaryTextColor,
    borderBottomWidth: 0.7,
    height: 128,
    marginBottom: 10,
  },
  leftText: {
    width: 180,
  },
  rightPaidIcon: {
    flex: 0.3,
  },
  stylistName: {
    color: textColor,
    fontSize: 22,
    fontWeight: "bold",
  },
  stylistInfo: {
    fontSize: 14,
    color: mediumTextColor,
  },
  line: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 14,
  },
  heading: {
    fontSize: 17,
    color: mediumTextColor,
    width: 100,
  },
  id: {
    color: textColor,
    fontSize: 19,
  },
  paidImage: {
    height: 80,
    width: 80,
    borderRadius: 999,
  },
  rightPaidIcon: {
    marginLeft: 50,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    borderColor: contactButtonColor,
    borderWidth: 1.5,
    padding: 5,
    borderRadius: 999,
  },
  hairStyleHeading: {
    fontSize: 17,
    color: textColor,
    marginBottom: 1,
  },
  hairStyleName: {
    color: textColor,
    fontSize: 17,
    paddingLeft: 15,
  },
  secondBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  time: {
    color: textColor,
    fontSize: 15,
    marginBottom: 7,
  },
  barcode: {
    transform: [{ translateX: 25 }, { translateY: 10 }],
  },
  barcodeHeading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    transform: [{ translateY: 40 }],
  },

  thirdBlock: {
    flex: 1,
  },
  image: {
    marginTop: 12,
    marginLeft: 35,
    height: 80,
    width: 150,
  },
  button: {
    color: "white",
    backgroundColor: "#ff5148",
    padding: 15,
    borderRadius: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
