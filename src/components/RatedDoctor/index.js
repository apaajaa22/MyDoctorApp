import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Rating} from '..';
import {ILDokter1} from '../../assets';

const RatedDoctor = ({onPress, image, name, profession, rating}) => {
  return (
    <TouchableOpacity style={styles.page} activeOpacity={0.7} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.container}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.profession}>{profession}</Text>
      </View>
      {rating && <Rating rating={rating} />}
    </TouchableOpacity>
  );
};

export default RatedDoctor;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    alignItems: 'center',
  },
  container: {flex: 1, marginLeft: 12},
  image: {width: 50, height: 50, borderRadius: 50 / 2},
  name: {fontSize: 16, fontFamily: 'Nunito-SemiBold', color: '#112340'},
  profession: {fontSize: 12, fontFamily: 'Nunito-SemiBold', color: '#7D8797'},
});
