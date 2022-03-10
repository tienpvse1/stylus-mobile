import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { mainBackgroundColor } from "../../global/GlobalValue";
import ContactBar from "./StylistProfile/ContactBar";
import Header from "./StylistProfile/Header";
import HeaderInfo from "./StylistProfile/HeaderInfo";
import Navigation from "./StylistProfile/Navigation";
import SearchBody from "./StylistProfile/SearchBody";
import SearchTopInfo from "./StylistProfile/SearchTopInfo";
import Styles from "./StylistProfile/Styles";
import TopInfo from "./StylistProfile/TopInfo";

export default function StylistProfile({ navigation, route }) {
  const [show, setShow] = useState(false);
  const [search, setSearch] = useState(false);
  const [showSearchResult, setShowSetResult] = useState(false);
  const [searchKey , setSearchKey] = useState('');
  const stylist = route.params.stylist;
  const handleScroll = (event) => {
    if (event.nativeEvent.contentOffset.y > 140) {
      setShow(true);
    } else setShow(false);
  };

  const onCancelClick = () => {
    setSearch(false);
  };
  const onSearchCLick = () => {
    setSearch(true);
  };
  const displaySearchResult = () => {
    setShowSetResult(true);
  };
  const hideSeacrhResult = () => {
    setShowSetResult(false);
  };
  
  return (
    <View>
      {show && search ? (
          <SearchTopInfo
            hideSearchBox={onCancelClick}
            show={displaySearchResult}
            hide={hideSeacrhResult}
            location={"Điện Biên Phủ"}
            stylistName={stylist.name}
            navigation={navigation}
            action={onCancelClick}
            onInput={setSearchKey}
            searchKey={searchKey}
          />
        ) : (
          <></>
        )}
      {!showSearchResult?   
      <View>
        {show && !search ? (
          <TopInfo
            location={"Điện Biên Phủ"}
            stylistName={stylist.name}
            navigation={navigation}
            action={onSearchCLick}
          />
        ) : (
          <></>
        )}
        
        <ScrollView
          onScroll={handleScroll}
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}
        >
          <View style={styles.stylistProfile}>
            <Header navigation={navigation} />
            <HeaderInfo stylist={route.params.stylist} />
            <ContactBar username={stylist.username} />
            <Styles navigation={navigation} stylist={stylist} />

            <Navigation />
          </View>
        </ScrollView>
      </View>
      : <SearchBody stylist={stylist} navigation={navigation} searchKey={searchKey} /> }
    </View>
  );
}

const styles = StyleSheet.create({
  stylistProfile: {
    backgroundColor: mainBackgroundColor,
  },
  scrollView: {},
});
