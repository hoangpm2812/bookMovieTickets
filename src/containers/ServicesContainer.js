import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import MovieDetails from '../components/MovieDetails'
import {Actions} from 'react-native-router-flux'

const bgChoose = '#dcad63';
const priceA = 100000, priceD = 150000, priceG = 180000;

class ServicesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalMoney: 0,
      totalChairs: 0
    }

  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 14, backgroundColor: '#222222' }}>
          
        </View>
        <View style={{ flex: 1.5, backgroundColor: 'white', flexDirection: 'row' }}>
          <View style={{ flex: 3 }}>
            <View><Text>THE ADVENGERS</Text></View>
            <View>
              <Text>{this.state.totalMoney} đ   <Text>{this.state.totalChairs} ghế</Text></Text>

            </View>
          </View>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity style={{ backgroundColor: '#dcad63', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15 }}
              onPress={() => { 
                if (this.state.totalChairs == 0) {
                  alert ("Vui lòng chọn ít nhất 1 ghế");
                } else {
                  
                }
              }}>
              <Text style={{ color: 'black' }}>Thanh toán</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    )
  }
}


export default ServicesContainer