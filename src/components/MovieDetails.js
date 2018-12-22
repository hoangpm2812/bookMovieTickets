import React, { Component } from 'react'
import {
  StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Animated, ScrollView, Dimensions
} from "react-native";
import { Actions } from 'react-native-router-flux';
import NewsSlide from '../components/NewsSlide';
import Icon from 'react-native-vector-icons/FontAwesome';

class MovieDetails extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let screenHeight = Dimensions.get('window').height

    return (
      <ScrollView>
        {/* View trailer */}
        <View style={{ backgroundColor: 'white', borderBottomWidth: 5, borderBottomColor: 'gray' }}>
          {/* video trailer */}
          <View style={{ height: screenHeight / 4, flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
            <Icon name="youtube-play" size={60} color="red" />
          </View>

          <View style={{ flex: 1, paddingBottom: 10 }}>
            {/* Tieu de */}
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, marginRight: 10, marginLeft: 10, marginBottom: 20 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold' }}>THE GRINCH</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-end' }}>
                <TouchableOpacity 
                  onPress={() => {Actions.movieTime({title: "THE ADVENGERS"})}}
                  style={{ backgroundColor: '#dcad63', width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 10, paddingHorizontal: 10 }}>
                  <Text style={{ color: 'white', paddingVertical: 5 }}>Đặt vé</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* dinh dang */}
            <View style={{ flex: 2, flexDirection: 'row' }}>

            </View>

            {/* chi tiet */}
            <View style={{ flex: 2, flexDirection: 'row', marginRight: 10, marginLeft: 10 }}>
              <Text>
                The Grinch là một kẻ cô dộc, suốt ngày cau có. Hắn không sống chung với bất cứ ai mà ở trong hang núi với một chú chó.
                Bị bỏ rơi từ nhỏ, hắn luôn gang tị với niềm hạnh phúc của tất cả mọi người. Cũng chính vì thế, The Grinch đã âm mưu phá hoại.
                            </Text>
            </View>
          </View>
        </View>

        {/* View chi tiết  */}
        <View style={{ backgroundColor: 'white', borderBottomWidth: 5, borderBottomColor: 'gray' }}>
          <View style={{ flexDirection: 'row', marginTop: 15, paddingBottom: 5 }}>
            <View style={{ flex: 2, alignItems: 'flex-end', marginRight: 20 }}>
              <Text style={{ fontWeight: 'bold' }}>Kiểm duyệt</Text>
            </View>
            <View style={{ flex: 5 }}>
              <Text>P - PHIM DÀNH CHO MỌI ĐỐI TƯỢNG</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
            <View style={{ flex: 2, alignItems: 'flex-end', marginRight: 20 }}>
              <Text style={{ fontWeight: 'bold' }}>Khởi chiếu</Text>
            </View>
            <View style={{ flex: 5 }}>
              <Text>9 Thg 11, 2018</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
            <View style={{ flex: 2, alignItems: 'flex-end', marginRight: 20 }}>
              <Text style={{ fontWeight: 'bold' }}>Thể loại</Text>
            </View>
            <View style={{ flex: 5 }}>
              <Text>Hoạt hình</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
            <View style={{ flex: 2, alignItems: 'flex-end', marginRight: 20 }}>
              <Text style={{ fontWeight: 'bold' }}>Đạo diễn</Text>
            </View>
            <View style={{ flex: 5 }}>
              <Text>Yarrow Cheney, Scott Mosier</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
            <View style={{ flex: 2, alignItems: 'flex-end', marginRight: 20 }}>
              <Text style={{ fontWeight: 'bold' }}>Diễn viên</Text>
            </View>
            <View style={{ flex: 5 }}>
              <Text>Benedict Cumberbatch</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', paddingBottom: 5 }}>
            <View style={{ flex: 2, alignItems: 'flex-end', marginRight: 20 }}>
              <Text style={{ fontWeight: 'bold' }}>Thời lượng</Text>
            </View>
            <View style={{ flex: 5 }}>
              <Text>1 giờ 35 phút</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 15 }}>
            <View style={{ flex: 2, alignItems: 'flex-end', marginRight: 20 }}>
              <Text style={{ fontWeight: 'bold' }}>Ngôn ngữ</Text>
            </View>
            <View style={{ flex: 5 }}>
              <Text>Tiếng Anh với phụ đề lồng tiếng Việt</Text>
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: 'white' }}>
          <Text style={{paddingTop: 8, fontWeight: 'bold', fontSize: 15, paddingLeft: 10}}>Tin mới & ưu đãi</Text>
          <NewsSlide />
        </View>

      </ScrollView>
    )
  }

}

export default MovieDetails