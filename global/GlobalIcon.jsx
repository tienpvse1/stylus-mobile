import {
  AntDesign,
  Octicons,
  Entypo, EvilIcons, Feather, FontAwesome, FontAwesome5, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons, SimpleLineIcons
} from "@expo/vector-icons";
import React from "react";
import {
  bottomTabsIconSize,
  contactButtonColor, goldColor,
  lighterWhite,
  mainBackgroundColor,
  mediumTextColor,
  navHamburgerSize, profileIconSize, secondaryTextColor,
  strongPink,
  textColor
} from "./GlobalValue";

export const locationIcon = (
  <EvilIcons name="location" size={24} color={secondaryTextColor} />
);
export const homeIcon = (
  <Ionicons
    name="home-outline"
    size={bottomTabsIconSize}
    color={secondaryTextColor}
  />
);
export const messageIcon = (
  <AntDesign
    name="message1"
    size={bottomTabsIconSize}
    color={secondaryTextColor}
  />
);
export const calendarIcon = (
  <FontAwesome5
    name="calendar-check"
    size={bottomTabsIconSize}
    color={secondaryTextColor}
  />
);
export const profileIcon = (
  <FontAwesome5
    name="user"
    size={bottomTabsIconSize}
    color={secondaryTextColor}
  />
);
export const focusLocationIcon = (
  <EvilIcons
    name="location"
    size={bottomTabsIconSize}
    color={contactButtonColor}
  />
);
export const focusHomeIcon = (
  <Ionicons
    name="home-outline"
    size={bottomTabsIconSize}
    color={contactButtonColor}
  />
);
export const focusMessageIcon = (
  <AntDesign
    name="message1"
    size={bottomTabsIconSize}
    color={contactButtonColor}
  />
);

export const focusCalendarIcon = (
  <FontAwesome5
    name="calendar-check"
    size={bottomTabsIconSize}
    color={contactButtonColor}
  />
);
export const focusProfileIcon = (
  <FontAwesome5 name="user" size={bottomTabsIconSize} color={contactButtonColor} />
);

export const navIcon = (
  <EvilIcons name="navicon" size={navHamburgerSize} color="#fff" />
);

export const filterIcon = (
  <FontAwesome name="filter" size={navHamburgerSize} color="white" />
);
export const filterIcon2 = (
  <FontAwesome name="filter" size={navHamburgerSize} color={goldColor} />
);

export const notificationIcon = (
  <Ionicons
    name="notifications-outline"
    size={navHamburgerSize}
    color="white"
  />
);

export const cameraIcon2 = <FontAwesome name="camera" size={24} color={contactButtonColor} />

export const starIcon = <AntDesign name="star" size={20} color="#FFD700" />;
export const starIcon4 = <AntDesign name="star" size={16} color="#FFD700" />;
export const starIcon2 = <AntDesign name="star" size={40} color="#FFD700" />;
export const starIcon3 = <AntDesign name="star" size={27} color="#FFD700" />;

export const emptyStarIcon = (
  <AntDesign name="staro" size={24} color="#FFD700" />
);
export const emptyStarIcon2 = (
    <AntDesign name="staro" size={40} color="#FFD700" />
);
export const emptyStarIcon3 = (
    <AntDesign name="staro" size={27} color="#FFD700" />
);

export const clockIcon = (
  <AntDesign name="clockcircleo" size={18} color="black" />
);

export const roadIcon = <FontAwesome5 name="road" size={18} color="black" />;

export const dotIcon = <Entypo name="dot-single" size={15} color="#A5A4A3" />;

export const goBackIcon = (
  <Ionicons name="arrow-back" size={40} color="white" />
);

export const followIcon = (
  <SimpleLineIcons name="user-follow" size={30} color="white" />
);

export const goBackIcon2 = (
  <Ionicons name="arrow-back" size={40} color={mainBackgroundColor} />
);
export const goBackIcon3 = (
  <Ionicons name="arrow-back" size={40} color={textColor} />
);

export const followIcon2 = (
  <SimpleLineIcons name="user-follow" size={30} color="black" />
);

export const videoIcon = (
  <Feather name="video" size={profileIconSize} color={contactButtonColor} />
);
export const videoIcon2 = (
  <Feather name="video" size={profileIconSize} color={textColor} />
);

export const callIcon = (
  <Octicons name="mail" size={profileIconSize} color={contactButtonColor} />
);

export const profileLocationIcon = (
  <Entypo name="location" size={profileIconSize} color={contactButtonColor} />
);

export const shareIcon = (
  <FontAwesome
    name="share-square-o"
    size={profileIconSize}
    color={contactButtonColor}
  />
);

export const searchIcon = <EvilIcons name="search" size={24} color="black" />;
export const searchIcon2 = <EvilIcons name="search" size={32} color={mediumTextColor} />;

export const dropDownIcon = <AntDesign name="down" size={24} color="black" />;

export const calendarIcon2 = (
  <AntDesign name="calendar" size={24} color={textColor} />
);

export const silverIcon = (
  <MaterialCommunityIcons name="crown" size={24} color="#C0C0C0" />
);

export const goldIcon = <FontAwesome5 name="crown" size={24} color="#FFD700" />;

export const cogIcon = <AntDesign name="setting" size={32} color={textColor} />;

export const notificationIcon2 = (
  <Ionicons name="md-notifications-outline" size={32} color={textColor} />
);

export const appointmentIcon = (
  <FontAwesome5 name="calendar-check" size={32} color={textColor} />
);

export const myVoteIcon = (
  <AntDesign name="staro" size={32} color={textColor} />
);

export const heartIcon = (
  <AntDesign name="hearto" size={32} color={textColor} />
);

export const walletIcon = (
  <Ionicons name="ios-wallet-outline" size={32} color={textColor} />
);

export const paymentIcon = (
  <MaterialIcons name="payment" size={32} color={textColor} />
);

export const keyIcon = (
  <Ionicons name="ios-key-outline" size={32} color={textColor} />
);

export const inviteIcon = (
  <AntDesign name="addusergroup" size={32} color={textColor} />
);

export const infoIcon = (
  <AntDesign name="infocirlceo" size={32} color={textColor} />
);

export const logoutIcon = (
  <SimpleLineIcons name="logout" size={32} color={textColor} />
);

export const rightIcon = (
  <AntDesign name="right" size={24} color={secondaryTextColor} />
);

export const goldBackIcon = (
  <Ionicons name="arrow-back" size={40} color={textColor} />
);

export const cameraIcon = (
  <MaterialIcons name="camera" size={40} color="white" />
);

export const caretDownIcon = (
  <AntDesign name="caretdown" size={24} color={lighterWhite} />
);

export const checkIcon = <AntDesign name="check" size={32} color={goldColor} />;

export const scissorIcon = (
  <Fontisto name="scissors" size={18} color={mediumTextColor} />
);

export const stylistIcon = (
  <AntDesign name="user" size={18} color={mediumTextColor} />
);

export const plusIcon = <Feather name="plus" size={24} color="white" />;

export const creditIcon = (
  <AntDesign name="creditcard" size={24} color="white" />
);

export const paymentCheckedIcon = (
  <Feather name="check-circle" size={32} color={strongPink} />
);

export const nextIcon = <AntDesign name="right" size={24} color="white" />;
export const nextIconDisable = (
  <AntDesign name="right" size={24} color={secondaryTextColor} />
);

export const myLocationIcon = (
  <FontAwesome name="map-marker" size={90} color="#ff392e" />
);

export const myLocationIcon2 = (
  <FontAwesome name="map-marker" size={30} color={secondaryTextColor} />
);
export const myLocationIcon3 = (
  <FontAwesome name="map-marker" size={17} color={secondaryTextColor} />
);

export const serviceLocation = (
  <Entypo name="location-pin" size={90} color={goldColor} />
);

export const minusIcon = (
  <AntDesign name="minus" size={50} color={contactButtonColor} />
);

export const bottomSheetIcon = (
  <FontAwesome name="map-marker" size={25} color={secondaryTextColor} />
);

export const userIcon = <AntDesign name="user" size={20} color={textColor} />

export const tripleDotIcon = <Entypo name="dots-three-vertical" size={24} color={textColor} />

export const activedIcon = <Entypo name="dot-single" size={50} color="#77dd77" />

export const imagePickerIcon = <Feather name="image" size={32} color={textColor} />

export const flirtIcon = <Entypo name="emoji-flirt" size={32} color={textColor} />;

export const sendIcon = <Ionicons name="send" size={32} color={contactButtonColor} />
export const disableSendIcon = <Ionicons name="send" size={32} color="rgba(0,0,0,0.6)" />

export const googleIcon = <AntDesign name="google" size={24} color="white" />;

export const facebookIcom = <FontAwesome name="facebook-f" size={24} color="white" />

export const eyeIcon = <Feather name="eye" size={24} color="black" />

export const eyeOffIcon = <Feather name="eye-off" size={24} color="black" />;

export const cartIcon = <AntDesign name="shoppingcart" size={30} color="white" />;

export const threeDotsHorizontal = <Entypo name="dots-three-horizontal" size={30} color="white" />