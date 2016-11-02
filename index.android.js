/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, ListView } from 'react-native';
import dataSource from './app/proxy/fakedata'


export default class klaue extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {;
    return (
      <View >
        <ListView style={styles.list}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text style={styles.row}>{rowData}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
  },
  row: {
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'lightgrey',
    borderWidth: 0.2,
    // borderBottomColor: 'yellow'
    
}

});

AppRegistry.registerComponent('klaue', () => klaue);
