import React from "react";
import { withNavigation } from '@react-navigation/compat';

import { StyleSheet, Dimensions, ScrollView,TouchableWithoutFeedback } from "react-native";
import { Block, theme } from "galio-framework";

import { Card,  Button } from "../components";
import articlesTest from "../constants/articlesTest";
const { width } = Dimensions.get("screen");

class HomeTest extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
      style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block flex>
          <Block flex row>
            <Card item={articlesTest[0]} />
            <Card item={articlesTest[1]} />
          </Block>

          <Block flex row>
            <Card item={articlesTest[2]} />
            <Card item={articlesTest[3]} />
          </Block>
          <Block flex row>
            <Card item={articlesTest[4]} />
            <Card item={articlesTest[5]} />
          </Block>
          <Block flex row>
            <Card item={articlesTest[6]} />
            <Card item={articlesTest[7]} />
          </Block>

        </Block>
      </ScrollView>
    );
  };
  renderButtons = (navigation) => {
    return (

        <Block  row style={styles.buttonBottom}>
            <Button onPress={() => navigation.navigate('Home')} fontColor={'#00a6ac'} style={styles.buttonLeft}>
            תרגולים
            </Button>
            <Button onPress={() => navigation.navigate('Home')}   style={styles.buttonRight}>
              מבחנים
            </Button>
      </Block>

    );
  };
  render() {
    const { navigation } = this.props;
    return (
      <Block flex center style={styles.home}>
      {/* <TouchableWithoutFeedback onPress={() => navigation.navigate('Pro')}> */}

        {this.renderButtons(navigation)}
      {/* </TouchableWithoutFeedback> */}

        {this.renderArticles()}

      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,
  },
  scroll:{
    marginBottom: 30,
},
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  buttonLeft: {
    margin: 0,
    width: width/2 - 10,


    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor:'#dedede',
    color: '#00a6ac'
    
  },
  buttonRight: {
    margin: 0,
    width: width/2 - 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor:'#00a6ac',

  },
  buttonBottom:{
    position: 'absolute',
    bottom: 10,
    zIndex:10
  }
});
export default withNavigation(HomeTest);
