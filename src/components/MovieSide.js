/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../../src/styles/SliderEntries.style';
import SliderEntry from '../../src/components/SliderEntry';
import styles, { colors } from '../../src/styles/index.style';
import { ENTRIES1, ENTRIES2 } from '../../src/static/entries';
import { scrollInterpolators, animatedStyles } from '../../src/utils/animations';
import { Actions } from 'react-native-router-flux';

const IS_ANDROID = Platform.OS === 'android';
const SLIDER_1_FIRST_ITEM = 1;


export default class MovieSlide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
      dangChieuColor: 'black',
      dacBietColor: 'gray',
      sapChieuColor: 'gray',
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
      <SliderEntry
        data={item}
        even={(index + 1) % 2 === 0}
        parallax={true}
        parallaxProps={parallaxProps}
      />
    );
  }

  _renderLightItem({ item, index }) {
    return <SliderEntry data={item} even={false} />;
  }

  _renderDarkItem({ item, index }) {
    return <SliderEntry data={item} even={true} />;
  }

  render() {
    const { slider1ActiveSlide } = this.state;
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} 
              onPress={()=>{this.setState({dangChieuColor: 'black', dacBietColor: 'gray', sapChieuColor: 'gray'})}}>
            <Text style={[styles.textHeader, {color: this.state.dangChieuColor}]}>Đang chiếu</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              onPress={()=>{this.setState({dangChieuColor: 'gray', dacBietColor: 'black', sapChieuColor: 'gray'})}}>
            <Text style={[styles.textHeader, {color: this.state.dacBietColor}]}>Đặc biệt</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
              onPress={()=>{this.setState({dangChieuColor: 'gray', dacBietColor: 'gray', sapChieuColor: 'black'})}}>
            <Text style={[styles.textHeader, {color: this.state.sapChieuColor}]}>Sắp chiếu</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.exampleContainer, {backgroundColor: '#0c0e23'}]}>
          <Carousel
            ref={c => this._slider1Ref = c}
            data={ENTRIES1}
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
            autoplay={false}
            onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
          />
        </View>
      </View>
    );
  }
}
