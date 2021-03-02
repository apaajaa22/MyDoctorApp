import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '..';
import {IcDokterObat, IcDokterPsikiater, IcDokterUmum} from '../../assets';

const DoctorCategory = ({type, onPress}) => {
  const Icon = () => {
    switch (type) {
      case 'dokter umum':
        return <IcDokterUmum />;
      case 'psikiater':
        return <IcDokterPsikiater />;
      case 'dokter obat':
        return <IcDokterObat />;
      default:
        return <IcDokterUmum />;
    }
  };

  return (
    <View style={styles.content}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
        <Icon type={type} />
        <Gap height={28} />
        <Text style={styles.title}>Saya butuh</Text>
        <Text style={styles.subTitle}>{type}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DoctorCategory;

const styles = StyleSheet.create({
  content: {
    width: 110,
    height: 130,
    backgroundColor: '#EDFCFD',
    paddingLeft: 12,
    paddingRight: 15,
    paddingVertical: 12,
    marginRight: 10,
    borderRadius: 8,
  },
  title: {fontSize: 12, fontFamily: 'Nunito-Regular', color: '#112340'},
  subTitle: {fontSize: 12, fontFamily: 'Nunito-SemiBold', color: '#112340'},
});
