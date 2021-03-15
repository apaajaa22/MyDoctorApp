import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcSplashScreen} from '../../assets';
import {Gap} from '../../components';
import Fire from '../../config/Fire';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    const unsubscribe = Fire.auth().onAuthStateChanged((user) => {
      setTimeout(() => {
        if (user) {
          navigation.replace('MainApp');
        } else {
          navigation.replace('GetStarted');
        }
      }, 3000);
    });
    return () => unsubscribe();
  }, [navigation]);
  return (
    <View style={styles.page}>
      <IcSplashScreen />
      <Gap height={20} />
      <Text style={styles.title}>My Doctor</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {fontSize: 20, fontFamily: 'Nunito-SemiBold'},
});
