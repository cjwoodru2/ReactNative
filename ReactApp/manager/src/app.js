import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Header } from './components/common';

class App extends Component {
  render() {
    return (
      <Provider>
        <View>
          <Header headerText='Mic Check!' />
        </View>
      </Provider>
    )
  }
}


export default App;
