/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../../src/styles/NewsEntries.style';
import NewsEntry from '../../src/components/NewsEntry';
import styles, { colors } from '../../src/styles/index.style';
import { ENTRIES1, ENTRIES2 } from '../../src/static/entries';
import { scrollInterpolators, animatedStyles } from '../../src/utils/animations';
import { Actions } from 'react-native-router-flux';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;


export default class NewsSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM
    };
  }

  _renderItem({ item, index }) {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  }

  _renderItemWithParallax({ item, index }, parallaxProps) {
    return (
      <NewsEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  _renderLightItem({ item, index }) {
    return <NewsEntry data={item} even={false} />;
  }

  _renderDarkItem({ item, index }) {
    return <NewsEntry data={item} even={true} />;
  }

  render() {
    const { slider1ActiveSlide } = this.state;
    return (
      <View style={[styles.exampleContainer]}>
        <Carousel
          ref={c => this._slider1Ref = c}
          data={ENTRIES2}
          layout={'stack'}
          renderItem={this._renderItemWithParallax}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          hasParallaxImages={true}
          firstItem={SLIDER_1_FIRST_ITEM}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.7}
          // inactiveSlideShift={20}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContentContainer}
          loop={true}
          loopClonesPerSide={2}
          autoplay={true}
          onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
        />
      </View>
    );
  }
}
