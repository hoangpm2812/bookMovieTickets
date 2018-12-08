import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import MovieDetails from '../components/MovieDetails'

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
      }
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2, backgroundColor: '#001638' }}>
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
            
        </View>
      </View>

    )
  }
}


export default MovieTimeContainer