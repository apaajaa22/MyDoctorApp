import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItems} from '../../components';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <Profile name="Nairoby putri Hayza" profession="Dokter Anak" />
      <Gap height={51} />
      <ProfileItems title="Alumnus" desc="Universitas Indonesia, 2020" />
      <ProfileItems title="Tempat Praktik" desc="Rumah Sakit Umum, Bandung" />
      <ProfileItems title="No. STR" desc="0000116622081996" />
      <Gap height={23} />
      <View style={styles.button}>
        <Button title="Start Consultation" />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: '#FFFFFF', flex: 1},
  button: {paddingHorizontal: 40},
});
