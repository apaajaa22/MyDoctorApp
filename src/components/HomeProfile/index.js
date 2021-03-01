import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '..';
import {ILUserDummy} from '../../assets';

const HomeProfile = () => {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.page}>
      <Image source={ILUserDummy} style={styles.image} />
      <Gap width={12} />
      <View>
        <Text style={styles.name}>Shayna Melinda</Text>
        <Text style={styles.profession}>Product Designer</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  page: {flexDirection: 'row', alignItems: 'center'},
  image: {width: 46, height: 46, borderRadius: 46 / 2},
  name: {fontSize: 16, fontFamily: 'Nunito-SemiBold', color: '#112340'},
  profession: {fontSize: 12, fontFamily: 'Nunito-Regular', color: '#7D8797'},
});
