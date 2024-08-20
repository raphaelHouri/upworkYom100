import React from "react";
import { withNavigation } from "@react-navigation/compat";
import PropTypes from "prop-types";
import {
  StyleSheet,
  Dimensions,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { argonTheme } from "../constants";

class CardCopy extends React.Component {
  render() {
    const {
      navigation,
      item,
      horizontal,
      full,
      fullA,
      style,
      ctaColor,
      imageStyle,
    } = this.props;

    const imageStyles = [
      full ? styles.fullImage : styles.horizontalImage,
      imageStyle,
    ];
    const cardContainer = [styles.card, styles.shadow, style];
    const imgContainer = [
      styles.imageContainer,
      horizontal ? styles.horizontalStyles : styles.verticalStyles,
      styles.shadow,
    ];
    if (full) {
      return (
        <Block row={horizontal} card flex style={cardContainer}>
          <Block flex right style={styles.cardDescription}>
            <Text size={12} muted={!ctaColor} color={"#00a6ac"} bold>
              {item.cta}
            </Text>
          </Block>
          {/* <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}> */}
          <Block flex style={imgContainer}>
            <Image source={{ uri: item.image }} style={imageStyles} />
          </Block>
          {/* </TouchableWithoutFeedback> */}
          {/* <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}> */}

          {/* </TouchableWithoutFeedback> */}
        </Block>
      );
    }
    // }else if(fullA){
    //   <Block row={horizontal} card flex style={cardContainer}>
    //     <Block flex style={imgContainer}>
    //       <Image source={{ uri: item.image }} style={imageStyles} />
    //     </Block>
    //   </Block>;
    // } 
    else {
      return (
        <Block row={horizontal} card flex style={cardContainer}>
          <Block flex style={imgContainer}>
            <Image source={{ uri: item.image }} style={imageStyles} />
          </Block>
        </Block>
      );
    }
  }
}

CardCopy.propTypes = {
  item: PropTypes.object,
  horizontal: PropTypes.bool,
  full: PropTypes.bool,
  ctaColor: PropTypes.string,
  imageStyle: PropTypes.any,
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE,
    borderWidth: 0,
    minHeight: 114,
    marginBottom: 16,
  },
  cardTitle: {
    flex: 1,
    flexWrap: "wrap",
    paddingBottom: 6,
  },
  cardDescription: {
    padding: theme.SIZES.BASE / 2,
  },
  imageContainer: {
    borderRadius: 3,
    overflow: "hidden",
  },
  image: {
    // borderRadius: 3,
  },
  horizontalImage: {
    height: 122,
    width: "auto",
    resizeMode: 'contain',

  },
  horizontalStyles: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  verticalStyles: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  fullImage: {
    height: 150,
    resizeMode: 'contain',

  },

});

export default withNavigation(CardCopy);
