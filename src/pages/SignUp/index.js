import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Button, Gap, Header, InputText, Loading} from '../../components';
import {Fire} from '../../config';
import {useForm} from '../../Utils';

const SignUp = ({navigation}) => {
  const [form, setForm] = useForm({
    fullname: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    console.log('submit form: ', form);
    setLoading(true);
    Fire.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then((success) => {
        setLoading(false);
        setForm('reset');
        console.log('success: ', success);
      })
      .catch((err) => {
        setLoading(false);
        const errorMessage = err.message;
        showMessage({
          message: errorMessage,
          type: 'default',
          backgroundColor: '#E06379',
          color: 'white',
        });
      });
  };
  return (
    <>
      <View style={styles.page1}>
        <Header
          icon="back-dark"
          onPress={() => navigation.goBack()}
          title="Daftar Akun"
        />
        <View style={styles.page}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <InputText
              title="Full Name"
              value={form.fullname}
              onChangeText={(value) => setForm('fullname', value)}
            />
            <Gap height={24} />
            <InputText
              title="Pekerjaan"
              value={form.profession}
              onChangeText={(value) => setForm('profession', value)}
            />
            <Gap height={24} />
            <InputText
              title="Email Address"
              value={form.email}
              onChangeText={(value) => setForm('email', value)}
            />
            <Gap height={24} />
            <InputText
              title="Password"
              secureTextEntry
              value={form.password}
              onChangeText={(value) => setForm('password', value)}
            />
          </ScrollView>
          <Gap height={40} />
          <Button title="Continue" onPress={onSubmit} />
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page1: {backgroundColor: 'white', flex: 1},
  page: {padding: 40, backgroundColor: 'white', flex: 1},
});
