// iOS App

// Import library
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

// create a Component
const App = () => (
  <Header headerText={'Albums'} />
);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);
