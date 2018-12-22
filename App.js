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
import HomeContainer from './src/containers/HomeContainer';
import MovieDetailContainer from './src/containers/MovieDetailContainer';
import NewDetailContainer from './src/containers/NewDetailContainer';
import NewsContainer from './src/containers/NewsContainer';
import LoginContainer from './src/containers/LoginContainer';
import MovieTimeContainer from './src/containers/MovieTimeContainer';
import BookChairsContainer from './src/containers/BookChairsContainer';
import ServicesContainer from './src/containers/ServicesContainer';
import PaymentContainer from './src/containers/PaymentContainer';
import ProfileContainer from './src/containers/ProfileContainer';
import TabIcon from './src/common/TabIcon';

export default class App extends Component {
  constructor(props) {
		super(props);
		this.state= {
			isLogin: false
		};
    console.disableYellowBox = true; // disable yellow warning
	}
	
	setLogin = (value) => {
		this.setState({
			isLogin: value
		})
	}

  render() {
    return (
      <Router >
        <Scene key='root'>
          {/* <Scene key='splash' component={SplashContainer} title='Splash' hideNavBar={true} /> */}
          {/* <Scene key='home' component={HomeContainer} title='Home' initial hideNavBar={true} initial/> */}
          <Scene key='movieDetails' component={MovieDetailContainer} title='Phim' />
          <Scene key='login' component={LoginContainer} title='Đăng nhập' />
          <Scene key='movieTime' component={MovieTimeContainer} title={this.props.title} />
          <Scene key='bookChairs' component={BookChairsContainer} title={this.props.title} />
          <Scene key='services' component={ServicesContainer} title={this.props.title} />
          <Scene key='newDetail' component={NewDetailContainer} title="Tin tức và ưu đãi" />
          <Scene key='payment' component={PaymentContainer} title="Thanh toán" />
          
          <Scene
						initial
						swipeEnabled={true}
						key='tabbar'
						tabs={true}
						legacy={true}
						showLabel={false}
						tabBarPosition='bottom'
						activeBackgroundColor='#F29E2E'
						hideNavBar
					>
						<Scene key="tab1" title="Tab1" iconName="Home" icon={TabIcon.TabIcon}>
							<Scene
								hideNavBar
								key='home'
								title="Home"
								component={HomeContainer} />
						</Scene>

						<Scene key="tab2" title="Tab2" iconName="Profile" icon={TabIcon.TabIcon}>
							<Scene
								hideNavBar
								key='profile'
								title="Profile"
								component={() => <NewsContainer/>} />
						</Scene>

						<Scene key="tab4" title="Tab4" iconName="Menu" icon={TabIcon.TabIcon}>
							<Scene
								hideNavBar
								key='menu'
								title="Menu"
								component={() => { 
									if(this.state.isLogin) {
										return (<ProfileContainer parent={this} />);
									} else {
										return (<LoginContainer parent={this} />);
									}
								}}/>
						</Scene>
					</Scene>
        </Scene>
      </Router>
    );
  }
}
