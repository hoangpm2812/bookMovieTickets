import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import MovieDetails from '../components/MovieDetails'
import {Actions} from 'react-native-router-flux'

const bgChoose = '#dcad63';
const priceA = 100000, priceD = 150000, priceG = 180000;

class BookChairsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bgA: {},
      bgB: {},
      bgC: {},
      bgD: {},
      bgE: {},
      bgF: {},
      bgG: {},
      totalMoney: 0,
      totalChairs: 0
    }
    for (let i = 0; i < 14; i++) {
      this.state.bgA[i] = '#a99b8c';
      this.state.bgB[i] = '#a99b8c';
      this.state.bgC[i] = '#a99b8c';
      this.state.bgD[i] = '#8f4351';
      this.state.bgE[i] = '#8f4351';
      this.state.bgF[i] = '#8f4351';
    }
    for (let i = 0; i < 12; i++) {
      this.state.bgG[i] = '#d72369';
    }

  }

  render() {
    A = [];
    B = [];
    C = [];
    D = [];
    E = [];
    F = [];
    G = [];
    for (let i = 0; i < 14; i++) {

      A.push(
        <TouchableOpacity style={{ marginLeft: 2, width: 30, height: 30, backgroundColor: this.state.bgA[i], justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            temp = {}
            for (let j = 0; j < 14; j++) {
              if (j == i) {
                if (this.state.bgA[i] == '#a99b8c') {
                  temp[j] = bgChoose;
                  sum = this.state.totalMoney + priceA;
                  chairs = this.state.totalChairs + 1;
                } else {
                  temp[j] = '#a99b8c'
                  sum = this.state.totalMoney - priceA;
                  chairs = this.state.totalChairs - 1;
                }
              } else {
                temp[j] = this.state.bgA[j];
              }
            }
            this.setState({ bgA: temp, totalMoney: sum, totalChairs: chairs })
          }}>
          <Text>A{i + 1}</Text>
        </TouchableOpacity>
      )
      B.push(
        <TouchableOpacity style={{ marginLeft: 2, width: 30, height: 30, backgroundColor: this.state.bgB[i], justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            temp = {}
            for (let j = 0; j < 14; j++) {
              if (j == i) {
                if (this.state.bgB[i] == '#a99b8c') {
                  temp[j] = bgChoose;
                  sum = this.state.totalMoney + priceA;
                  chairs = this.state.totalChairs + 1;
                } else {
                  temp[j] = '#a99b8c'
                  sum = this.state.totalMoney - priceA;
                  chairs = this.state.totalChairs - 1;
                }
              } else {
                temp[j] = this.state.bgB[j];
              }
            }
            this.setState({ bgB: temp, totalMoney: sum, totalChairs: chairs })
          }}>
          <Text>B{i + 1}</Text>
        </TouchableOpacity>
      )
      C.push(
        <TouchableOpacity style={{ marginLeft: 2, width: 30, height: 30, backgroundColor: this.state.bgC[i], justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            temp = {}
            for (let j = 0; j < 14; j++) {
              if (j == i) {
                if (this.state.bgC[i] == '#a99b8c') {
                  temp[j] = bgChoose;
                  sum = this.state.totalMoney + priceA;
                  chairs = this.state.totalChairs + 1;
                } else {
                  temp[j] = '#a99b8c'
                  sum = this.state.totalMoney - priceA;
                  chairs = this.state.totalChairs - 1;
                }
              } else {
                temp[j] = this.state.bgC[j];
              }
            }
            this.setState({ bgC: temp, totalMoney: sum, totalChairs: chairs })
          }}>
          <Text>C{i + 1}</Text>
        </TouchableOpacity>
      )
      D.push(
        <TouchableOpacity style={{ marginLeft: 2, width: 30, height: 30, backgroundColor: this.state.bgD[i], justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            temp = {}
            for (let j = 0; j < 14; j++) {
              if (j == i) {
                if (this.state.bgD[i] == '#8f4351') {
                  temp[j] = bgChoose;
                  sum = this.state.totalMoney + priceD;
                  chairs = this.state.totalChairs + 1;
                } else {
                  temp[j] = '#8f4351'
                  sum = this.state.totalMoney - priceD;
                  chairs = this.state.totalChairs - 1;
                }
              } else {
                temp[j] = this.state.bgD[j];
              }
            }
            this.setState({ bgD: temp, totalMoney: sum, totalChairs: chairs })
          }}>
          <Text>D{i + 1}</Text>
        </TouchableOpacity>
      )
      E.push(
        <TouchableOpacity style={{ marginLeft: 2, width: 30, height: 30, backgroundColor: this.state.bgE[i], justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            temp = {}
            for (let j = 0; j < 14; j++) {
              if (j == i) {
                if (this.state.bgE[i] == '#8f4351') {
                  temp[j] = bgChoose;
                  sum = this.state.totalMoney + priceD;
                  chairs = this.state.totalChairs + 1;
                } else {
                  temp[j] = '#8f4351'
                  sum = this.state.totalMoney - priceD;
                  chairs = this.state.totalChairs - 1;
                }
              } else {
                temp[j] = this.state.bgE[j];
              }
            }
            this.setState({ bgE: temp, totalMoney: sum, totalChairs: chairs })
          }}>
          <Text>E{i + 1}</Text>
        </TouchableOpacity>
      )
      F.push(
        <TouchableOpacity style={{ marginLeft: 2, width: 30, height: 30, backgroundColor: this.state.bgF[i], justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            temp = {}
            for (let j = 0; j < 14; j++) {
              if (j == i) {
                if (this.state.bgF[i] == '#8f4351') {
                  temp[j] = bgChoose;
                  sum = this.state.totalMoney + priceD;
                  chairs = this.state.totalChairs + 1;
                } else {
                  temp[j] = '#8f4351'
                  sum = this.state.totalMoney - priceD;
                  chairs = this.state.totalChairs - 1;
                }
              } else {
                temp[j] = this.state.bgF[j];
              }
            }
            this.setState({ bgF: temp, totalMoney: sum, totalChairs: chairs })
          }}>
          <Text>F{i + 1}</Text>
        </TouchableOpacity>
      )
    }
    for (let i = 0; i < 12; i++) {
      G.push(
        <TouchableOpacity style={{ marginLeft: 2, width: 30, height: 30, backgroundColor: this.state.bgG[i], justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            temp = {}
            for (let j = 0; j < 12; j++) {
              temp[j] = this.state.bgG[j];
            }
            if (this.state.bgG[i] == '#d72369') {
              temp[i] = bgChoose;
              sum = this.state.totalMoney + priceG * 2;
              chairs = this.state.totalChairs + 2;
              if (i % 2 == 0) {
                temp[i + 1] = bgChoose;
              } else {
                temp[i - 1] = bgChoose;
              }
            } else {
              temp[i] = '#d72369';
              sum = this.state.totalMoney - priceG * 2;
              chairs = this.state.totalChairs - 2;
              if (i % 2 == 0) {
                temp[i + 1] = '#d72369';
              } else {
                temp[i - 1] = '#d72369';
              }
            }
            this.setState({ bgG: temp, totalMoney: sum, totalChairs: chairs })
          }}>
          <Text>G{i + 1}</Text>
        </TouchableOpacity>
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 14, backgroundColor: '#222222' }}>
          <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 25, color: 'gray' }}>MÀN HÌNH</Text>
              </View>
              <View style={{ alignItems: 'center' }}>
                <View style={{ height: 30, flexDirection: 'row', marginHorizontal: 50, marginTop: 2 }}>
                  {A}
                </View>
                <View style={{ height: 30, flexDirection: 'row', marginHorizontal: 50, marginTop: 2 }}>
                  {B}
                </View>
                <View style={{ height: 30, flexDirection: 'row', marginHorizontal: 50, marginTop: 2 }}>
                  {C}
                </View>
                <View style={{ height: 30, flexDirection: 'row', marginHorizontal: 50, marginTop: 2 }}>
                  {D}
                </View>
                <View style={{ height: 30, flexDirection: 'row', marginHorizontal: 50, marginTop: 2 }}>
                  {E}
                </View>
                <View style={{ height: 30, flexDirection: 'row', marginHorizontal: 50, marginTop: 2 }}>
                  {F}
                </View>
                <View style={{ height: 30, flexDirection: 'row', marginHorizontal: 50, marginTop: 2 }}>
                  {G}
                </View>

              </View>
              <View style={{ flex: 1, backgroundColor: 'green', marginTop: 70 }}>

              </View>
            </ScrollView>
          </ScrollView>
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
              <Text style={{ color: 'black' }}>Đặt vé</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    )
  }
}


export default BookChairsContainer