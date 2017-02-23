import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';


class App extends Component {
  componentWillMount() {
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
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <View>
          <Header headerText='Mic Check!' />
          <LoginForm />
        </View>
      </Provider>
    )
  }
}


export default App;
