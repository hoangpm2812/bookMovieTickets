import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMal from 'react-native-vector-icons/MaterialIcons';


class PaymentContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visa: true,
      mastercard: false,
      atm: false,
      paypal: false
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ height: 200, flexDirection: 'row', paddingTop: 10, backgroundColor: 'white', paddingHorizontal: 10 }}>
          <Image
            style={{ width: 120, height: 150 }}
            source={{ uri: 'https://lh5.googleusercontent.com/-GE_ndinJdLI/V3iYwhibeqI/AAAAAAAAAiU/pD58x52DvAEwWPa5o0mCOVsVGnBZpr5LgCLcB/s1600/Avengers%2BSTARTUANIT-Hinh-Nen-Phim-Bom-Tan-Cho-May-Tinh.jpg' }} />
          <View style={{ marginLeft: 15 }}>
            <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold' }}>THE ADVENGERS</Text>
            <Text style={{ fontSize: 14, color: 'red', paddingTop: 5 }}>Phim cấm khán giả dưới 13 tuổi</Text>
            <Text style={{ fontSize: 15, color: 'gray' }}>Thứ 7, 22 Thg 12, 2018</Text>
            <Text style={{ fontSize: 15, color: 'gray' }}>22:00 ~ 00:25</Text>
            <Text style={{ fontSize: 15, color: 'gray', fontWeight: 'bold' }}>Rạp Vincom Long Biên</Text>
            <Text style={{ fontSize: 15, color: 'gray', fontWeight: 'bold' }}>Cinema 3</Text>
            <Text style={{ fontSize: 15, color: 'gray', fontWeight: 'bold' }}>Seat: D09, D10</Text>
            <Text style={{ fontSize: 18, color: 'red', fontWeight: 'bold' }}>Tổng cộng: 220.000 đ</Text>
          </View>
        </View>

        <ScrollView style={{ height: 200, paddingTop: 5 }}>
          <View style={{ backgroundColor: '#0c0e23', paddingVertical: 15, justifyContent: 'center', paddingLeft: 10 }}>
            <Text style={{ fontSize: 18, color: '#dcad63' }}>THÔNG TIN VÉ</Text>
          </View>
          <View style={{ backgroundColor: 'white' }}>
            <View style={{ paddingVertical: 11, paddingHorizontal: 10, borderBottomColor: '#dad6ca', borderBottomWidth: 1, flexDirection: 'row' }}>
              <View style={{ flex: 2, alignItems: 'flex-start' }}>
                <Text style={{ fontSize: 16 }}>Số lượng</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 16 }}>2</Text>
              </View>
            </View>
            <View style={{ paddingVertical: 11, paddingHorizontal: 10, borderBottomColor: '#dad6ca', borderBottomWidth: 1, flexDirection: 'row' }}>
              <View style={{ flex: 2, alignItems: 'flex-start' }}>
                <Text style={{ fontSize: 16 }}>Tổng</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 16 }}>220.000 đ</Text>
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: '#0c0e23', paddingVertical: 15, justifyContent: 'center', paddingLeft: 10 }}>
            <Text style={{ fontSize: 18, color: '#dcad63' }}>THANH TOÁN</Text>
          </View>
          <View style={{ backgroundColor: 'white' }}>
            <TouchableOpacity
              onPress={() => {
                this.setState({
                  visa: true,
                  mastercard: false,
                  atm: false,
                  paypal: false
                })
              }}
              style={{ paddingVertical: 11, paddingHorizontal: 10, borderBottomColor: '#dad6ca', borderBottomWidth: 1, flexDirection: 'row' }}>
              <View style={{ flex: 2, alignItems: 'flex-start', flexDirection: 'row' }}>
                <Icon name="cc-visa" size={25} color='#0e61a9' />
                <Text style={{ fontSize: 16, color: '#c3c0b9', paddingLeft: 12 }}>Nội địa Việt Nam</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                {this.state.visa ? (<IconMal name="check" size={25} color='#da9c9d' />) : (null)}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.setState({
                  visa: false,
                  mastercard: true,
                  atm: false,
                  paypal: false
                })
              }}
              style={{ paddingVertical: 11, paddingHorizontal: 10, borderBottomColor: '#dad6ca', borderBottomWidth: 1, flexDirection: 'row' }}>
              <View style={{ flex: 2, alignItems: 'flex-start', flexDirection: 'row' }}>
                <Icon name="cc-mastercard" size={25} color='#ea051a' />
                <Text style={{ fontSize: 16, color: '#c3c0b9', paddingLeft: 12 }}>Nội địa Việt Nam</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                {this.state.mastercard ? (<IconMal name="check" size={25} color='#da9c9d' />) : (null)}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.setState({
                  visa: false,
                  mastercard: false,
                  atm: true,
                  paypal: false
                })
              }}
              style={{ paddingVertical: 11, paddingHorizontal: 10, borderBottomColor: '#dad6ca', borderBottomWidth: 1, flexDirection: 'row' }}>
              <View style={{ flex: 2, alignItems: 'flex-start', flexDirection: 'row' }}>
                <Icon name="credit-card-alt" size={25} color='#0265b6' />
                <Text style={{ fontSize: 16, color: '#c3c0b9', paddingLeft: 12 }}>Thẻ ATM</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                {this.state.atm ? (<IconMal name="check" size={25} color='#da9c9d' />) : (null)}
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.setState({
                  visa: false,
                  mastercard: false,
                  atm: false,
                  paypal: true
                })
              }}
              style={{ paddingVertical: 11, paddingHorizontal: 10, borderBottomColor: '#dad6ca', borderBottomWidth: 1, flexDirection: 'row' }}>
              <View style={{ flex: 2, alignItems: 'flex-start', flexDirection: 'row' }}>
                <Icon name="cc-paypal" size={25} color='#003085' />
                <Text style={{ fontSize: 16, color: '#c3c0b9', paddingLeft: 12 }}>PayPal</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                {this.state.paypal ? (<IconMal name="check" size={25} color='#da9c9d' />) : (null)}
              </View>
            </TouchableOpacity>

            <View style={{ backgroundColor: '#0c0e23', paddingTop: 8, paddingBottom: 22, justifyContent: 'center', paddingHorizontal: 10 }}>
              <Text style={{ fontSize: 15, color: 'gray' }}>Tôi đồng ý với Điều Khoản Sử Dụng và đang mua vé cho người có độ tuổi phù hợp.</Text>
              <TouchableOpacity
                onPress={() => {

                }}
                style={{ backgroundColor: '#dcad63', marginHorizontal: 30, justifyContent: 'center', alignItems: 'center', paddingVertical: 10, marginTop: 15, borderRadius: 25 }}>
                <Text style={{ color: 'black' }}>
                  Tôi đồng ý và Tiếp tục
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>

      </View>

    )
  }
}


export default PaymentContainer