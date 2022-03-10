import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Datetime from "react-native-calendar-strip";
import Loading from "./Loading";
import {
  contactButtonColor,
  darkBackground,
  goldColor,
  mainBackgroundColor,
  mediumTextColor,
  textColor,
} from "../../../global/GlobalValue";
export default function MyCalendar({setDayPicked}) {
  const [initSelectedDate, setInitSelectedDate] = useState([]);
  const [loading, setLoading] = useState(true);
  const [maxDate, setMaxDate] = useState("");
  const [valid, setValid] = useState(false);
  const getData = async () => {
    // if (ordersAsString === null) {
    setInitSelectedDate([
      {
        date: new Date().toISOString().slice(0, 10),
        lines: [
          {
            color: contactButtonColor,
          },
        ],
      },
    ]);
    setLoading(false);
  };
  useEffect(() => {
    let maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 6);
    setMaxDate(maxDate.toISOString().slice(0, 10));
    getData();
  }, []);

  return (
    <View style={styles.calendarCotainer}>
      {loading ? (
        <Loading />
      ) : (
        <Datetime
          scrollable
          style={{ height: 120, paddingTop: 20, paddingBottom: 10 }}
          calendarColor={mainBackgroundColor}
          calendarHeaderStyle={{ color: contactButtonColor }}
          dateNumberStyle={{ color: mediumTextColor }}
          dateNameStyle={{ color: mediumTextColor }}
          maxDate={maxDate}
          minDate={initSelectedDate[0].date}
          highlightDateNameStyle={{ color: contactButtonColor }}
          highlightDateNumberStyle={{ color: contactButtonColor }}
          markedDates={initSelectedDate}
          selectedDate={initSelectedDate[0].date}
          iconContainer={{ flex: 0.1 }}
          onDateSelected={(date) => setDayPicked(new Date(date))}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  calendarCotainer: {
    marginBottom: 15,
    elevation: 6,
  },
});
