import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import MovieDetails from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';

class MovieTimeContainer extends Component {
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
      <View style={{ flex: 1 }}>
        <View style={{ height: 90, backgroundColor: '#001638' }}>
          <ScrollView horizontal={true}>
            <TouchableOpacity style={{ margin: 10, alignItems: 'center' }}
              onPress={() => this.setState({
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
                }
              })}>
              <Text style={{ color: '#dcad63' }}>Hôm nay</Text>
              <View style={{
                marginTop: 10, backgroundColor: this.state.backgroundCircleToday,
                width: 36, height: 36, justifyContent: 'center',
                alignItems: 'center', borderRadius: 18
              }}>
                <Text style={[this.state.textStyleToday, { fontSize: 17 }]}>8</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 10, marginLeft: 15, alignItems: 'center' }}
              onPress={() => this.setState({
                backgroundCircleToday: 'transparent',
                backgroundCircleTomorrow: '#dcad63',
                backgroundCircleNext2day: 'transparent',
                textStyleToday: {
                  color: 'white', fontWeight: 'normal'
                },
                textStyleTomorrow: {
                  color: 'black', fontWeight: 'bold'
                },
                textStyleNext2day: {
                  color: 'white', fontWeight: 'normal'
                }
              })}>
              <Text style={{ color: 'white' }}>CN</Text>
              <View style={{
                marginTop: 10, backgroundColor: this.state.backgroundCircleTomorrow,
                width: 36, height: 36, justifyContent: 'center',
                alignItems: 'center', borderRadius: 18
              }}>
                <Text style={[this.state.textStyleTomorrow, { fontSize: 17 }]}>9</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 10, marginLeft: 15, alignItems: 'center' }}
              onPress={() => this.setState({
                backgroundCircleToday: 'transparent',
                backgroundCircleTomorrow: 'transparent',
                backgroundCircleNext2day: '#dcad63',
                textStyleToday: {
                  color: 'white', fontWeight: 'normal'
                },
                textStyleTomorrow: {
                  color: 'white', fontWeight: 'normal'
                },
                textStyleNext2day: {
                  color: 'black', fontWeight: 'bold'
                }
              })}>
              <Text style={{ color: 'white' }}>T2</Text>
              <View style={{
                marginTop: 10, backgroundColor: this.state.backgroundCircleNext2day,
                width: 36, height: 36, justifyContent: 'center',
                alignItems: 'center', borderRadius: 18
              }}>
                <Text style={[this.state.textStyleNext2day, { fontSize: 17 }]}>10</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View style={{ flex: 13, backgroundColor: 'white' }}>
          <ScrollView>
            <View style={{ paddingVertical: 10, marginHorizontal: 10, borderBottomColor: 'gray', borderBottomWidth: 1 }}>
              <Text style={{ fontWeight: 'bold', paddingBottom: 10, fontSize: 16 }}>Rạp Vincom Long Biên</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
                <Icon name="movie" size={30} color="#001638" />
                <Text style={{ fontWeight: 'bold', paddingLeft: 5 }}>
                  2D Phụ Đề Việt
                </Text>
              </View>
              <View style={{ flexDirection: 'row', paddingLeft: 15 }}>
                <TouchableOpacity
                  onPress={() => { Actions.bookChairs({ title: "Rạp Vincom Long Biên" }) }}
                  style={{ backgroundColor: '#edece7', marginRight: 10, paddingVertical: 6, paddingHorizontal: 16, borderRadius: 3, borderColor: 'gray', borderWidth: 1 }}>
                  <Text style={{ fontWeight: 'bold' }}>09:50</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => { Actions.bookChairs({ title: "Rạp Vincom Long Biên" }) }}
                  style={{ backgroundColor: '#edece7', marginRight: 10, paddingVertical: 6, paddingHorizontal: 16, borderRadius: 3, borderColor: 'gray', borderWidth: 1 }}>
                  <Text style={{ fontWeight: 'bold' }}>12:40</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => { Actions.bookChairs({ title: "Rạp Vincom Long Biên" }) }}
                  style={{ backgroundColor: '#edece7', marginRight: 10, paddingVertical: 6, paddingHorizontal: 16, borderRadius: 3, borderColor: 'gray', borderWidth: 1 }}>
                  <Text style={{ fontWeight: 'bold' }}>14:10</Text>
                </TouchableOpacity>
              </View>

              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
                <Icon name="movie" size={30} color="#001638" />
                <Text style={{ fontWeight: 'bold', paddingLeft: 5 }}>
                  3D Phụ Đề Việt
                </Text>
              </View>
              <View style={{ flexDirection: 'row', paddingLeft: 15 }}>
                <TouchableOpacity
                  onPress={() => { Actions.bookChairs({ title: "Rạp Vincom Long Biên" }) }}
                  style={{ backgroundColor: '#edece7', marginRight: 10, paddingVertical: 6, paddingHorizontal: 16, borderRadius: 3, borderColor: 'gray', borderWidth: 1 }}>
                  <Text style={{ fontWeight: 'bold' }}>08:50</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
              <Text style={{ fontWeight: 'bold', paddingBottom: 10, fontSize: 16 }}>Rạp Vincom Bà Triệu</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
                <Icon name="movie" size={30} color="#001638" />
                <Text style={{ fontWeight: 'bold', paddingLeft: 5 }}>
                  2D Phụ Đề Việt
                </Text>
              </View>
              <View style={{ flexDirection: 'row', paddingLeft: 15 }}>
                <TouchableOpacity
                  onPress={() => { Actions.bookChairs({ title: "Rạp Vincom Bà Triệu" }) }}
                  style={{ backgroundColor: '#edece7', marginRight: 10, paddingVertical: 6, paddingHorizontal: 16, borderRadius: 3, borderColor: 'gray', borderWidth: 1 }}>
                  <Text style={{ fontWeight: 'bold' }}>11:00</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => { Actions.bookChairs({ title: "Rạp Vincom Bà Triệu" }) }}
                  style={{ backgroundColor: '#edece7', marginRight: 10, paddingVertical: 6, paddingHorizontal: 16, borderRadius: 3, borderColor: 'gray', borderWidth: 1 }}>
                  <Text style={{ fontWeight: 'bold' }}>16:20</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>

    )
  }
}


export default MovieTimeContainer