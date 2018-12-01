/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';
import MovieSlide from '../components/MovieSide';


export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flex:1}}>
        <MovieSlide />
      </View>
    );
  }
}
