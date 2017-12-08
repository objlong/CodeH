import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import HomePage from './HomePage/HomePage';

const Nav = StackNavigator({
    home: {
        screen: HomePage
    }
});

export default class NavIndex extends Component {
    render() {
        return (
            <Nav />
        )
    }
}