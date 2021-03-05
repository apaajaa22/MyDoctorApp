import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, InputText, Profile} from '../../components';

const EditProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView>
        <Header title="Edit Profile" onPress={() => navigation.goBack()} />
        <Profile />
        <Gap height={26} />
        <View style={styles.container}>
          <InputText title="Full Name" />
          <Gap height={24} />
          <InputText title="Pekerjaan" />
          <Gap height={24} />
          <InputText title="Email Address" />
          <Gap height={24} />
          <InputText title="Password" />
          <Gap height={24} />
          <Button title="Save Profile" />
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
