import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcSplashScreen} from '../../assets';
import {Button, Gap, InputText, Link} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <IcSplashScreen />
      <Gap height={40} />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Gap height={40} />
      <InputText title="Email Address" />
      <Gap height={24} />
      <InputText title="Password" />
      <Gap height={10} />
      <Link title="Forgot My Password" size={12} align="flex-start" />
      <Gap height={40} />
      <Button title="Sign In" onPress={() => navigation.navigate('MainApp')} />
      <Gap height={30} />
      <Link
        title="Create New Account"
        size={16}
        align="center"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {padding: 40, backgroundColor: 'white', flex: 1},
  title: {maxWidth: 153, fontFamily: 'Nunito-SemiBold', fontSize: 20},
});
