import React from "react";
import { withNavigation } from "@react-navigation/compat";
import {
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
  Image,
  View,
} from "react-native";
import { Block, NavBar, Text, theme } from "galio-framework";
import Icon from "./Icon";
import argonTheme from "../constants/Theme";
import Images from "../constants/Images";

const { height, width } = Dimensions.get("window");
const iPhoneX = () =>
  Platform.OS === "ios" &&
  (height === 812 || width === 812 || height === 896 || width === 896);

const BellButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={() => navigation.navigate("Pro")}
  >
    <Icon
      family="ArgonExtra"
      size={16}
      name="bell"
      color={argonTheme.COLORS[isWhite ? "WHITE" : "ICON"]}
    />
    <Block middle style={styles.notify} />
  </TouchableOpacity>
);

const BasketButton = ({ isWhite, style, navigation }) => (
  <TouchableOpacity
    style={[styles.button, style]}
    onPress={() => navigation.navigate("Pro")}
  >
    <Icon
      family="ArgonExtra"
      size={16}
      name="basket"
      color={argonTheme.COLORS[isWhite ? "WHITE" : "ICON"]}
    />
  </TouchableOpacity>
);

const Header = ({
  back,
  title,
  white,
  transparent,
  bgColor,
  iconColor,
  titleColor,
  navigation,
  ...props
}) => {
  const handleLeftPress = () => {
    return back ? navigation.goBack() : navigation.openDrawer();
  };

  const renderRight = () => {
    const commonProps = { navigation, isWhite: white };

    // Show menu icon only if title is empty
    if (title == "Elements" || title == "Home" || title == "HomeTest") {
      return [
        <View style={styles.container}>
          <TouchableOpacity
            key="home-menu"
            style={styles.menuIcon}
            onPress={handleLeftPress}
          >
            <Text style={styles.menuText}>☰</Text>
          </TouchableOpacity>
        </View>,
      ];
    }

    // For other screens, adjust as necessary
    switch (!title) {
      case "Deals":
      case "Categories":
      case "Category":
      case "Search":
      case "Settings":
        return [
          <BellButton key={`${title}-bell`} {...commonProps} />,
          <BasketButton key={`${title}-basket`} {...commonProps} />,
        ];
      case "Product":
        return [
          <SearchButton
            key="search-product"
            navigation={navigation}
            isWhite={white}
          />,
          <BasketButton
            key="basket-product"
            navigation={navigation}
            isWhite={white}
          />,
        ];
      case "Title":
        return [
          <BellButton key="bell-title" {...commonProps} />,
          <BasketButton key="basket-title" {...commonProps} />,
        ];
      default:
        return null;
    }
  };

  const renderLeft = () => {
    if (back) {
      return (
        <Icon
          name="chevron-left"
          family="entypo"
          size={20}
          onPress={handleLeftPress}
          color={argonTheme.COLORS.WHITE}
          style={{ marginTop: 2, padding: 5 }}
        />
      );
    }
    return <Image style={styles.tinyLogo} source={Images.LogoW} />;
  };

  const headerStyles = [
    !["Search", "Categories", "Deals", "Pro"].includes(title) && styles.shadow,
    { backgroundColor: "#fcbe3c" },
  ];

  const navbarStyles = [
    styles.navbar,
    { backgroundColor: "#fcbe3c", marginTop: 30 },
  ];

  return (
    <Block style={headerStyles}>
      <NavBar
        back={false}
        style={navbarStyles}
        transparent={transparent}
        right={renderRight()}
        rightStyle={{ alignItems: "center" }}
        left={renderLeft()}
        leftStyle={{ paddingVertical: 12, flex: 0.2 }}
        titleStyle={[
          styles.title,
          { color: argonTheme.COLORS[white ? "WHITE" : "HEADER"] },
          titleColor && { color: titleColor },
        ]}
        {...props}
      />
    </Block>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 12,
    position: "relative",
  },
  title: {
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
  },
  navbar: {
    paddingVertical: 0,
    paddingBottom: theme.SIZES.BASE * 1.5,
    paddingTop: iPhoneX() ? theme.SIZES.BASE * 2 : theme.SIZES.BASE / 2,
    zIndex: 5,
  },
  shadow: {
    backgroundColor: "#fcbe3c",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.2,
    elevation: 3,
  },
  notify: {
    backgroundColor: argonTheme.COLORS.LABEL,
    borderRadius: 4,
    height: theme.SIZES.BASE / 2,
    width: theme.SIZES.BASE / 2,
    position: "absolute",
    top: 9,
    right: 12,
  },
  tinyLogo: {
    height: 35,
    resizeMode: "contain",
    position: "absolute",
    left: -50,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    right: 0,
    bottom: 10,
  },
  menuIcon: {
    marginHorizontal: 10,
  },
  menuText: {
    fontSize: Platform.OS === "ios" ? 30 : 20,
    color: "#fff",
  },
});

export default withNavigation(Header);
