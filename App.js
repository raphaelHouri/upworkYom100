import React, { useState } from "react";
import { Image, SafeAreaView } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts } from "@use-expo/font";
import { Asset } from "expo-asset";
import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";
// import * as WebBrowser from 'expo-web-browser';
// import { WebView } from "react-native-webview";
// Before rendering any navigation stack
import { enableScreens } from "react-native-screens";
enableScreens();

import Screens from "./navigation/Screens";
import { Images, articles, argonTheme } from "./constants";

// cache app images
const assetImages = [Images.Onboarding];

// cache product images
articles.map((article) => assetImages.push(article.image));

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default (props) => {
  const [isLoadingComplete, setLoading] = useState(false);
  const [load, setLoad] = useState(false);
  const [answer, setAnswer] = useState(false);
  const [result, setResult] = useState(null);
  let [fontsLoaded] = useFonts({
    ArgonExtra: require("./assets/font/argon.ttf"),
  });

  function _loadResourcesAsync() {
    async function api_content() {
      const response = await fetch(
        // Make this YOUR URL
        "https://dapar.co.il/api.php?v=4",
        {}
      );
      const json = await response.json();
      return json;
    }

    api_content().then((res) => {
      setLoad(res);
      setAnswer(true);
    });
    return Promise.all([...cacheImages(assetImages)]);
  }

  function _handleLoadingError(error) {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  }

  function _handleFinishLoading() {
    setLoading(true);
  }

  if (!fontsLoaded && !isLoadingComplete) {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onError={_handleLoadingError}
        onFinish={_handleFinishLoading}
      />
    );
  } else if (fontsLoaded && !load && answer) {
    return (
      <NavigationContainer>
        <GalioProvider theme={argonTheme}>
          <Block flex>
            <Screens />
          </Block>
        </GalioProvider>
      </NavigationContainer>
    );
  } else if (load && answer) {
    return (
      <SafeAreaView
        style={{ flex: 1, paddingTop: 30, backgroundColor: "#fcbe3c" }}
      >
        {/* <WebView source={{ uri: "https://mobile.yom100.co.il/" }} /> */}
      </SafeAreaView>
    );
  } else {
    return (
      <AppLoading
        startAsync={_loadResourcesAsync}
        onError={_handleLoadingError}
        onFinish={_handleFinishLoading}
      />
    );
  }
};
