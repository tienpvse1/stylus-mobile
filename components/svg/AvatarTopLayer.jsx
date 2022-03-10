import React from "react";
import { StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";
import { hexagonImageSize } from "../../global/GlobalValue";

export default function AvatarTopLayer() {
  return (
    <Svg width={140} height={hexagonImageSize} viewBox="0 0 86.60254037844386 100">
      
      <Path
        fill="rgba(238,104,93, 0.5)"
        d="M5.000000000000001 51.96152422706632Q0 43.30127018922193 5.000000000000001 34.64101615137754L20 8.660254037844386Q25 0 35 0L65 0Q75 0 80 8.660254037844386L95 34.64101615137754Q100 43.30127018922193 95 51.96152422706632L80 77.94228634059948Q75 86.60254037844386 65 86.60254037844386L35 86.60254037844386Q25 86.60254037844386 20 77.94228634059948Z"
      />
    </Svg>
  );
}


const styles = StyleSheet.create({});

