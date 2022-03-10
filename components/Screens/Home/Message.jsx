import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import MessageHeader from "./MessageHeader";
import MessageInputField from "./MessageInputField";
import MessageText from "../Message/MessageText";
import { useRoute } from "@react-navigation/core";
import { db } from "../../../global/Firebase";
import { getMyDataProfile } from "../../../global/GlobalValue";
export default function Message() {
  const route = useRoute();
  const roomId = route.params.chatRoomId;
  const reciverUsername = route.params.reciverName;
  const [myUsername,setMyUsername] = useState("");
  const [messages, setMessages] = useState([
    {
      text: "",
      time: null,
      userImage: null,
      username: "",
    },
  ]);

  const getStorageData = () =>{
    getMyDataProfile().then(res=>{
      const profile = JSON.parse(res);
      setMyUsername(profile.username);
    })
  }

  useEffect(() => {
    getStorageData();
    db.collection("room").doc(roomId).collection("messages").orderBy("time").onSnapshot(snapshot =>{
        if(snapshot.empty){
            setMessages([]);
        }
        else{
            setMessages(
                snapshot.docs.map(doc => ({
                    text: doc.data().text,
                    time: doc.data().time.toDate(),
                    userImage: doc.data().userImage,
                    username: doc.data().username,
                    isAbort: doc.data().isAbort ? true : false
                    
                }))
            )
        }
    })
  }, []);

  return (
    <View style={styles.messageContainer}>
      <MessageHeader reciverName={reciverUsername} />
      <View style={styles.messages}>
        <ScrollView style={styles.scrollView}>
          {messages.map((message, index) => (
            <MessageText key={index} message={message} />
          ))}
        </ScrollView>
      </View>
      <MessageInputField id={roomId} myUsername={myUsername} />
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    flex: 1,
  },
  messages: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 65,
  },
});
