/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Index from './app/index.js'

export default class H extends Component {
  render() {
    return (
      <Index />
    );
  }
}


AppRegistry.registerComponent('H', () => H);
