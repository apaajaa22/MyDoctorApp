import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {useDispatch, useSelector} from 'react-redux';
import {IcSplashScreen} from '../../assets';
import {Button, Gap, InputText, Link} from '../../components';
import Fire from '../../config/Fire';
import {showError, storeData, useForm} from '../../Utils';

const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({email: '', password: ''});
  const dispatch = useDispatch();

  const stateGlobal = useSelector((state) => state);
  console.log('stateGlobal', stateGlobal);

  const login = () => {
    console.log(form);
    dispatch({type: 'SET_LOADING', value: true});
    Fire.auth()
      .signInWithEmailAndPassword(form.email, form.password)
      .then((res) => {
        console.log('sukses login: ', res);
        dispatch({type: 'SET_LOADING', value: false});
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
        dispatch({type: 'SET_LOADING', value: false});
        showError(err.message);
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
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {padding: 40, backgroundColor: 'white', flex: 1},
  title: {maxWidth: 153, fontFamily: 'Nunito-SemiBold', fontSize: 20},
});
