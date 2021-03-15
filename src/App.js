import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, YellowBox} from 'react-native';
import FlashMessage from 'react-native-flash-message';
import 'react-native-gesture-handler';
import {Provider, useSelector} from 'react-redux';
import {Loading} from './components';
import store from './redux/store';
import Router from './Router';

const MainApp = () => {
  const stateGlobal = useSelector((state) => state);
  YellowBox.ignoreWarnings(['Setting a timer', 'FIREBASE WARNING']);
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
      {stateGlobal.loading && <Loading />}
    </>
  );
};
const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};
export default App;

const styles = StyleSheet.create({});
