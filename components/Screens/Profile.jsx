import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { getMyDataProfile } from "../../global/GlobalValue";
import Body from "./profile/Body";
import Header from "./profile/Header";

export default function Profile({ navigation }) {
  const [myUsername, setMyUsername] = useState("");
  const [loading, setLoading] = useState(true);
  const getStorageData = () => {
    getMyDataProfile().then((res) => {
      const profile = JSON.parse(res);
      setMyUsername(profile.username);
      setLoading(false);
    });
  };
  const goToEdit = () => {
    navigation.push("EditProfile", { myUsername: myUsername });
  };
  useEffect(() => {
    getStorageData();
  }, []);
  return (
    !loading && (
      <ScrollView style={{ flex: 1 }}>
        <Header myUsername={myUsername} onEditClick={goToEdit} />
        <Body myUsername={myUsername} />
      </ScrollView>
    )
  );
}

const styles = StyleSheet.create({});
