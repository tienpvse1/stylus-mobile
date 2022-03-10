import { useRoute } from "@react-navigation/core";
import React, { useEffect, useRef } from "react";
import { StyleSheet, Text, TextInput, View, Keyboard } from "react-native";
import { cameraIcon2 } from "../../../../global/GlobalIcon";
import { textColor } from "../../../../global/GlobalValue";
import RatingHeader from "./RatingHeader";
export default function RatingDetail() {
  const route = useRoute();
  const inputRef = useRef(null);
  const order = route.params.order;
  const rating = route.params.rating;
  useEffect(() => {
    // Keyboard.
    inputRef.current.focus();
  }, []);
  return (
    <View style={styles.container}>
      <RatingHeader order={order} rating={rating} />
      <View style={styles.bottomContent}>
        <Text style={styles.heading}>Nhận xét về dịch vụ</Text>
        <View style={styles.inputContainer}>
          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder="Chia sẻ thêm thông tin về dịch vụ"
            multiline={true}
            numberOfLines={3}
            autoFocus={true}
            textAlignVertical="top"
          />
        </View>
      </View>
      <View style={styles.camera}>{cameraIcon2}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderRadius: 5,
    width: "94%",
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,0.7)",
    padding: 10,
    fontSize: 17,
  },
  bottomContent: {
    paddingLeft: 15,
  },
  inputContainer: {},
  heading: {
    color: textColor,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },
  camera: {
    backgroundColor: "rgba(239,29,106,0.1)",
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.7,
    borderColor: "rgba(239,29,106,255)",
    borderStyle: "dashed",
    margin: 20,
    borderRadius: 5,
  },
});
