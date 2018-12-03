import React, { Component } from 'react'
import {
    StyleSheet, Text, View, Image, TouchableOpacity, Animated, TextInput, Dimensions
} from "react-native";
import { Actions } from 'react-native-router-flux';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    render() {
        let screenHeight = Dimensions.get('window').height

        return (
            <View style={{ flex: 1, backgroundColor: "#dad6ca" }}>
                <View style={{ flex: 3 }}>
                </View>
                <View style={{ flex: 2 }}>
                    <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white' }}
                        onChangeText={(username) => this.setState({ username: username })}
                        value={this.state.username} placeholder="Email hoặc tên đăng nhập" />
                    <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, backgroundColor: 'white' }}
                        onChangeText={(password) => this.setState({ password: password })}
                        value={this.state.password} placeholder="Mật khẩu" />
                </View>
                <View style={{ flex: 1, marginTop: 10, justifyContent: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: '#ab2c35', justifyContent: 'center', alignItems: 'center', padding: 10, borderRadius: 17, marginLeft: 30, marginRight: 30 }}>
                        <Text style={{ color: 'white' }}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.5, borderBottomColor: 'gray', borderBottomWidth: 1 }}>

                </View>
                <View style={{ flex: 0.5 }}>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <TouchableOpacity style={{ backgroundColor: '#2d489f', justifyContent: 'center', alignItems: 'center', padding: 10, borderRadius: 17, marginLeft: 30, marginRight: 30 }}>
                        <Text style={{ color: 'white' }}>Đăng nhập bằng Facebook</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 8 }}>

                </View>
                <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{color: 'gray', fontWeight: 'bold'}}>Cần trợ giúp?</Text>
                </View>
            </View>
        )
    }

}

export default Login