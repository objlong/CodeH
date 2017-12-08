import React, { Component } from 'react';

import {
    StyleSheet,
    Text
} from 'react-native';

export default class CommentList extends Component {
    render() {
        return (
            <Text style={style.allLoading}>{'我是详情'}</Text>
        )
    }
}
const style = StyleSheet.create({
    allLoading: {
        color: '#63B8FF',
        textAlign: 'center', 
        paddingTop: 50
    }

})