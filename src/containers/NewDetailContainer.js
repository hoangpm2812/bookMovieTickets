import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions } from 'react-native'
import MovieDetails from '../components/MovieDetails'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

class NewDetailContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 10 }}>
        <Image style={{ width: screenWidth, height: Number.parseInt(screenHeight / 3) }}
          source={{ uri: "https://vnn-imgs-f.vgcloud.vn/2018/12/15/22/viet-nam-vo-dich-aff-cup-2018-cang-thang-nghet-tho-roi-khoc-oa-2.jpg" }} />
        <View style={{paddingTop: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>VIỆT NAM VÔ ĐỊCH - GIẢM GIÁ 50% TẤT CÁC CÁC LOẠI VÉ</Text>
        </View>
        <View style={{paddingTop: 2}}>
          <Text style={{fontSize: 14, fontWeight: 'normal', color: 'gray'}}>15/12/2018 - 31/12/2018</Text>
        </View>
        <View style={{paddingTop: 35}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>THỜI GIAN ƯU ĐÃI:</Text>
          <Text style={{fontSize: 17, fontWeight: 'normal', color: 'black'}}>Từ 15/12/2018 đến 31/12/2018(Tại tất cả các rạp trên toàn quốc)</Text>
        </View>
        <View style={{paddingTop: 35}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>NỘI DUNG ƯU ĐÃI:</Text>
          <Text style={{fontSize: 17, fontWeight: 'normal', color: 'black'}}>-     Mua vé xem phim được giảm giá 50% đối với tất cả các loại ghế ngồi</Text>
        </View>
      </ScrollView>

    )
  }
}


export default NewDetailContainer