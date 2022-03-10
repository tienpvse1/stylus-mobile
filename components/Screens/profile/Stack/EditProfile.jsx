import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import {
  contactButtonColor,
  mainBackgroundColor,
} from "../../../../global/GlobalValue";
import EditAvatar from "./EditAvatar";
import EditBody from "./EditBody";
import Header from "./Header";
import axios from "../../../../global/axios";
import { useNavigation, useRoute } from "@react-navigation/core";
export default function EditProfile() {
  const route = useRoute();
  const myUsername = route.params.myUsername;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [user, setUser] = useState({
    id: 0,
    name: "",
    email: "@gmail.",
    username: "",
    password: "0",
    address: "h",
    image: null,
    birth: "",
    gender: "",
  });
  useEffect(() => {
    axios
      .get(`/user/get-user/${myUsername}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setBirth(res.data.birth);
        setGender(res.data.gender);
        setPhone(res.data.phoneNumber);
        setAddress(res.data.address);
        setImage(res.data.image);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onUpdateClick = () => {
    axios.put(`/user/update-user/${myUsername}`, {
      address: address,
      birth: birth,
      email: email,
      gender: gender,
      image: image,
      name: name,
      phoneNumber: phone
    }).then(res=>{
      if(res.data){
        console.log("updated");
      }
      else{
        console.log("error occur")
      }
      navigation.pop();
    }).catch(error => console.log(error));
  };

  return (
    !loading && (
      <View style={styles.editProfile}>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.header}>
            <Header />
            <EditAvatar image={image} setImage={setImage} />
          </View>
          <View style={styles.editBody}>
            <EditBody
              user={user}
              birth={birth}
              setBirth={setBirth}
              email={email}
              setEmail={setEmail}
              gender={gender}
              setGender={setGender}
              location={address}
              setLocation={setAddress}
              name={name}
              setName={setName}
              phoneNumber={phone}
              setPhoneNumber={setPhone}
            />
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableWithoutFeedback
            onPress={onUpdateClick}
            style={{ backgroundColor: contactButtonColor }}
          >
            <Text style={styles.buttonText}>Thay đổi</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  editProfile: {
    flex: 1,
  },
  header: {
    backgroundColor: mainBackgroundColor,
    height: "30%",
  },
  editBody: {
    backgroundColor: "#f2f2f2",
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: mainBackgroundColor,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    backgroundColor: contactButtonColor,
    width: "90%",
    textAlign: "center",
    paddingVertical: 10,
    fontSize: 20,
    borderRadius: 999,
    marginBottom: 10,
    fontWeight: "bold",
    color: mainBackgroundColor,
  },
});
