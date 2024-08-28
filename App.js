import React, { useState, useEffect } from "react";
import { Image, LogBox, SafeAreaView } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "@use-expo/font";
import { Asset } from "expo-asset";
import { Block, GalioProvider } from "galio-framework";
import { NavigationContainer } from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import Screens from "./navigation/Screens";
import { Images, articles, argonTheme } from "./constants";

enableScreens();

const assetImages = [Images.Onboarding];
articles.forEach((article) => assetImages.push(article.image));

function cacheImages(images) {
  return images.map((image) =>
    typeof image === "string"
      ? Image.prefetch(image)
      : Asset.fromModule(image).downloadAsync()
  );
}

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  const [apiData, setApiData] = useState(null);
  const [fontsLoaded] = useFonts({
    ArgonExtra: require("./assets/font/argon.ttf"),
  });

  useEffect(() => {
    LogBox.ignoreAllLogs();
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from hiding automatically
        const apiResponse = await fetch("https://dapar.co.il/api.php?v=4");
        const apiJson = await apiResponse.json();
        setApiData(apiJson);
        await Promise.all([...cacheImages(assetImages)]);
        setLoadingComplete(true);
      } catch (error) {
        console.warn(error);
      } finally {
        SplashScreen.hideAsync(); // Hide the splash screen after resources are loaded
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!fontsLoaded || !isLoadingComplete) {
    // Show a blank screen or a placeholder while resources are loading
    return null;
  }

  if (apiData) {
    return (
      <SafeAreaView
        style={{ flex: 1, paddingTop: 30, backgroundColor: "#fcbe3c" }}
      >
        {/* <WebView source={{ uri: "https://mobile.yom100.co.il/" }} /> */}
      </SafeAreaView>
    );
  }

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
