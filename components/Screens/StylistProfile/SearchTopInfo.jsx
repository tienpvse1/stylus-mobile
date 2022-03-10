import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native";

import {
  followIcon2,
  goBackIcon2,
  searchIcon,
} from "../../../global/GlobalIcon";

export default function SearchTopInfo({hideSearchBox,searchKey,onInput,stylistName, location, action , show, hide , changeView }) {
  
  const inputHandler = (val) =>{
    onInput(val);
    if(val.length > 0){
      show();
    }
    else hide();
  }
  const backHandler = () =>{
    onInput('');
    hide();
    hideSearchBox();
  }
  return (
    <View style={styles.topInfo}>
      <View style={styles.topInfoContainer}>
        <TouchableWithoutFeedback onPress={() => backHandler()}>
          <View style={styles.iconContainer}>{goBackIcon2}</View>
        </TouchableWithoutFeedback>
        <Text style={styles.mainInfo}>
          {stylistName}-{location}
        </Text>
        <View style={styles.iconContainer}>{followIcon2}</View>
      </View>
      <View style={styles.filterContainer}>
        <View style={styles.search}>
          {searchIcon}
          <TextInput style={{flex:1}} value={searchKey} onChangeText={(value) => inputHandler(value)} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topInfo: {
    backgroundColor: "white",
    position: "absolute",
    zIndex: 3,
    width: "100%",
    paddingHorizontal: 10,
    height: 125,
    top:20
  },
  topInfoContainer: {
    height: "50%",
    alignItems: "center",
    flexDirection: "row",
  },
  iconContainer: {
    flex: 0.15,
  },
  mainInfo: {
    flex: 0.7,
    fontSize: 17,
  },
  filterContainer: {
    flexDirection: "row",
  },
  search: {
    flexDirection: "row",
    width: "90%",
    backgroundColor: "#ecf2ff",
    //   justifyContent:"center",
    paddingLeft: 12,
    alignItems: "center",
    borderRadius: 999,
    marginLeft: 15,
    borderColor:"#abc5fe",
    borderWidth: 1,
    paddingVertical: 7
  },
});
