import React, { Component } from 'react'
import {
    StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Animated, ScrollView, Dimensions
} from "react-native";
import { Actions } from 'react-native-router-flux';

class MovieDetails extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let screenHeight = Dimensions.get('window').height

        return (
            <ScrollView>
                {/* View trailer */}
                <View style={{ backgroundColor: 'white', borderBottomWidth: 5, borderBottomColor: 'gray'}}>
                    {/* video trailer */}
                    <View style={{height: screenHeight/4, flex: 1, backgroundColor: 'black'}}>
                    
                    </View>
                    
                    <View style={{flex: 1}}>
                        {/* Tieu de */}
                        <View style={{flex: 1, flexDirection: 'row', marginTop: 6, marginRight: 10, marginLeft: 10}}>
                            <View style={{flex: 1}}>
                                <Text>THE GRINCH</Text>
                            </View>
                            <View style={{flex: 1, alignItems: 'flex-end'}}>
                                <TouchableOpacity style={{backgroundColor: 'red', width: 60, alignItems: 'center', justifyContent: 'center', borderRadius: 10}}>
                                    <Text style={{color: 'white'}}>Đặt vé</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {/* dinh dang */}
                        <View style={{flex: 2, flexDirection: 'row'}}>
                        
                        </View>

                        {/* chi tiet */}
                        <View style={{flex: 2, flexDirection: 'row', marginRight: 10, marginLeft: 10}}>
                            <Text>
                                The Grinch là một kẻ cô dộc, suốt ngày cau có. Hắn không sống chung với bất cứ ai mà ở trong hang núi với một chú chó.
                                Bị bỏ rơi từ nhỏ, hắn luôn gang tị với niềm hạnh phúc của tất cả mọi người. Cũng chính vì thế, The Grinch đã âm mưu phá hoại...
                            </Text>
                        </View>
                    </View>
                </View>

                {/* View chi tiết  */}
                <View style={{backgroundColor: 'white', borderBottomWidth: 5, borderBottomColor: 'gray'}}>
                    <View style={{flexDirection: 'row', marginTop: 10}}>
                        <View style={{flex: 2, alignItems: 'flex-end', marginRight: 20}}>
                            <Text>Kiểm duyệt</Text>
                        </View>
                        <View style={{flex: 5}}>
                            <Text>P - PHIM DÀNH CHO MỌI ĐỐI TƯỢNG</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 2, alignItems: 'flex-end', marginRight: 20}}>
                            <Text>Khởi chiếu</Text>
                        </View>
                        <View style={{flex: 5}}>
                            <Text>9 Thg 11, 2018</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 2, alignItems: 'flex-end', marginRight: 20}}>
                            <Text>Thể loại</Text>
                        </View>
                        <View style={{flex: 5}}>
                            <Text>Hoạt hình</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 2, alignItems: 'flex-end', marginRight: 20}}>
                            <Text>Đạo diễn</Text>
                        </View>
                        <View style={{flex: 5}}>
                            <Text>Yarrow Cheney, Scott Mosier</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 2, alignItems: 'flex-end', marginRight: 20}}>
                            <Text>Diễn viên</Text>
                        </View>
                        <View style={{flex: 5}}>
                            <Text>Benedict Cumberbatch</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flex: 2, alignItems: 'flex-end', marginRight: 20}}>
                            <Text>THời lượng</Text>
                        </View>
                        <View style={{flex: 5}}>
                            <Text>1 giờ 35 phút</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', marginBottom: 10}}>
                        <View style={{flex: 2, alignItems: 'flex-end', marginRight: 20}}>
                            <Text>Ngôn ngữ</Text>
                        </View>
                        <View style={{flex: 5}}>
                            <Text>Tiếng Anh với phụ đề lồng tiếng Việt</Text>
                        </View>
                    </View>
                </View>

                
         
            </ScrollView>
        )
    }

}

export default MovieDetails