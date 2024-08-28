import React, { useState, useEffect } from "react";
import * as Font from "expo-font";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { Icon } from "galio-framework";

import argonConfig from "../assets/config/argon.json";
const ArgonExtra = require("../assets/font/argon.ttf");
const IconArgonExtra = createIconSetFromIcoMoon(argonConfig, "ArgonExtra");

const IconExtra = ({ name, family, ...rest }) => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({ ArgonExtra });
      setFontLoaded(true);
    };

    loadFonts();
  }, []);

  if (name && family && fontLoaded) {
    if (family === "ArgonExtra") {
      return <IconArgonExtra name={name} family={family} {...rest} />;
    }
    return <Icon name={name} family={family} {...rest} />;
  }

  return null;
};

export default IconExtra;
