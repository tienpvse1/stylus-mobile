import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dimensions } from "react-native";

export const bottomTabsIconSize = 30
export const navHamburgerSize = 24

export const textColor = "#323232";

export const profileIconSize = 32

export const appMainBackground = "#3B3A39"

export const imageSize = 100;

export const freeColor = "#90ee90";

export const busyColor = "#dede04";

export const secondaryTextColor = "#C9C8C7";

export const avatarWidth = 150;

export const avatarHeight = 150 + (150 / 12);

export const goldColor = "#FFD700";

export const hexagonSize = 140;

export const hexagonImageSize = 125;

export const profileBodyColor = "#222328";

export const profileItemColor = "#DAA520";

export const darkerBackground = "#222328";

export const darkBackground = "#323345";

export const lighterWhite = "#dadad2"

export const fadeTextColor = "#6B6C70";

export const paymentImageSize = 40;

export const orangeButtonColor = "#E6B6B8";

export const strongPink = "#ff2865"

export const orangBackground = "#f26a5a";

export const mainBackgroundColor = "#f9f9f9";

export const secondaryBackgroundColor = "#f9f9f9"

export const contactButtonColor = "#ef1d6a";

export const mediumTextColor = "#707070"

export const base64Prefix = "data:image/jpeg;base64,";

export const screenWidth = Dimensions.get("screen").width;
export const screenHeight = Dimensions.get("screen").height;


export const getMyDataProfile = () =>{
   return AsyncStorage.getItem("user");
}