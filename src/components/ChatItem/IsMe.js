import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const isMe = () => {
  return (
    <View style={styles.page}>
      <View style={styles.chatContainer}>
        <Text style={styles.title}>
          Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
        </Text>
      </View>
      <Text style={styles.date}>4.20 AM</Text>
    </View>
  );
};

export default isMe;

const styles = StyleSheet.create({
  page: {alignItems: 'flex-end', marginBottom: 20, paddingRight: 16},
  chatContainer: {
    backgroundColor: '#EDFCFD',
    maxWidth: '60%',
    padding: 12,
    borderRadius: 10,
    borderBottomRightRadius: 0,
    marginBottom: 8,
  },
  title: {fontSize: 14, fontFamily: 'Nunito-Regular'},
  date: {
    fontSize: 11,
    fontFamily: 'Nunito-Regular',
    color: '#7D8797',
  },
});
