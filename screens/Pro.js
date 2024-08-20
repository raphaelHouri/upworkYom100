import React from 'react';
import { ImageBackground, Image, StyleSheet, StatusBar, Dimensions, Platform, ScrollView } from 'react-native';
import { Block, Button, Text, theme } from 'galio-framework';
import { withNavigation } from '@react-navigation/compat';
import { CardCopy } from '../components';
import ques from '../constants/ques';
const { height, width } = Dimensions.get('screen');
import { Images, argonTheme } from '../constants/';
import { HeaderHeight } from "../constants/utils";

export default class Pro extends React.Component {
  state = {
    q: ques[Math.floor(Math.random() * ques.length)],
  };
  render() {
    const { navigation } = this.props;

    return (
      <Block flex center style={styles.home}>
              <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
        <CardCopy item={this.state.q[0]} full />
          <Block flex row>
            <CardCopy item={this.state.q[1]} style={{ marginRight: theme.SIZES.BASE , borderWidth: 5,borderColor:'#00a6ac' }} />
            <CardCopy item={this.state.q[2]} />
          </Block>
          <Block flex row>
            <CardCopy item={this.state.q[3]} style={{ marginRight: theme.SIZES.BASE }} />
            <CardCopy item={this.state.q[4]} />
          </Block>
          <Block right>
            <Text bold style={{fontSize:14,}}>הסבר</Text>
          </Block>
          <CardCopy item={this.state.q[5]}  />
        </Block>
        <Block center >
          <Button
            style={styles.button}
            color={theme.COLORS.WARNING}
            onPress={() => this.setState({ q: ques[Math.floor(Math.random() * ques.length)] })}
            textStyle={{ color: argonTheme.COLORS.WHITE }}
          >
            שאלה הבאה
          </Button>
        </Block>
      </ScrollView>

      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width, 
    marginTop:60   
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  container: {
    backgroundColor: theme.COLORS.BLACK,
    marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
  },
  padded: {
    paddingHorizontal: theme.SIZES.BASE * 2,
    zIndex: 3,
    position: 'absolute',
    bottom: Platform.OS === 'android' ? theme.SIZES.BASE * 2 : theme.SIZES.BASE * 3,
  },
  button: {
    width: width - theme.SIZES.BASE * 4,
    height: theme.SIZES.BASE * 3,
    shadowRadius: 0,
    shadowOpacity: 0,
  },
  pro: {
    backgroundColor: argonTheme.COLORS.INFO,
    paddingHorizontal: 8,
    marginLeft: 3,
    borderRadius: 4,
    height: 22,
    marginTop: 15
  },
  gradient: {
    zIndex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 66,
  },
});
