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
import messsage from './test';
export default class klaue extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Hellooo
        </Text>
        <Text style={styles.instructions}>
          Learning React native
        </Text>
        <Text style={styles.instructions}>
          {messsage}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('klaue', () => klaue);
