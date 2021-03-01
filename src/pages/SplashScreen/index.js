import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcSplashScreen} from '../../assets';
import {Gap} from '../../components';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('GetStarted');
    }, 2000);
  }, []);
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
