import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import { contactButtonColor } from "../../../global/GlobalValue";

export default function TimeSlot({ timeSlots, selectedSlot, setSelectedSlot }) {
  const [slotLines, setSlotLines] = useState([{ line: [] }]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let tmp1 = [];
    let tmp2 = [];
    let tmp3 = [];
    let tmp4 = [];
    for (let i = 0; i < 4; i++) {
      tmp1.push(timeSlots[i]);
    }
    for (let i = 4; i < 8; i++) {
      tmp2.push(timeSlots[i]);
    }
    for (let i = 8; i < 12; i++) {
      tmp3.push(timeSlots[i]);
    }
    for (let i = 12; i < 16; i++) {
      tmp4.push(timeSlots[i]);
    }
    let result = [
      { line: tmp1 },
      { line: tmp2 },
      { line: tmp3 },
      { line: tmp4 },
    ];
    setSlotLines(result);
    setLoading(false);
  }, [timeSlots]);

  return (
    <View>
      {!loading && (
        <View style={styles.slotTable}>
          {slotLines.map((slotLine, index) => (
            <View style={styles.line} key={index}>
              {slotLine.line.map((item, innerIndex) => (
                <View key={innerIndex}>
                  <>
                    {item.status !== "BUSY" ? (
                      <>
                        {selectedSlot === item.id ? (
                          <Text style={styles.selectedText}>{item.time}</Text>
                        ) : (
                          <TouchableWithoutFeedback
                            onPress={() => setSelectedSlot(item.id)}
                          >
                            <Text style={styles.text}>{item.time}</Text>
                          </TouchableWithoutFeedback>
                        )}
                      </>
                    ) : (
                      <Text style={styles.disabledText}>{item.time}</Text>
                    )}
                  </>
                </View>
              ))}
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    flexDirection: "row",
  },
  text: {
    borderWidth: 0.8,
    borderColor: "rgba(0,0,0,0.7)",
    padding: 7,
    width: 80,
    fontSize: 14,
    marginLeft: 12,
    marginTop: 10,
    textAlign: "center",
  },
  selectedText: {
    padding: 7.4,
    width: 80,
    fontSize: 14,
    marginLeft: 12,
    marginTop: 10,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    backgroundColor: contactButtonColor,
  },
  disabledText: {
    padding: 7.4,
    width: 80,
    fontSize: 14,
    marginLeft: 12,
    marginTop: 10,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#cccccc",
  },
  slotTable: {
    justifyContent: "center",
    alignItems: "center",
  },
});
