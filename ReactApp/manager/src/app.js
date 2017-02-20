import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  ComponentWillMount() {
  const config = {
      apiKey: 'AIzaSyD-3rGQA1WTL7GULpEr6BqkpO_Oj4fPmP8',
      authDomain: 'manager-a95af.firebaseapp.com',
      databaseURL: 'https://manager-a95af.firebaseio.com',
      storageBucket: 'manager-a95af.appspot.com',
      messagingSenderId: '1086728340586'
    };

    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Header headerText='Mic Check!' />
          <LoginForm />
        </View>
      </Provider>
    )
  }
}


export default App;
