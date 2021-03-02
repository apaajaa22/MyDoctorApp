import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILHospital1} from '../../assets';

const ListHospital = ({image, name, address}) => {
  return (
    <View style={styles.page}>
      <Image source={image} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.title}>Rumah Sakit</Text>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{address}</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  image: {
    width: 80,
    height: 60,
    marginLeft: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  container: {flex: 1, marginLeft: 10},
  title: {fontSize: 16, fontFamily: 'Nunito-Regular', color: '#112340'},
  subTitle: {fontSize: 12, fontFamily: 'Nunito-Light', color: '#7D8797'},
});
