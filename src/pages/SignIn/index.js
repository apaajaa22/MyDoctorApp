import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {IcSplashScreen} from '../../assets';
import {Button, Gap, InputText, Link, Loading} from '../../components';
import Fire from '../../config/Fire';
import {storeData, useForm} from '../../Utils';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);

  const login = () => {
    console.log(form);
    setLoading(true);
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        console.log('sukses login: ', res);
        setLoading(false);
        Fire.database()
          .ref(`users/${res.user.uid}/`)
          .once('value')
          .then((resDB) => {
            console.log('resDB :', resDB.val());
            if (resDB.val()) {
              storeData('user', resDB.val());
              navigation.replace('MainApp');
            }
          });
      })
      .catch((err) => {
        setLoading(false);
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: '#E06379',
          color: 'white',
        });
      });
  };
  return (
    <>
      <View style={styles.page}>
        <IcSplashScreen />
        <Gap height={40} />
        <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
        <Gap height={40} />
        <InputText
          title="Email Address"
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <Gap height={24} />
        <InputText
          title="Password"
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={10} />
        <Link title="Forgot My Password" size={12} align="flex-start" />
        <Gap height={40} />
        <Button title="Sign In" onPress={login} />
        <Gap height={30} />
        <Link
          title="Create New Account"
          size={16}
          align="center"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
      {loading && <Loading />}
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {padding: 40, backgroundColor: 'white', flex: 1},
  title: {maxWidth: 153, fontFamily: 'Nunito-SemiBold', fontSize: 20},
});
