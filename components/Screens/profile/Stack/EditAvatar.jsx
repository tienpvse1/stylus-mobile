import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableWithoutFeedback } from "react-native";
import { cameraIcon } from "../../../../global/GlobalIcon";
import Avatar from "../../../svg/Avatar";
import AvatarTopLayer from "../../../svg/AvatarTopLayer";
import HexagonBorder from "../../../svg/HexagonBorder";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/core";
export default function EditAvatar({ image, setImage }) {
  const navigation = useNavigation();
  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          navigation.goBack();
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true,
    });

    setImage(result.base64)
  };
  return (
    <View
      style={{ justifyContent: "center", width: "100%", alignItems: "center" }}
    >
      <TouchableWithoutFeedback onPress={() => pickImage()}>
        <View style={styles.editProfile}>
          <View style={styles.avatar1}>
            <HexagonBorder />
          </View>

          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Avatar image={image} />
            </View>
            <View style={styles.avatar}>
              <AvatarTopLayer />
            </View>
            <View style={styles.icon}>{cameraIcon}</View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  editProfile: {
    height: 150,
    marginTop: 0,
  },
  avatarContainer: {
    position: "absolute",
    top: 16,
    left: -8,
  },
  avatar: {
    position: "absolute",
  },
  icon: {
    position: "absolute",
    top: 35,
    left: 55,
  },
});
