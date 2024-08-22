import React, { useEffect, useState } from "react";
import { Image, SafeAreaView } from "react-native";
import * as SplashScreen from "expo-splash-screen";
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
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();
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
  useEffect(() => {
    loadResourcesAsync();
  }, []);

  function loadResourcesAsync() {
    async function api_content() {
      const response = await fetch(
        // Make this YOUR URL
        "https://dapar.co.il/api.php?v=4",
        {}
      );
      const json = await response.json();
      return json;
    }

    api_content().then(async (res) => {
      setLoad(res);
      setAnswer(true);
      await SplashScreen.hideAsync();
    });
    return Promise.all([...cacheImages(assetImages)]);
  }

  if (fontsLoaded && !load && answer) {
    return (
      <NavigationContainer>
        <GalioProvider theme={argonTheme}>
          <Block flex>
            <Screens />
          </Block>
        </GalioProvider>
      </NavigationContainer>
    );
  }
  if (load && answer) {
    return (
      <SafeAreaView
        style={{ flex: 1, paddingTop: 30, backgroundColor: "#fcbe3c" }}
      >
        {/* <WebView source={{ uri: "https://mobile.yom100.co.il/" }} /> */}
      </SafeAreaView>
    );
  }
};
