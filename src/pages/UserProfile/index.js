import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {ILUserNull} from '../../assets';
import {Gap, Header, List, Profile} from '../../components';
import Fire from '../../config/Fire';
import {getData} from '../../Utils';

const UserProfile = ({navigation, onPress}) => {
  const [profile, setProfile] = useState({
    fullName: '',
    profession: '',
    photo: ILUserNull,
  });
  useEffect(() => {
    getData('user').then((res) => {
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(res);
    });
  }, []);
  const signOut = () => {
    Fire.auth()
      .signOut()
      .then((res) => {
        navigation.replace('GetStarted');
      });
  };
  return (
    <View style={styles.page}>
      <Header title="Profile" onPress={() => navigation.goBack()} />
      <Gap height={40} />
      {profile.fullName.length > 0 && (
        <Profile
          name={profile.fullName}
          profession={profile.profession}
          photo={profile.photo}
        />
      )}
      <Gap height={30} />
      <List
        name="Edit Profile"
        desc="Last updated yesterday"
        icon="edit-profile"
        type="next"
        onPress={() => navigation.navigate('EditProfile')}
      />
      <List
        name="Language"
        desc="Available 12 languages"
        icon="language"
        type="next"
      />
      <List name="Rate" desc="On Google Play Store" icon="rate" type="next" />
      <List
        name="Log Out"
        desc="Read our guidelines"
        icon="help"
        type="next"
        onPress={signOut}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: '#FFFFFF', flex: 1},
});
