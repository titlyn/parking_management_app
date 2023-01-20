import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import  About  from './components/About';
import Home from './components/search';
import Main from './components/main';
import NavBar from './components/navbar';
//import { NavigationContainer } from 'react-navigation';
//import {} from 'react-navigation';

export default function App() {
  return (
    <View style={{marginVertical: 40}}>
        <NavBar/>
        <Main/>
    </View>
  );
}