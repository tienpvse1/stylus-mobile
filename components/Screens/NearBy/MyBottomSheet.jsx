import { Dimensions, StyleSheet, View } from "react-native";
import BottomSheet from "reanimated-bottom-sheet";
import BottomSheetContent from "./BottomSheetContent";
import React from "react";
export default function MyBottomSheet({
  refer,
  action,
  swipeHandler,
  stylists,
  navigation,
}) {
  const getContentView = () => {
    return <BottomSheetContent stylists={stylists} navigation={navigation} />;
  };
  return (
    <>
      <View
        style={{
          flex: 1,
          backgroundColor: "papayawhip",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></View>
      <BottomSheet
        ref={refer}
        snapPoints={[Dimensions.get("window").height * 0.9, 0]}
        borderRadius={10}
        onCloseEnd={swipeHandler}
        enabledGestureInteraction={true}
        enabledContentTapInteraction={false}
        initialSnap={1}
        renderContent={getContentView}
      />
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 10,
    zIndex: 12,
  },
});
