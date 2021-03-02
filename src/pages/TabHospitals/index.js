import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {
  ILCover,
  ILHospital1,
  ILHospital2,
  ILHospital3,
} from '../../assets/Illustration';
import {Gap, ListHospital} from '../../components';

const TabHospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILCover} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.subTitle}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.contentWrapper}>
          <Gap height={30} />
          <ListHospital
            image={ILHospital1}
            name="Citra Bunga Merdeka"
            address="Jln. Surya Sejahtera 20"
          />
          <ListHospital
            image={ILHospital2}
            name="Happy Family & Kids"
            address="Jln. Surya Sejahtera 20"
          />
          <ListHospital
            image={ILHospital3}
            name="Tingkatan Paling Atas"
            address="Jln. Surya Sejahtera 20"
          />
        </View>
      </View>
    </View>
  );
};

export default TabHospitals;

const styles = StyleSheet.create({
  page: {flex: 1},
  background: {
    maxWidth: '100%',
    height: 250,
    alignItems: 'center',
    paddingTop: 30,
  },
  title: {fontSize: 20, fontFamily: 'Nunito-SemiBold', color: '#FFFFFF'},
  subTitle: {fontSize: 14, fontFamily: 'Nunito-Regular', color: '#FFFFFF'},
  content: {backgroundColor: '#112340', flex: 1},
  contentWrapper: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 23,
    marginTop: -18,
  },
});
