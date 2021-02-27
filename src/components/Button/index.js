import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({title, subButton, onPress, type, icon}) => {
  return (
    <TouchableOpacity
      style={styles.page(subButton)}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={styles.title(subButton)}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  page: (subButton) => ({
    maxWidth: '100%',
    height: 50,
    backgroundColor: subButton ? '#FFFFFF' : '#0BCAD4',
    justifyContent: 'center',
    borderRadius: 8,
  }),
  title: (subButton) => ({
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    color: subButton ? '#112340' : '#FFFFFF',
    textAlign: 'center',
  }),
});
