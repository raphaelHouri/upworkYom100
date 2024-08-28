import React from "react";
import { StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { Button } from "galio-framework";
import argonTheme from "../constants/Theme";

const ArButton = ({
  small,
  shadowless,
  children,
  color,
  fontColor,
  style,
  ...props
}) => {
  const colorStyle = color && argonTheme.COLORS[color.toUpperCase()];

  const buttonStyles = [
    small && styles.smallButton,
    color && { backgroundColor: colorStyle },
    !shadowless && styles.shadow,
    { ...style },
  ];

  return (
    <Button
      style={buttonStyles}
      shadowless
      textStyle={{
        fontSize: 12,
        fontWeight: "400",
        color: fontColor || "#000",
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

ArButton.propTypes = {
  small: PropTypes.bool,
  shadowless: PropTypes.bool,
  color: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.oneOf([
      "default",
      "primary",
      "secondary",
      "info",
      "error",
      "success",
      "warning",
    ]),
  ]),
  fontColor: PropTypes.string,
  style: PropTypes.object,
};

const styles = StyleSheet.create({
  smallButton: {
    width: 75,
    height: 28,
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
});

export default ArButton;
