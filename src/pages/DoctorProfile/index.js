import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, Profile, ProfileItems} from '../../components';

const DoctorProfile = ({navigation, route}) => {
  const dataDoctor = route.params;
  return (
    <View style={styles.page}>
      <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
      <Profile
        name={dataDoctor.data.fullName}
        profession={dataDoctor.data.profession}
        photo={{uri: dataDoctor.data.photo}}
      />
      <Gap height={51} />
      <ProfileItems title="Alumnus" desc={dataDoctor.data.university} />
      <ProfileItems
        title="Tempat Praktik"
        desc={dataDoctor.data.hospital_address}
      />
      <ProfileItems title="No. STR" desc={dataDoctor.data.str_number} />
      <Gap height={23} />
      <View style={styles.button}>
        <Button
          title="Start Consultation"
          onPress={() => navigation.navigate('Chatting', dataDoctor)}
        />
      </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {backgroundColor: '#FFFFFF', flex: 1},
  button: {paddingHorizontal: 40},
});
