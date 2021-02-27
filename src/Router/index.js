import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  GetStarted,
  SignIn,
  SplashScreen,
  SignUp,
  UploadPhoto,
  TabDoctor,
  TabMessages,
  TabHospitals,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MyTabBar} from '../components';

const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen
        name="Doctor"
        component={TabDoctor}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Messages"
        component={TabMessages}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Hospitals"
        component={TabHospitals}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="UploadPhoto"
        component={UploadPhoto}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
