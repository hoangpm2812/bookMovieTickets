import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MovieDetails from '../components/MovieDetails'

class MovieDetailContainer extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{flex:1}}>
                <MovieDetails />
            </View>
            
        )
    }
}


export default MovieDetailContainer