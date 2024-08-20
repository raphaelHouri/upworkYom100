import React from "react";
import { withNavigation } from "@react-navigation/compat";
import {
  TouchableOpacity,
  StyleSheet,
  Platform,
  Dimensions,
  Image,
} from "react-native";
import { Button, Block, NavBar, Text, theme } from "galio-framework";
import Images from "../constants/Images";
import Icon from "./Icon";
import argonTheme from "../constants/Theme";

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

class Header extends React.Component {
  handleLeftPress = () => {
    const { back, navigation } = this.props;
    return back ? navigation.goBack() : navigation.openDrawer();
  };
  renderRight = () => {
    const { white, title, navigation } = this.props;

    if (title === "Title") {
      return [
        <BellButton key="chat-title" navigation={navigation} isWhite={white} />,
        <BasketButton
          key="basket-title"
          navigation={navigation}
          isWhite={white}
        />,
      ];
    }

    switch (title) {
      case "Home":
        return [
          <BellButton
            key="chat-home"
            navigation={navigation}
            isWhite={white}
          />,
          <BasketButton
            key="basket-home"
            navigation={navigation}
            isWhite={white}
          />,
        ];
      case "Deals":
        return [
          <BellButton key="chat-categories" navigation={navigation} />,
          <BasketButton key="basket-categories" navigation={navigation} />,
        ];
      case "Categories":
        return [
          <BellButton
            key="chat-categories"
            navigation={navigation}
            isWhite={white}
          />,
          <BasketButton
            key="basket-categories"
            navigation={navigation}
            isWhite={white}
          />,
        ];
      case "Category":
        return [
          <BellButton
            key="chat-deals"
            navigation={navigation}
            isWhite={white}
          />,
          <BasketButton
            key="basket-deals"
            navigation={navigation}
            isWhite={white}
          />,
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
      case "Search":
        return [
          <BellButton
            key="chat-search"
            navigation={navigation}
            isWhite={white}
          />,
          <BasketButton
            key="basket-search"
            navigation={navigation}
            isWhite={white}
          />,
        ];
      case "Settings":
        return [
          <BellButton
            key="chat-search"
            navigation={navigation}
            isWhite={white}
          />,
          <BasketButton
            key="basket-search"
            navigation={navigation}
            isWhite={white}
          />,
        ];
      default:
        break;
    }
  };

  renderLeft = (back) => {
    if (back) {
      return (
        <Icon
          name="chevron-left"
          family="entypo"
          size={20}
          onPress={this.handleLeftPress}
          color={argonTheme.COLORS.WHITE}
          style={{ marginTop: 2, padding: 5 }}
        />
      );
    } else {
      return <Image style={styles.tinyLogo} source={Images.LogoW} />;
    }
  };
  renderRight = (back) => {
    if (!back) {
      return (
        <Icon
          name="menu"
          family="entypo"
          size={24}
          onPress={this.handleLeftPress}
          color={argonTheme.COLORS.WHITE}
          style={{ marginTop: 2, position: "absolute", right: -20 }}
        />
      );
    }
  };
  render() {
    const {
      back,
      title,
      white,
      transparent,
      bgColor,
      iconColor,
      titleColor,
      navigation,
      ...props
    } = this.props;

    const noShadow = ["Search", "Categories", "Deals", "Pro"].includes(title);
    const headerStyles = [
      !noShadow ? styles.shadow : null,
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
          right={this.renderRight(back)}
          rightStyle={{ alignItems: "center" }}
          left={this.renderLeft(back)}
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
  }
}

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
    paddingTop: iPhoneX ? theme.SIZES.BASE * 2 : theme.SIZES.BASE / 2,
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
  header: {
    backgroundColor: "#fcbe3c",
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.ICON,
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: argonTheme.COLORS.BORDER,
  },
  options: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.35,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: "400",
    color: argonTheme.COLORS.HEADER,
  },
  tinyLogo: {
    height: 35,
    resizeMode: "contain",
    position: "absolute",
    left: -50,
  },
});

export default withNavigation(Header);
