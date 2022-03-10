import React from "react";
import { StyleSheet, Text, View , Image, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/core";
export default function Suggestion({image , suggest, dest}) {
  const navigaiton = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={()=> navigaiton.navigate(dest)}>
    <View style={styles.suggestion}>
      <Image source={image} style={styles.image} />
      <Text style={styles.serviceName}>{suggest}</Text>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    suggestion:{
        width: 80,
        height: 80,
        alignItems: "center",
        justifyContent:"center",
        borderRadius: 999,
        // backgroundColor: serviceBackgroundColor
    },
    image:{
        width: 35,
        height: 35
    },
    serviceName:{
        fontSize: 12
    }
});
