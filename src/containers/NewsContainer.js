import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import MovieDetails from '../components/MovieDetails';
import { Actions } from 'react-native-router-flux';

class NewsContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 10 }}>
        <View style={{
          flex: 1, backgroundColor: 'white',
          alignItems: 'flex-start', justifyContent: 'center'
        }}>
          <Text style={{ fontSize: 19, fontWeight: 'bold' }}>Tin tức và ưu đãi</Text>
        </View>
        <View style={{ flex: 12, backgroundColor: 'white' }}>
          <ScrollView>
            <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1 }}>
              <TouchableOpacity onPress={() => {Actions.newDetail()}} style={{
                flex: 2, flexDirection: 'row', marginVertical: 5
              }}>
                <Image style={{ width: 150, height: 100 }}
                  source={{ uri: "https://vnn-imgs-f.vgcloud.vn/2018/12/15/22/viet-nam-vo-dich-aff-cup-2018-cang-thang-nghet-tho-roi-khoc-oa-2.jpg" }} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10 }}>
                  <Text style={{ fontSize: 21, fontWeight: 'normal' }}>VIỆT NAM VÔ ĐỊCH GIẢM 50%</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1 }}>
              <TouchableOpacity onPress={() => {Actions.newDetail()}} style={{
                flex: 2, flexDirection: 'row', marginVertical: 5
              }}>
                <Image style={{ width: 150, height: 100 }}
                  source={{ uri: "https://beomindfulhealth.ie/wp-content/uploads/2016/09/voucher.jpg" }} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10 }}>
                  <Text style={{ fontSize: 21, fontWeight: 'normal' }}>ĐẶT VÉ ONLINE - NGẬP TRÀN QUÀ TẶNG</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1 }}>
              <TouchableOpacity onPress={() => {Actions.newDetail()}} style={{
                flex: 2, flexDirection: 'row', marginVertical: 5
              }}>
                <Image style={{ width: 150, height: 100 }}
                  source={{ uri: "https://ryeriverbrewingco.com/wp-content/uploads/2016/11/voucher.png" }} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10 }}>
                  <Text style={{ fontSize: 21, fontWeight: 'normal' }}>SIÊU COMBO ZALOPAY</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1 }}>
              <TouchableOpacity onPress={() => {Actions.newDetail()}} style={{
                flex: 2, flexDirection: 'row', marginVertical: 5
              }}>
                <Image style={{ width: 150, height: 100 }}
                  source={{ uri: "https://beomindfulhealth.ie/wp-content/uploads/2016/09/voucher.jpg" }} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 10 }}>
                  <Text style={{ fontSize: 21, fontWeight: 'normal' }}>PIZZA NÓNG HỔI, VỪA THỔI VỪA ĂN</Text>
                </View>
              </TouchableOpacity>
            </View>

          </ScrollView>

        </View>
      </View>

    )
  }
}


export default NewsContainer