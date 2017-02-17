import React, { Component } from 'react';
import { View, Text } from 'react-native';
// firebase should be above custom libraries
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCiYvrgvAbdmxoZuOmdWCtK7E9eUTS_76A',
      authDomain: 'reactnative-auth-43002.firebaseapp.com',
      databaseURL: 'https://reactnative-auth-43002.firebaseio.com',
      storageBucket: 'reactnative-auth-43002.appspot.com',
      messagingSenderId: '406073452113'
    });
  }
  render () {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    )
  };
};

export default App;
