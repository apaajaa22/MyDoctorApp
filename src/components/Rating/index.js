import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcStar} from '../../assets';

const Rating = () => {
  return (
    <View style={styles.page}>
      <IcStar />
      <IcStar />
      <IcStar />
      <IcStar />
      <IcStar />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  page: {flexDirection: 'row'},
});
