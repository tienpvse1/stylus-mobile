import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { RadioButton } from "react-native-paper";
import DatePicker from "@react-native-community/datetimepicker";
import {
  contactButtonColor,
  darkBackground,
  fadeTextColor,
  goldColor,
  lighterWhite,
  mainBackgroundColor,
  mediumTextColor,
  secondaryTextColor,
  textColor,
} from "../../../../global/GlobalValue";
import { convertBirthday } from "../../../../global/DateConverter";
export default function EditBody({
  name,
  setName,
  email,
  setEmail,
  birth,
  setBirth,
  gender,
  setGender,
  phoneNumber,
  setPhoneNumber,
  location,
  setLocation,
}) {
  const [show, setShow] = useState(false);
  const date = new Date(2000, 1, 1);

  const nationImage = require("../../../../image/nations/vietnam.png");
  const toggleDatePicker = (event, selectedDate) => {
    show ? setShow(false) : setShow(true);
    // setBirth(selectedDate.);
    // new Date().getD
    setBirth(
      selectedDate.getDate() +
        "-" +
        selectedDate.getMonth() +
        "-" +
        selectedDate.getFullYear()
    );
  };
  return (
    <View style={styles.editBody}>
      <TextInput
        placeholderTextColor={"red"}
        style={styles.input}
        placeholder="Tên"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onTextInput={setEmail}
      />
      <TouchableWithoutFeedback onPress={() => setShow(true)}>
        <Text style={styles.input}>{birth}</Text>
      </TouchableWithoutFeedback>
      {show && (
        <DatePicker mode="date" value={date} onChange={toggleDatePicker} />
      )}
      <View style={styles.genderContainer}>
        <Text style={styles.genderText}>Giới tính</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.genderButton}>
            <RadioButton
              value={"female"}
              status={gender === "female" ? "checked" : "unchecked"}
              onPress={() => setGender("female")}
              color={contactButtonColor}
              uncheckedColor={mediumTextColor}
            />
            <Text style={styles.genderButtonText}>Nữ</Text>
          </View>
          <View style={styles.genderButton}>
            <RadioButton
              value={"female"}
              status={gender !== "female" ? "checked" : "unchecked"}
              onPress={() => setGender("male")}
              color={contactButtonColor}
              uncheckedColor={mediumTextColor}
            />
            <Text style={styles.genderButtonText}>Nam</Text>
          </View>
        </View>
      </View>
      <View style={styles.contact}>
        <View style={styles.nation}>
          <Image source={nationImage} style={styles.image} />
          <Text style={styles.headNumber}> +84</Text>
        </View>
        <TextInput
          style={styles.phoneNumber}
          placeholderTextColor={secondaryTextColor}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          placeholder="SĐT"
        />
      </View>
      <TextInput
        style={styles.input}
        placeholder="Địa chỉ của bạn"
        value={location}
        onChangeText={setLocation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  editBody: {
    marginTop: 30,
    alignItems: "center",
    paddingBottom: 100,
  },
  input: {
    backgroundColor: mainBackgroundColor,
    width: "90%",
    marginBottom: 20,
    fontSize: 18,
    color: textColor,
    paddingVertical: 15,
    paddingLeft: 35,
    borderRadius: 999,
    elevation: 2,
  },
  genderContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
  },
  genderText: {
    marginLeft: 10,
    color: textColor,
    fontSize: 20,
    transform: [{ translateY: -10.5 }],
  },
  genderButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  genderButtonText: {
    color: textColor,
    fontSize: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 170,
    marginLeft: 50,
    marginBottom: 20,
  },
  contact: {
    elevation: 2,
    backgroundColor: mainBackgroundColor,
    width: "90%",
    marginBottom: 20,
    paddingVertical: 14,
    paddingLeft: 15,
    borderRadius: 999,
    flexDirection: "row",
  },
  nation: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
    borderRightWidth: 0.5,
    borderRightColor: fadeTextColor,
  },
  image: {
    height: 20,
    width: 30,
  },
  headNumber: {
    color: fadeTextColor,
    fontSize: 18,
  },
  phoneNumber: {
    marginLeft: 10,
    fontSize: 18,
    color: textColor,
  },
});
