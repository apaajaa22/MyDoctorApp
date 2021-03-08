import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SplashScreen from './pages/SplashScreen';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Router from './Router';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
