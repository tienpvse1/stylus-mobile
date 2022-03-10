import React, { useState } from "react";
import {
  Dimensions,
  Keyboard,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import {
  disableSendIcon,
  flirtIcon,
  imagePickerIcon,
  sendIcon,
} from "../../../global/GlobalIcon";
import * as ImagePicker from 'expo-image-picker';
import { mainBackgroundColor } from "../../../global/GlobalValue";
import { db } from "../../../global/Firebase";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
export default function MessageInputField({ id, myUsername }) {
  const [message, setMessage] = useState("");
  const [userImage, setUserImage] = useState(null);
  const handleSendPress = () => {
    db.collection("room")
      .doc(id)
      .collection("messages")
      .add({
        text: message,
        time: new Date(),
        userImage: userImage,
        username: myUsername,
      })
      .then((res) => {
        Keyboard.dismiss();
        setMessage("");
        setUserImage(null);
      });
    db.collection("room").doc(id).update({
      lastMessageTime: new Date(),
      lastMessageText: message.length > 0 ? message : "đã gửi 1 ảnh",
      lastSender: myUsername,
    });
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true,
    });

    setUserImage(result.base64)
  };

  return (
    <View style={styles.messageInputFieldContainer}>
      <View style={styles.iconContainer}>
        <TouchableWithoutFeedback onPress={()=> pickImage()}>{imagePickerIcon}</TouchableWithoutFeedback>
        {flirtIcon}
      </View>
      <TextInput
        placeholder="Aa"
        style={styles.inputField}
        value={message}
        onChangeText={(value) => setMessage(value)}
      />
      <TouchableWithoutFeedback onPress={() => handleSendPress()}>
        <View style={styles.sendIcon}>
          {message.length > 0 || userImage ? sendIcon : disableSendIcon}
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  messageInputFieldContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    backgroundColor: mainBackgroundColor,
    elevation: 4,
    flex: 1,
    width: Dimensions.get("screen").width,
    paddingVertical: 10,
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  inputField: {
    borderWidth: 1,
    width: Dimensions.get("screen").width * 0.6,
    borderRadius: 999,
    padding: 7,
    fontSize: 16,
    borderColor: "rgba(0,0,0,0.2)",
    paddingLeft: 20,
  },
  iconContainer: {
    flexDirection: "row",
    width: Dimensions.get("screen").width * 0.17,
    // flex:1,
    justifyContent: "space-between",
    marginRight: 0,
    // backgroundColor:"red"
  },
});
