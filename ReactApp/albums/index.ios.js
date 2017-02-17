// iOS App

// Import library
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create a Component
const App = () => (
  // Adding flex: 1 to root view element allows content to full
  // the full view area of the device without being cut off
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);


// Render it to the device
AppRegistry.registerComponent('albums', () => App);
