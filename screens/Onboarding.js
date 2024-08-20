import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { Block, Button, Text, theme } from "galio-framework";

const { height, width } = Dimensions.get("screen");

import argonTheme from "../constants/Theme";
import Images from "../constants/Images";
import { greaterThan } from "react-native-reanimated";

class Onboarding extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <Block style={styles.container}>
        <Block flex center>
          <ImageBackground
            source={Images.Onboarding}
            style={{ height, width, zIndex: 1 }}
          />
        </Block> 
        <Block middle style={styles.welcome}>
          <Text
            color={argonTheme.COLORS.Y_TITLE}
            style={{ zIndex: 2 }}
            size={45}
          >
            ברוכים הבאים
          </Text>
        </Block>
        <Block middle style={styles.title}>
          <Text
            color={argonTheme.COLORS.BLACK_T}
            style={{ zIndex: 2 }}
            bold
            size={25}
          >
            רוצה להצליח ביום המאה?
          </Text>
          <Text
            color={argonTheme.COLORS.BLACK_T}
            style={{ zIndex: 2 }}
            bold
            size={25}
          >
            הגעת למקום הנכון!
          </Text>
        </Block>
        <Block center style={styles.buttonStart}>
          <Button
            style={styles.button}
            color={theme.COLORS.WARNING}
            onPress={() => navigation.navigate("App")}
            textStyle={{ color: argonTheme.COLORS.WHITE }}
          >
            כניסה למערכת
          </Button>
        </Block>

        <Block  style={styles.bottom}>
        <Block center  >
        <Image 
        style={styles.tinyLogo}
        source={Images.LogoY}
      />
        </Block>
      </Block>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.COLORS.BLACK,
    height:height*1

  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    position: "relative",
    bottom: theme.SIZES.BASE,
    zIndex: 2,
  },
  buttonStart:{
    position: 'absolute',
    top: 350,
    alignSelf: 'center',
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  welcome: {
    position: 'absolute',
    top: 80,
    alignSelf: 'center',

  },
  title: {
    position: 'absolute',
    top: 270,
    alignSelf: 'center',
  },
  bottom:{
    position: 'absolute',
    height: 200,
    backgroundColor: 'white',
    width: width*1.2,
    opacity: .7,
    left: -width*0.1,
    zIndex:2,
    bottom: '0%',
    borderTopLeftRadius:160,
    borderTopRightRadius:160,
  },
  tinyLogo:{

    opacity:1,
    height: 80,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: -150,
    zIndex:4

    

    
  }

});

export default Onboarding;
