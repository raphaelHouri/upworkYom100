import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
// Galio components
import { Block, Text, Button as GaButton, theme } from "galio-framework";
// Argon themed components
import { argonTheme  } from "../constants/";
import Images from "../constants/Images";
const { width } = Dimensions.get("screen");

class Elements extends React.Component {
  renderText = () => {
    return (
      <Block right row flex style={styles.group}>
        <Block flex={0.3}>
          <Image source={Images.Percent} />
        </Block>
        <Block flex right>
          <Text bold size={16} style={styles.title}>
          כל הכבוד
          </Text>
          <Block right style={{ paddingHorizontal: theme.SIZES.BASE }}>
            <Text
              style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "right" }}
              color={argonTheme.COLORS.DEFAULT}
            >
              כל הכבוד ביחס למבחנים קודמים ניכרת השתפרות המשך כך כל הכבודת ניתן
              לזהות כי במבחן שתרגלת ביחס למשתמשים אחרים הינך טוב יותר
            </Text>
            <Text
              size={16}
              bold
              style={{ marginBottom: theme.SIZES.BASE / 2, textAlign: "right" }}
              color={argonTheme.COLORS.DEFAULT}
            >
              "לא בכוכבים טמון הגורל שלנו, אלא בעצמנו(וויליאם שייקספיר)."
            </Text>
          </Block>
        </Block>
      </Block>
    );
  };

  renderSocial = () => {
    return (
      <Block flex style={styles.group}>
        <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
          <Block row center space="between">
            <Block flex middle right>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="facebook"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={theme.COLORS.FACEBOOK}
                style={[styles.social, styles.shadow]}
              />
            </Block>
            <Block flex middle center>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="twitter"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={theme.COLORS.TWITTER}
                style={[styles.social, styles.shadow]}
              />
            </Block>
            <Block flex middle left>
              <GaButton
                round
                onlyIcon
                shadowless
                icon="dribbble"
                iconFamily="Font-Awesome"
                iconColor={theme.COLORS.WHITE}
                iconSize={theme.SIZES.BASE * 1.625}
                color={theme.COLORS.DRIBBBLE}
                style={[styles.social, styles.shadow]}
              />
            </Block>
          </Block>
        </Block>
      </Block>
    );
  };

  renderNavigation = () => {
    return (
      <Block flex>
        <Block>
          <Block
            style={{
              marginBottom: theme.SIZES.BASE,
              backgroundColor: "#fcbe3c",
            }}
          >
            <Text
              size={20}
              style={{
                paddingVertical: 10,
                textAlign: "center",
                color: "#FFF",
              }}
            >
              הסקה כמותית
            </Text>
          </Block>
          <Block flex>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Block row center space="between">
                <Block flex middle right>
                  <GaButton
                    round
                    shadowless
                    iconColor={theme.COLORS.WHITE}
                    iconSize={theme.SIZES.BASE}
                    color={"#00a6ac"}
                    style={[styles.social, styles.shadow]}
                  >
                    1
                  </GaButton>
                </Block>
                <Block flex middle right>
                  <GaButton
                    round
                    shadowless
                    iconColor={theme.COLORS.WHITE}
                    iconSize={theme.SIZES.BASE}
                    color={"#00a6ac"}
                    style={[styles.social, styles.shadow]}
                  >
                    2
                  </GaButton>
                </Block>
                <Block flex middle right>
                  <GaButton
                    round
                    shadowless
                    iconColor={theme.COLORS.WHITE}
                    iconSize={theme.SIZES.BASE}
                    color={"#00a6ac"}
                    style={[styles.social, styles.shadow]}
                  >
                    3
                  </GaButton>
                </Block>
                <Block flex middle right>
                  <GaButton
                    round
                    shadowless
                    iconColor={theme.COLORS.WHITE}
                    iconSize={theme.SIZES.BASE}
                    color={"#00a6ac"}
                    style={[styles.social, styles.shadow]}
                  >
                    4
                  </GaButton>
                </Block>
                <Block flex middle right>
                  <GaButton
                    round
                    shadowless
                    iconColor={theme.COLORS.WHITE}
                    iconSize={theme.SIZES.BASE}
                    color={"#00a6ac"}
                    style={[styles.social, styles.shadow]}
                  >
                    5
                  </GaButton>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
        <Block>
          <Block
            style={{
              marginBottom: theme.SIZES.BASE,
              backgroundColor: "#fcbe3c",
            }}
          >
            <Text
              size={20}
              style={{
                paddingVertical: 10,
                textAlign: "center",
                color: "#FFF",
              }}
            >
              לוגיקה צורנית            </Text>
          </Block>
          <Block flex>
            <Block style={{ paddingHorizontal: theme.SIZES.BASE }}>
              <Block row center space="between">
                <Block flex middle right>
                  <GaButton
                    round
                    shadowless
                    iconColor={theme.COLORS.WHITE}
                    iconSize={theme.SIZES.BASE}
                    color={"#00a6ac"}
                    style={[styles.social, styles.shadow]}
                  >
                    1
                  </GaButton>
                </Block>
                <Block flex middle right>
                  <GaButton
                    round
                    shadowless
                    iconColor={theme.COLORS.WHITE}
                    iconSize={theme.SIZES.BASE}
                    color={"#00a6ac"}
                    style={[styles.social, styles.shadow]}
                  >
                    2
                  </GaButton>
                </Block>
                <Block flex middle right>
                  <GaButton
                    round
                    shadowless
                    iconColor={theme.COLORS.WHITE}
                    iconSize={theme.SIZES.BASE}
                    color={"#00a6ac"}
                    style={[styles.social, styles.shadow]}
                  >
                    3
                  </GaButton>
                </Block>
                <Block flex middle right>
                  <GaButton
                    round
                    shadowless
                    iconColor={theme.COLORS.WHITE}
                    iconSize={theme.SIZES.BASE}
                    color={"#ff3b30"}
                    style={[styles.social, styles.shadow]}
                  >
                    4
                  </GaButton>
                </Block>
                <Block flex middle right>
                  <GaButton
                    round
                    shadowless
                    iconColor={theme.COLORS.WHITE}
                    iconSize={theme.SIZES.BASE}
                    color={"#00a6ac"}
                    style={[styles.social, styles.shadow]}
                  >
                    5
                  </GaButton>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
        <Block
            style={{
              marginBottom: 1,
              backgroundColor: "#fcbe3c",
            }}
          >
            <Text
              size={20}
              style={{
                paddingVertical: 10,
                textAlign: "center",
                color: "#FFF",
              }}
            >
              חשיבה צורנית           </Text>
          </Block>
          <Block
            style={{
              marginBottom: 1,
              backgroundColor: "#fcbe3c",
            }}
          >
            <Text
              size={20}
              style={{
                paddingVertical: 10,
                textAlign: "center",
                color: "#FFF",
              }}
            >
              כללים ופקודות           </Text>
          </Block>
        <Block
            style={{
              marginBottom: 1,
              backgroundColor: "#fcbe3c",
            }}
          >
            <Text
              size={20}
              style={{
                paddingVertical: 10,
                textAlign: "center",
                color: "#FFF",
              }}
            >
            אחד או שתיים (ריכוז)           </Text>
          </Block>
          <Block
            style={{
              marginBottom: 1,
              backgroundColor: "#fcbe3c",
            }}
          >
            <Text
              size={20}
              style={{
                paddingVertical: 10,
                textAlign: "center",
                color: "#FFF",
              }}
            >
              צבע (ריכוז)          </Text>
          </Block>
          <Block
            style={{
              marginBottom: 1,
              backgroundColor: "#fcbe3c",
            }}
          >
            <Text
              size={20}
              style={{
                paddingVertical: 10,
                textAlign: "center",
                color: "#FFF",
              }}
            >
              איתור ספרה (ריכוז)          </Text>
          </Block>
          <Block
            style={{
              marginBottom: 1,
              backgroundColor: "#fcbe3c",
            }}
          >
            <Text
              size={20}
              style={{
                paddingVertical: 10,
                textAlign: "center",
                color: "#FFF",
              }}
            >
              שיוך קטגוריה          </Text>
          </Block>
          <Block
            style={{
              marginBottom: 1,
              backgroundColor: "#fcbe3c",
            }}
          >
            <Text
              size={20}
              style={{
                paddingVertical: 10,
                textAlign: "center",
                color: "#FFF",
              }}
            >
              השוואת תווים          </Text>
          </Block>
      </Block>
    );
  };

  render() {
    return (
      <Block flex center>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30, width }}
        >
          {this.renderText()}
          {this.renderNavigation()}
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    marginTop:20
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 2,
  },
  button: {
    marginBottom: theme.SIZES.BASE,
    width: width - theme.SIZES.BASE * 2,
  },
  optionsButton: {
    width: "auto",
    height: 34,
    paddingHorizontal: theme.SIZES.BASE,
    paddingVertical: 10,
  },
  input: {
    borderBottomWidth: 1,
  },
  inputDefault: {
    borderBottomColor: argonTheme.COLORS.PLACEHOLDER,
  },
  inputTheme: {
    borderBottomColor: argonTheme.COLORS.PRIMARY,
  },
  inputInfo: {
    borderBottomColor: argonTheme.COLORS.INFO,
  },
  inputSuccess: {
    borderBottomColor: argonTheme.COLORS.SUCCESS,
  },
  inputWarning: {
    borderBottomColor: argonTheme.COLORS.WARNING,
  },
  inputDanger: {
    borderBottomColor: argonTheme.COLORS.ERROR,
  },
  social: {
    width: theme.SIZES.BASE * 2.5,
    height: theme.SIZES.BASE * 2.5,
    borderRadius: theme.SIZES.BASE * 1.75,
    justifyContent: "center",
  },
});

export default Elements;
