import * as React from "react";
import Svg, {
  Path,
} from "react-native-svg";
import { StyleSheet } from 'react-native'
import { contactButtonColor, hexagonSize } from "../../../global/GlobalValue";

export default function AvatarBorder() {
    return (
        <Svg
        width={hexagonSize}
        height={hexagonSize}
        stroke={contactButtonColor}
        strokeWidth={2}
        viewBox="0 0 86.60254037844386 100"
      >
        <Path
          fill="transparent"
          d="M34.64101615137754 4.999999999999999Q43.30127018922193 0 51.96152422706632 4.999999999999999L77.94228634059948 20Q86.60254037844386 25 86.60254037844386 35L86.60254037844386 65Q86.60254037844386 75 77.94228634059948 80L51.96152422706632 95Q43.30127018922193 100 34.64101615137754 95L8.660254037844387 80Q0 75 0 65L0 35Q0 25 8.660254037844387 20Z"
        />
      </Svg>
    )
}

const styles = StyleSheet.create({})

