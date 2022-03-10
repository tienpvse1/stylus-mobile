import React, { useEffect, useState } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  bottomSheetIcon,
  dotIcon,
  minusIcon,
  myLocationIcon3,
  searchIcon,
  starIcon,
} from "../../../global/GlobalIcon";
import {
  mainBackgroundColor,
  mediumTextColor,
  textColor,
} from "../../../global/GlobalValue";
export default function BottomSheetContent({ stylists, navigation }) {
  const [stylistToShow, setStylistToShow] = useState([]);

  const [loading, setLoading] = useState(true);

  const maxlimit = 26;

  const getView = (key) => {
    let result = [];
    let tmpResult = stylists.filter((stylist) =>
      stylist.stylistName.toLowerCase().includes(key)
    );
    let endPoint = tmpResult.length;
    if (endPoint > 4) {
      endPoint = 4;
    }
    for (let i = 0; i < endPoint; i++) {
      result.push(tmpResult[i]);
    }
    setStylistToShow(result);
  };

  const navigateToProfile = (stylist) => {
    console.log("clicked");
    navigation.navigate("StylistProfile", { stylist: stylist });
  };

  useEffect(() => {
    getView("");
    setLoading(false);
  }, []);

  return (
    <View
      style={{
        backgroundColor: mainBackgroundColor,
        height: Dimensions.get("window").height * 0.9,
        marginHorizontal: 10,
        borderRadius: 20,
      }}
    >
      <Text style={styles.bottomSheetHeader}>{minusIcon}</Text>
      <View>
        <Text style={styles.locationText}>
          {bottomSheetIcon} 113 Nguyễn Xí, P.26
        </Text>
        <View style={styles.searchBox}>
          {searchIcon}
          <TextInput
            style={{ flex: 1 }}
            placeholder="Tìm stylist..."
            onChangeText={(value) => getView(value)}
          />
        </View>
      </View>
      {!loading ? (
        <View style={styles.stylistsListContainer}>
          {stylistToShow.map((stylist, index) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigateToProfile(stylist)}
            >
              <View style={styles.stylist}>
                <Image source={stylist.image} style={styles.stylistImage} />
                <View style={styles.rightContent}>
                  <Text style={styles.stylistName}>{stylist.stylistName}</Text>
                  <Text style={styles.address}>
                    {myLocationIcon3}{" "}
                    {stylist.address.length > maxlimit
                      ? stylist.address.substring(0, maxlimit - 3) + "..."
                      : stylist.address}
                  </Text>
                  <Text style={styles.distanceAndVote}>
                    {stylist.vote}
                    {starIcon}
                    {dotIcon}
                    {stylist.distance}km
                  </Text>
                  <Text style={styles.served}>
                    Đã phục vụ : {stylist.served}
                  </Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  bottomSheetHeader: {
    textAlign: "center",
    height: 35,
  },
  locationText: {
    fontSize: 18,
    color: textColor,
    fontWeight: "bold",
    marginLeft: 10,
  },
  searchBox: {
    borderRadius: 10,
    padding: 12,
    marginHorizontal: 20,
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    elevation: 5,
  },
  stylistsListContainer: {
    marginTop: 30,
    marginHorizontal: 20,
    height: Dimensions.get("window").height * 0.3,
  },
  stylist: {
    flexDirection: "row",
    marginBottom: 20,
  },
  stylistImage: {
    height: 100,
    width: 120,
    marginRight: 15,
    borderRadius: 10,
  },
  stylistName: {
    color: textColor,
    fontSize: 18,
    fontWeight: "bold",
  },
  address: {
    color: mediumTextColor,
    marginVertical: 5,
  },
  distanceAndVote: {
    color: mediumTextColor,
    fontSize: 15,
  },
  served: {
    color: "white",
  },
});
