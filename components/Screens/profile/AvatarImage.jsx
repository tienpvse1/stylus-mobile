import React from "react";
import Svg, { Path, Pattern, Image, Defs } from "react-native-svg";
import { StyleSheet } from "react-native";
import { hexagonImageSize } from "../../../global/GlobalValue";

export default function AvatarImage({ image }) {
  return (
    <Svg width={hexagonImageSize} height={hexagonImageSize} viewBox="0 0 86.60254037844386 100">
      <Defs>
        <Pattern
          id="img"
          height={130}
          width={130}
          patternUnits="userSpaceOnUse"
        >
          <Image href={image} height={100} width={150} x={-20} y={0} />
        </Pattern>
      </Defs>
      <Path
        fill="url(#img)"
        d="M5.000000000000001 51.96152422706632Q0 43.30127018922193 5.000000000000001 34.64101615137754L20 8.660254037844386Q25 0 35 0L65 0Q75 0 80 8.660254037844386L95 34.64101615137754Q100 43.30127018922193 95 51.96152422706632L80 77.94228634059948Q75 86.60254037844386 65 86.60254037844386L35 86.60254037844386Q25 86.60254037844386 20 77.94228634059948Z"
      />
    </Svg>
  );
}

//<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100" height="87" viewbox="0 0 100 86.60254037844386" style="filter: drop-shadow(rgba(255, 255, 255, 0.5) 0px 0px 10px);"><path fill="#fff" d="M5.000000000000001 51.96152422706632Q0 43.30127018922193 5.000000000000001 34.64101615137754L20 8.660254037844386Q25 0 35 0L65 0Q75 0 80 8.660254037844386L95 34.64101615137754Q100 43.30127018922193 95 51.96152422706632L80 77.94228634059948Q75 86.60254037844386 65 86.60254037844386L35 86.60254037844386Q25 86.60254037844386 20 77.94228634059948Z"></path></svg>

const styles = StyleSheet.create({});
