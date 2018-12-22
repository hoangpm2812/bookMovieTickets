import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native'
import MovieDetails from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconSimple from 'react-native-vector-icons/SimpleLineIcons';
import { Actions } from 'react-native-router-flux';

const yellow = '#dcad63';
class ProfileContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      backgroundCircleToday: '#dcad63',
      backgroundCircleTomorrow: 'transparent',
      backgroundCircleNext2day: 'transparent',
      textStyleToday: {
        color: 'black', fontWeight: 'bold'
      },
      textStyleTomorrow: {
        color: 'white', fontWeight: 'normal'
      },
      textStyleNext2day: {
        color: 'white', fontWeight: 'normal'
      },
      activity: false
    }
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#0c0e23' }}>
        <View style={{ flex: 1 }}></View>
        <View style={{ paddingVertical: 15, justifyContent: 'center', alignItems: 'center' }}>
          <Image source={{ uri: 'https://www.r-users.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png' }}
            style={{ width: 100, height: 100, borderRadius: 50 }} />
          <View>
            <Text style={{ color: '#dcad63', paddingTop: 10 }}>Hoàng Phạm</Text>
          </View>
        </View>

        <View style={{ paddingTop: 5, flexDirection: 'row', paddingHorizontal: 10, borderBottomColor: '#3a3937', borderBottomWidth: 1, paddingVertical: 5 }}>
          <View style={{ flex: 1, alignItems: 'flex-start' }}>
            <Text style={{ color: 'gray', fontSize: 12 }}>Tổng chi tiêu 2018</Text>
            <Text style={{ color: '#dcad63', fontSize: 18 }}>10.080.000 đ</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text style={{ color: 'gray', fontSize: 12 }}>Điểm thưởng</Text>
            <Text style={{ color: '#dcad63', fontSize: 18 }}>845</Text>
          </View>
        </View>
        <View style={{ paddingTop: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10, borderBottomColor: '#3a3937', borderBottomWidth: 1, paddingVertical: 5 }}>
          <TouchableOpacity style={{ paddingVertical: 5 }}>
            <Text style={{ color: 'white', fontSize: 16 }}>Lịch sử giao dịch</Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingTop: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10, borderBottomColor: '#3a3937', borderBottomWidth: 1, paddingVertical: 5 }}>
          <TouchableOpacity style={{ paddingVertical: 5 }}>
            <Text style={{ color: 'white', fontSize: 16 }}>Phim đã xem</Text>
          </TouchableOpacity>
        </View>

        <View style={{ paddingTop: 5, paddingHorizontal: 10, borderBottomColor: '#3a3937', borderBottomWidth: 1, paddingVertical: 10 }}>
          <View style={{ flexDirection: 'row', paddingVertical: 5, paddingTop: 10 }}>
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Icon name="star-circle-outline" size={30} color="white" />
              <Text style={{ color: 'white', fontSize: 12 }}>Rạp</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <IconSimple name="user-following" size={30} color="white" />
              <Text style={{ color: 'white', fontSize: 12 }}>Thành viên</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ paddingTop: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 10, borderBottomColor: '#3a3937', borderBottomWidth: 1, paddingVertical: 5 }}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert(
                'Đăng xuất',
                'Bạn có muốn đăng xuất',
                [
                  {text: 'Không', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'Có', onPress: () => {this.props.parent.setLogin(false);}},
                ],
                { cancelable: false }
              )
            }}
            style={{ paddingVertical: 5 }}>
            <Text style={{ color: '#dcad63', fontSize: 16 }}>Đăng xuất</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 5 }}></View>
      </View>

    )
  }
}


export default ProfileContainer