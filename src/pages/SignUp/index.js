import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, InputText} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onPress={() => navigation.goBack()} title="Daftar Akun" />
      <Gap height={40} />
      <InputText title="Full Name" />
      <Gap height={24} />
      <InputText title="Pekerjaan" />
      <Gap height={24} />
      <InputText title="Email Address" />
      <Gap height={24} />
      <InputText title="Password" />
      <Gap height={40} />
      <Button
        title="Continue"
        onPress={() => navigation.navigate('UploadPhoto')}
      />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {padding: 40, backgroundColor: 'white', flex: 1},
});
