import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Alert
} from "react-native";
import { convert } from "../../../global/DateConverter";
import { contactButtonColor } from "../../../global/GlobalValue";
import MyDatePicker from "./MyDatePicker";
import TimeSlot from "./TimeSlot";
import { db } from "../../../global/Firebase";
export default function TimeTable({ stylist, action, service }) {
  const [timeSlots, setTimeSlots] = useState([
    {
      id: 1,
      status: "OK",
      time: "6:00 AM",
    },
    {
      id: 2,
      status: "OK",
      time: "7:00 AM",
    },
    {
      id: 3,
      status: "OK",
      time: "8:00AM",
    },
    {
      id: 4,
      status: "OK",
      time: "9:00 AM",
    },
    {
      id: 5,
      status: "OK",
      time: "10:00 AM",
    },
    {
      id: 6,
      status: "OK",
      time: "11:00 AM",
    },
    {
      id: 7,
      status: "OK",
      time: "12:00 AM",
    },
    {
      id: 8,
      status: "OK",
      time: "1:00 PM",
    },
    {
      id: 9,
      status: "OK",
      time: "2:00 PM",
    },
    {
      id: 10,
      status: "OK",
      time: "3:00 PM",
    },
    {
      id: 11,
      status: "OK",
      time: "4:00 PM",
    },
    {
      id: 12,
      status: "OK",
      time: "5:00 PM",
    },
    {
      id: 13,
      status: "OK",
      time: "6:00 PM",
    },
    {
      id: 14,
      status: "OK",
      time: "7:00 PM",
    },
    {
      id: 15,
      status: "OK",
      time: "8:00 PM",
    },
    {
      id: 16,
      status: "OK",
      time: "9:00 PM",
    },
  ]);
  const emptySlot = [
    {
      id: 1,
      status: "OK",
      time: "6:00 AM",
    },
    {
      id: 2,
      status: "OK",
      time: "7:00 AM",
    },
    {
      id: 3,
      status: "OK",
      time: "8:00AM",
    },
    {
      id: 4,
      status: "OK",
      time: "9:00 AM",
    },
    {
      id: 5,
      status: "OK",
      time: "10:00 AM",
    },
    {
      id: 6,
      status: "OK",
      time: "11:00 AM",
    },
    {
      id: 7,
      status: "OK",
      time: "12:00 AM",
    },
    {
      id: 8,
      status: "OK",
      time: "1:00 PM",
    },
    {
      id: 9,
      status: "OK",
      time: "2:00 PM",
    },
    {
      id: 10,
      status: "OK",
      time: "3:00 PM",
    },
    {
      id: 11,
      status: "OK",
      time: "4:00 PM",
    },
    {
      id: 12,
      status: "OK",
      time: "5:00 PM",
    },
    {
      id: 13,
      status: "OK",
      time: "6:00 PM",
    },
    {
      id: 14,
      status: "OK",
      time: "7:00 PM",
    },
    {
      id: 15,
      status: "OK",
      time: "8:00 PM",
    },
    {
      id: 16,
      status: "OK",
      time: "9:00 PM",
    },
  ];

  const [date] = useState(new Date());
  const [timestamp, setTimestamp] = useState(new Date());
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [dateAsString, setDateAsString] = useState(convert(new Date()));
  const showList = () => {
    show ? setShow(false) : setShow(true);
  };

  const handleBookPress = () => {
    const time = timeSlots.filter((timeSlot) => timeSlot.id === selectedSlot);
    const order = {
      date: dateAsString,
      stylist: stylist,
      status: "waiting",
      service: service,
      slot: time[0].time,
      slotId: time[0].id,
      selectedDate: selectedDate.toString(),
    };
    action(order);
  };

  const findSelectedDate = (id) => {
    let tmp = selectedDate;
    tmp.setHours(0, 0, 0, 0);
    const ref = db.collection("appointment").doc(id).collection("appointments");
    try {
      ref.where("date", "==", tmp).onSnapshot((snapshot) => {
        if (!snapshot.empty) {
          snapshot.docs.forEach((doc) => {
            getSelectedSlot(id, doc.id);
          });
        } else {
          ref
            .add({
              date: tmp,
            })
            .then((res) => {
              getSelectedSlot(id, res.id);
            });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getSelectedSlot = (appointmentId, dateId) => {
    let slotIds = [];

    db.collection("appointment")
      .doc(appointmentId)
      .collection("appointments")
      .doc(dateId)
      .collection("appointmentsOfDate")
      .onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc) => {
          slotIds.push(doc.data().slot);
        });
        if (slotIds.length > 0) {
          setTimeSlots(emptySlot);
          updateTimeSlot(slotIds);
        } else {
          console.log("seted as empty array due to no appointment available!");
          setTimeSlots(emptySlot);
        }
      });
  };

  const updateTimeSlot = (slotIds) => {
    let tmp = [...timeSlots];
    slotIds.forEach((id) => {
      let tmp2 = [];
      tmp.forEach((slot) => {
        if (slot.id !== id) {
          tmp2.push(slot);
        } else {
          tmp2.push({
            id: slot.id,
            status: "BUSY",
            time: slot.time,
          });
        }
      });
      tmp = tmp2;
    });
    setTimeSlots(tmp);
  };

  useEffect(() => {
    const ref = db.collection("appointment");
    try {
      ref.where("username", "==", stylist.username).onSnapshot((snapshot) => {
        if (!snapshot.empty) {
          snapshot.docs.forEach((doc) => {
            findSelectedDate(doc.id);
          });
        } else {
          ref.add({ username: stylist.username }).then((res) => {
            findSelectedDate(res.id);
          });
        }
      });
    } catch (error) {
      console.log("not exist username : " + stylist.username);
    }
  }, [selectedDate]);

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Thông báo",
      "Bạn cần chọn slot để tiếp tục",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ],
      { cancelable: false }
    );

  return (
    <TouchableWithoutFeedback onPress={() => setShow(false)}>
      <View style={styles.timeContainer}>
        <MyDatePicker
          changeDate={setDateAsString}
          date={date}
          action={showList}
          setTimestamp={setTimestamp}
          setSelectedDate={setSelectedDate}
          show={show}
        />
        <View style={styles.timeSlot}>
          <TimeSlot
            timeSlots={timeSlots}
            selectedSlot={selectedSlot}
            setSelectedSlot={setSelectedSlot}
          />
        </View>
        {selectedSlot ? (
          <TouchableWithoutFeedback onPress={() => handleBookPress()}>
            <View style={{ width: "100%", alignItems: "center" }}>
              <LinearGradient
                colors={[contactButtonColor, "#ff9eb5"]}
                style={styles.buttonBackground}
                start={[0, 0.5]}
                end={[1, 0.5]}
              >
                <Text style={styles.buttonText}>Tiếp theo</Text>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
        ) : (
          <TouchableWithoutFeedback onPress={()=> createTwoButtonAlert()}>
            <View style={{ width: "100%", alignItems: "center" }}>
              <LinearGradient
                colors={[contactButtonColor, "#ff9eb5"]}
                style={styles.buttonBackground}
                start={[0, 0.5]}
                end={[1, 0.5]}
              >
                <Text style={styles.buttonText}>Tiếp theo</Text>
              </LinearGradient>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  timeContainer: {
    flex: 1,
    borderRadius: 20,
    marginTop: 20,
  },
  timeSlot: {
    marginVertical: 20,
  },
  doneButton: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonDisableText: {
    paddingVertical: 20,
    width: "90%",
    backgroundColor: "#767676",
    color: "#D2D2D1",
    textAlign: "center",
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonBackground: {
    width: Dimensions.get("screen").width * 0.9,
    height: 60,
    borderRadius: 999,
    justifyContent: "center",
    alignItems: "center",
  },
});
