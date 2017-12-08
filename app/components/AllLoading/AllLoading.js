import React, { Component } from 'react';

import {
    StyleSheet,
    Text
} from 'react-native';

export default class AllLoading extends Component {
    static propTypes = {
        allLoadingText: React.PropTypes.string
    }
    static defaultProps = {
        allLoadingText: 'Loading...'
    }
    render() {
        return (
            <Text style={style.allLoading}>{this.props.allLoadingText}</Text>
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