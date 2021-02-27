import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Gap} from '..';

const InputText = ({title}) => {
  return (
    <View>
      <Text style={styles.label}>{title}</Text>
      <Gap height={6} />
      <TextInput style={styles.input} />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Nunito-Regular', color: '#7D8797'},
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    color: '#112340',
    borderColor: '#E9E9E9',
  },
});
