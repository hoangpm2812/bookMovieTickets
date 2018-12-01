import React from 'react'
import { Scene, ActionConst, Stack, Router, Tabs } from 'react-native-router-flux';
import HomeContainer from './'
import MovieDetailContainer from '../containers/MovieDetail/MovieDetailContainer'

const AppRouter = () =>
  <Router >
    <Stack key='root'>
        {/* <Scene key='splash' component={SplashContainer} title='Splash' hideNavBar={true} /> */}
        <Scene key='home' component={HomeContainer}  title='Home' initial hideNavBar={true}  />
        <Scene key='movieDetails' component={MovieDetailContainer} title='Phim' />
    </Stack>
  </Router>

export default AppRouter;