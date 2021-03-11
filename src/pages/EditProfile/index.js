import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {Button, Gap, Header, InputText, Profile} from '../../components';
import Fire from '../../config/Fire';
import {getData, storeData} from '../../Utils';
import ImagePicker from 'react-native-image-picker';
import {ILUserNull} from '../../assets';

const EditProfile = ({navigation}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    email: '',
  });
  const [password, setPassword] = useState('');
  const [photo, setPhoto] = useState(ILUserNull);
  const [photoForDB, setPhotoForDB] = useState('');

  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      setPhoto({uri: res.photo});
      setProfile(data);
    });
  }, []);

  const submit = () => {
    console.log(profile);
    const data = profile;
    data.photo = photoForDB;
    Fire.database()
      .ref(`users/${profile.uid}/`)
      .update(data)
      .then(() => {
        console.log('sukses');
        storeData('user', data);
      })
      .catch((err) => {
        showMessage({
          message: err.message,
          type: 'default',
          backgroundColor: '#E06379',
          color: 'white',
        });
      });
  };

  const changeText = (key, value) => {
    setProfile({
      ...profile,
      [key]: value,
    });
  };
  const getImage = () => {
    ImagePicker.launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200},
      (response) => {
        console.log('response: ', response);
        if (response.didCancel || response.error) {
          showMessage({
            message: 'anda belum memilih foto',
            type: 'default',
            backgroundColor: '#E06379',
            color: '#FFFFFF',
          });
        } else {
          const source = {uri: response.uri};
          setPhotoForDB(`data:${response.type};base64, ${response.data}`);
          setPhoto(source);
        }
      },
    );
  };
  return (
    <View style={styles.page}>
      <ScrollView>
        <Header title="Edit Profile" onPress={() => navigation.goBack()} />
        <Profile isRemove photo={photo} onPress={getImage} />
        <Gap height={26} />
        <View style={styles.container}>
          <InputText
            title="Full Name"
            value={profile.fullName}
            onChangeText={(value) => changeText('fullName', value)}
          />
          <Gap height={24} />
          <InputText
            title="Pekerjaan"
            value={profile.profession}
            onChangeText={(value) => changeText('profession', value)}
          />
          <Gap height={24} />
          <InputText title="Email Address" value={profile.email} disable />
          <Gap height={24} />
          <InputText title="Password" value={password} />
          <Gap height={24} />
          <Button title="Save Profile" onPress={submit} />
          <Gap height={20} />
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: '#FFFFFF', flex: 1},
  container: {paddingHorizontal: 40},
});
