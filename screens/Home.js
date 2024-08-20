import React from "react";
import { withNavigation } from '@react-navigation/compat';

import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, theme } from "galio-framework";

import { Card,  Button } from "../components";
import articles from "../constants/articles";
const { width } = Dimensions.get("screen");

class Home extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block flex>
          <Block flex row>
            <Card item={articles[0]} />
            <Card item={articles[1]} />
          </Block>

          <Block flex row>
            <Card item={articles[2]} />
            <Card item={articles[3]} />
          </Block>
          <Block flex row>
            <Card item={articles[4]} />
            <Card item={articles[5]} />
          </Block>
          <Block flex row>
            <Card item={articles[6]} />
            <Card item={articles[7]} />
          </Block>
          <Block flex row>
            <Card item={articles[8]} />
            <Card item={articles[9]} />
          </Block> 
        </Block>
      </ScrollView>
    );
  };
  renderButtons = (navigation) => {
    return (

        <Block  row style={styles.buttonBottom}>
            <Button onPress={() => navigation.navigate('HomeTest')} style={styles.buttonLeft}>
            תרגולים
            </Button>
            <Button onPress={() => navigation.navigate('HomeTest')} fontColor={'#00a6ac'}  style={styles.buttonRight}>
              מבחנים
            </Button>
      </Block>

    );
  };
  render() {
    const { navigation } = this.props;
    return (
      <Block flex center style={styles.home}>

        {this.renderButtons(navigation)}

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
    backgroundColor:'#00a6ac',

    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    
  },
  buttonRight: {
    margin: 0,
    width: width/2 - 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor:'#dedede',
    color: '#00a6ac'

  },
  buttonBottom:{
    position: 'absolute',
    bottom: 10,
    zIndex:10
  }
});
export default withNavigation(Home);
