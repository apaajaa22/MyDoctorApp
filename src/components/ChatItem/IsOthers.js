import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ILDokter1} from '../../assets';

const IsOthers = () => {
  return (
    <View style={styles.page}>
      <Image source={ILDokter1} style={styles.image} />
      <View>
        <View style={styles.chatContainer}>
          <Text style={styles.title}>
            Oh tentu saja tidak karena jeruk itu sangat sehat...
          </Text>
        </View>
        <Text style={styles.date}>4.20 AM</Text>
      </View>
    </View>
  );
};

export default IsOthers;

const styles = StyleSheet.create({
  page: {
    alignItems: 'flex-end',
    marginBottom: 20,
    paddingLeft: 16,
    flexDirection: 'row',
  },
  image: {height: 30, width: 30, borderRadius: 30 / 2, marginRight: 12},
  chatContainer: {
    backgroundColor: '#0BCAD4',
    maxWidth: '80%',
    padding: 12,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    marginBottom: 8,
  },
  title: {fontSize: 14, fontFamily: 'Nunito-Regular', color: '#FFFFFF'},
  date: {
    fontSize: 11,
    fontFamily: 'Nunito-Regular',
    color: '#7D8797',
  },
});
