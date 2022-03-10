import React from "react";
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import {
  contactButtonColor,
  mainBackgroundColor,
  mediumTextColor,
  paymentImageSize,
  textColor,
} from "../../../global/GlobalValue";
import { RadioButton } from "react-native-paper";

export default function PaymentMethod({ method, selected, setSelected }) {
  return (
    <View>
      {method.map((item) => (
        <TouchableWithoutFeedback key={item.key} onPress={() => setSelected(item.key)}>
          {selected !== item.key ? (
            <View style={styles.method}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.textContainer}>
                <View>
                  <Text style={styles.paymentName}>{item.text}</Text>
                  <View style={styles.descriptionContainer}>
                    {item.description && (
                      <Text style={styles.description}>{item.description}</Text>
                    )}
                  </View>
                </View>
                {/* {selected === item.key ? paymentCheckedIcon : <></>} */}
                <RadioButton
                  value="second"
                  status={"unchecked"}
                  onPress={() => setChecked("second")}
                  color="#fd6d5d"
                />
              </View>
            </View>
          ) : (
            <View style={styles.selectedMethod}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.textContainer}>
                <View>
                  <Text style={styles.paymentName}>{item.text}</Text>
                  <View style={styles.descriptionContainer}>
                    {item.description && (
                      <Text style={styles.description}>{item.description}</Text>
                    )}
                  </View>
                </View>
                {/* {selected === item.key ? paymentCheckedIcon : <></>} */}
                <RadioButton
                  value="second"
                  status={"checked"}
                  onPress={() => setChecked("second")}
                  color="#fd6d5d"
                />
              </View>
            </View>
          )}
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  method: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: mainBackgroundColor,
    marginBottom: 12,
    paddingHorizontal: 12,
    marginHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    elevation: 10,
  },
  image: {
    height: paymentImageSize,
    // width: 90,
    width: paymentImageSize,
  },
  textContainer: {
    marginLeft: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
  },
  paymentName: {
    color: textColor,
    fontSize: 20,
    fontWeight: "bold",
  },
  descriptionContainer: {
    width: "90%",
  },
  description: {
    color: mediumTextColor,
    marginLeft: 10,
  },
  selectedMethod: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: mainBackgroundColor,
    marginBottom: 12,
    elevation: 8,
    paddingHorizontal: 12,
    marginHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    borderColor: contactButtonColor,
    borderWidth: 2,
  },
});
