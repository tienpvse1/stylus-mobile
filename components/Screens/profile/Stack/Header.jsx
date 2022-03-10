import React from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { goldBackIcon } from "../../../../global/GlobalIcon";
import { textColor } from "../../../../global/GlobalValue";
import { useNavigation } from "@react-navigation/core";
export default function Header() {

  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableWithoutFeedback onPress={()=>navigation.goBack()}>
      <View style={styles.icon}>{goldBackIcon}</View>
      </TouchableWithoutFeedback>
      <Text style={styles.text}>Chỉnh sửa thông tin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 30,
    flexDirection: "row",
    alignItems:"center"
  },
  icon:{
      flex: 0.2,
      marginLeft: 10,
  },
  text:{
      flex:0.8,
      fontSize: 24,
      color: textColor
  }
});
