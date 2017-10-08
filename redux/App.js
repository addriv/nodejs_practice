import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {configureStore} from './app/store/store';
import MainContainer from './app/components/main_container';

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <MainContainer />
      </Provider>
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
