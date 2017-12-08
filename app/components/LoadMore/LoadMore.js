import React, { Component } from 'react';

import {
    StyleSheet,
    Text
} from 'react-native';

export default class LoadMore extends Component {
    static propTypes = {
        footerLoadingText: React.PropTypes.string
    }
    static defaultProps = {
        footerLoadingText: '上拉加载更多'
    }
    render() {
        return (
            <Text style={style.footerLoading}>{this.props.footerLoadingText}</Text>
        )
    }
}
const style = StyleSheet.create({
    footerLoading: {
        color: '#63B8FF',
        textAlign: 'center', 
        padding: 10
    }

})