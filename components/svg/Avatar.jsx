import React from "react";
import Svg, { Path, Pattern, Image, Defs } from "react-native-svg";
import { StyleSheet } from "react-native";
import { base64Prefix, hexagonImageSize } from "../../global/GlobalValue";

export default function Avatar({ image }) {
  const placeholderImage = require("../../image/background/avatar-placeholder.png");
  return (
    <Svg
      width={140}
      height={hexagonImageSize}
      viewBox="0 0 86.60254037844386 100"
    >
      <Defs>
        <Pattern
          id="img"
          height={130}
          width={130}
          patternUnits="userSpaceOnUse"
        >
          {image ? (
            <Image href={base64Prefix + image} height={100} width={150} x={-20} y={0} />
          ) : (
            <Image href={placeholderImage} height={100} width={150} x={-25} y={0} />
          )}
        </Pattern>
      </Defs>
      <Path
        fill="url(#img)"
        d="M5.000000000000001 51.96152422706632Q0 43.30127018922193 5.000000000000001 34.64101615137754L20 8.660254037844386Q25 0 35 0L65 0Q75 0 80 8.660254037844386L95 34.64101615137754Q100 43.30127018922193 95 51.96152422706632L80 77.94228634059948Q75 86.60254037844386 65 86.60254037844386L35 86.60254037844386Q25 86.60254037844386 20 77.94228634059948Z"
      />
    </Svg>
  );
}

const styles = StyleSheet.create({});
