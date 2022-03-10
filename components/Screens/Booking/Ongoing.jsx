import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Dimensions, ScrollView, StyleSheet, View } from "react-native";
import BookInfo from "./BookInfo";
import Empty from "./Empty";
import MyCalendar from "./MyCalendar";
import Dialog from "./Dialog";
import { db } from "../../../global/Firebase";
import { getMyDataProfile } from "../../../global/GlobalValue";
export default function Ongoing() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteUsername, setDeleteUsername] = useState(null);
  const [doc1Id, setDoc1Id] = useState(null);
  const [doc2Id, setDoc2Id] = useState(null);
  const [dayPicked, setDayPicked] = useState(new Date());
  const [myUsername, setMyUsername] = useState("");

  const getStorgeData = (isMounted) => {};
  useEffect(() => {
    let isMounted = true;

    getMyDataProfile().then((res) => {
      const profile = JSON.parse(res);
      if (isMounted) {
        setMyUsername(profile.username);
      }
    });
    let today = dayPicked;
    today.setHours(0, 0, 0, 0);
    if (isMounted) {
      setOrders([]);
    }
    db.collection("appointment").onSnapshot((snaphot1) => {
      snaphot1.docs.map((doc) => {
        doc.ref
          .collection("appointments")
          .where("date", ">=", dayPicked)
          .onSnapshot((snapshot2) => {
            snapshot2.docs.map((doc2) => {
              doc2.ref
                .collection("appointmentsOfDate")
                .where("guestUsername", "==", myUsername)
                .onSnapshot((resultRef) => {
                  if (resultRef.docs.length > 0) {
                    resultRef.docs.forEach((item) => {
                      let tmp = orders.filter((obj) => obj.id === item.id);
                      if (tmp.length === 0) {
                        if (isMounted) {
                          setOrders((prev) => [
                            ...prev,
                            {
                              date: doc2.data().date.toDate(),
                              data: item.data(),
                              id: item.id,
                              doc1Id: doc.id,
                              doc2Id: doc2.id,
                            },
                          ]);
                        }
                      }
                    });
                  }
                });
            });
          });
      });
    });
    return () => {
      isMounted = false;
    };
  }, [dayPicked]);
  return (
    <View style={styles.container}>
      {!loading ? (
        <></>
      ) : (
        <>
          <MyCalendar setDayPicked={setDayPicked} />
          <ScrollView style={{ flex: 1, height: 600 }}>
            {orders != null ? (
              orders.map((order, index) => (
                <View style={styles.bookInfo} key={index}>
                  <BookInfo
                    bookInfo={order}
                    setDoc1Id={setDoc1Id}
                    setDoc2Id={setDoc2Id}
                    showDialog={setShow}
                    setDeleteUsername={setDeleteUsername}
                    setDeleteId={setDeleteId}
                  />
                </View>
              ))
            ) : (
              <Empty />
            )}
          </ScrollView>
        </>
      )}
      {show && (
        <Dialog
          action={setShow}
          doc1Id={doc1Id}
          doc2Id={doc2Id}
          deleteUsername={deleteUsername}
          deleteId={deleteId}
          myUsername={myUsername}
          date={dayPicked}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    flex: 1,
    height: Dimensions.get("window").height,
  },
  bookInfo: {
    marginLeft: Dimensions.get("window").width * 0.04,
    marginTop: 0,
  },
});
