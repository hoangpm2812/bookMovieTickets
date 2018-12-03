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
import NewsSlide from '../components/NewsSlide';


export default class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView >
        <View style={{flex: 4, backgroundColor: '#0c0e23'}}>
          <NewsSlide />
        </View>
        <View style={{flex: 10}}>
          <MovieSlide />
        </View>
      </ScrollView>
    );
  }
}
