import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  View
} from "react-native";
import { convert } from "../../../global/DateConverter";
import {
  calendarIcon2,
  goldIcon,
  silverIcon
} from "../../../global/GlobalIcon";
import { textColor } from "../../../global/GlobalValue";

export default function MyDatePicker({ changeDate, date, action, show, setSelectedDate }) {
  const [suggests, setSuggests] = useState([
    { dateSuggest: "", text: "", key: 0, timestamp: null },
  ]);

  const [selected, setSelected] = useState(0);
  useEffect(() => {
    var result = new Date(date);
    result.setHours(0,0,0,0);
    var result1 = new Date(date);
    var result2 = new Date(date);
    var result3 = new Date(date);
    var result4 = new Date(date);
    var result5 = new Date(date);
    result1.setDate(result1.getDate() + 1);
    result1.setHours(0,0,0,0);
    result2.setDate(result2.getDate() + 2);
    result2.setHours(0,0,0,0);
    result3.setDate(result3.getDate() + 3);
    result3.setHours(0,0,0,0);
    result4.setDate(result4.getDate() + 4);
    result4.setHours(0,0,0,0);
    result5.setDate(result5.getDate() + 5);
    result5.setHours(0,0,0,0);
    const listSuggest = [
      { dateSuggest: convert(result), text: "Hôm nay, ", key: 1 , timestamp: result },
      { dateSuggest: convert(result1), text: "Ngày mai, ", key: 2, timestamp: result1 },
      { dateSuggest: convert(result2), text: "Ngày kia, ", key: 3, timestamp: result2 },
      { dateSuggest: convert(result3), text: "", key: 4, timestamp: result3 },
      { dateSuggest: convert(result4), text: "", key: 5, timestamp: result4 },
      { dateSuggest: convert(result5), text: "", key: 6, timestamp: result5 },
    ];
    setSuggests(listSuggest);
  }, []);

  const onCalenderPress = (index) => {
    setSelected(index);
    changeDate(suggests[index].dateSuggest.text);
    setSelectedDate(suggests[index].timestamp);
    action();
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => action()}>
        <View style={styles.myDatePickerContainer}>
          <View style={styles.leftContain}>
            <Text style={styles.date}>
              {suggests[selected].text}
              {suggests[selected].dateSuggest.text}
            </Text>
            {calendarIcon2}
          </View>
        </View>
      </TouchableWithoutFeedback>

      {show && (
        <View style={styles.listSuggest}>
          {suggests.map((suggest) => (
            <TouchableNativeFeedback
              onPress={() => onCalenderPress(suggest.key - 1)}
              key={suggest.key}
            >
              <View style={styles.suggestItem}>
                <View style={{ flexDirection: "row", flex: 0.6 }}>
                  <View style={styles.iconContainer}>
                    {suggest.key === 5 ? silverIcon : <></>}
                    {suggest.key === 6 ? goldIcon : <></>}
                  </View>
                  <Text>
                    {suggest.text}
                    {suggest.dateSuggest.text}
                  </Text>
                </View>
              </View>
            </TouchableNativeFeedback>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  myDatePickerContainer: {
    flexDirection: "row",
    width: "90%",
    marginLeft: "5%",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 999,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  leftContain: {
    flexDirection: "row",
    justifyContent:"space-between",
    alignItems:"center",
    flex: 1,
    paddingHorizontal: 10
  },
  date: {
    marginLeft: 10,
    fontSize: 20,
    color: textColor,
  },
  weekend: {
    fontSize: 15,
    color: "white",
    backgroundColor: "#ff6e61",
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderRadius: 5,
    textAlign: "center",
  },
  normalDate: {
    fontSize: 15,
    color: "white",
    backgroundColor: "#00a90f",
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 5,
    textAlign: "center",
  },
  listSuggest: {
    position: "absolute",
    top: 50,
    zIndex: 5,
    width: "90%",
    marginLeft: "5%",
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    backgroundColor: "#fff",
    shadowColor: "#333",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    overflow: "hidden",
  },
  suggestItem: {
    paddingVertical: 10,
    borderWidth: 0.2,
    borderColor: "#c4c4b6",
    flexDirection: "row",
  },
  iconContainer: {
    paddingLeft: 10,
    paddingBottom: 10,
    width: 50,
    height: 10,
  },
});
