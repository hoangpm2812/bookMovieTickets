import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Login from '../components/Login'

export default class LoginContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Login />
            </View>
            
        )
    }
}