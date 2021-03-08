import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ProfileItems = ({title, desc}) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{desc}</Text>
      </View>
    </View>
  );
};

export default ProfileItems;

const styles = StyleSheet.create({
  page: {borderBottomWidth: 1, borderBottomColor: '#EEEEEE', marginBottom: 16},
  container: {paddingHorizontal: 16},
  title: {fontSize: 14, fontFamily: 'Nunito-Regular', color: '#7D8797'},
  subTitle: {
    fontSize: 14,
    fontFamily: 'Nunito-Regular',
    color: '#112340',
    marginBottom: 16,
  },
});
