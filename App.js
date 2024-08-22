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
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [load, setLoad] = useState(false);
  const [answer, setAnswer] = useState(false);
  let [fontsLoaded] = useFonts({
    ArgonExtra: require("./assets/font/argon.ttf"),
  });
  // Prevent the splash screen from auto-hiding
  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await _loadResourcesAsync();
      } catch (e) {
        _handleLoadingError(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync(); // Hide the splash screen once loading is complete
      }
    }

    loadResourcesAndDataAsync();
  }, []);
  async function _loadResourcesAsync() {
    async function api_content() {
      const response = await fetch("https://dapar.co.il/api.php?v=4", {});
      const json = await response.json();
      return json;
    }

    api_content().then((res) => {
      setLoad(res);
      setAnswer(true);
    });

    await Promise.all([...cacheImages(assetImages)]); // Ensure images are cached
  }

  function _handleLoadingError(error) {
    console.warn(error);
  }

  if (!isLoadingComplete || !fontsLoaded) {
    return null; // Don't render anything while loading
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
    return null; // You can return a placeholder here if necessary
  }
};
