/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Scene, ActionConst, Stack, Router, Tabs } from 'react-native-router-flux';
import HomeContainer from './src/containers/HomeContainer'
import MovieDetailContainer from './src/containers/MovieDetailContainer'
import LoginContainer from './src/containers/LoginContainer'

export default class App extends Component {
  constructor(props) {
    super(props)
    console.disableYellowBox = true; // disable yellow warning
  }

  render() {
    return (
      <Router >
        <Stack key='root'>
          {/* <Scene key='splash' component={SplashContainer} title='Splash' hideNavBar={true} /> */}
          <Scene key='home' component={HomeContainer} title='Home' initial hideNavBar={true} />
          <Scene key='movieDetails' component={MovieDetailContainer} title='Phim' />
          <Scene key='login' component={LoginContainer} initial title='Đăng nhập' />
        </Stack>
      </Router>
    );
  }
}
