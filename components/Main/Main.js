import React, { Component } from 'react';
import {View, Text} from 'react-native';

export default class Main extends Component{
    render(){
        return(
            <View style={{flex: 1, backgroundColor: '#DFF5C9' }}>
                <Text>Main Component</Text>
            </View>
        )
    }
}