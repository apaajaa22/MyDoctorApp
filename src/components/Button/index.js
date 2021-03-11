import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IconOnly from './IconOnly';
import IconSend from './IconSend';

const Button = ({title, subButton, onPress, type, icon, disable}) => {
  if (type === 'btn-send') {
    return <IconSend disable={disable} onPress={onPress} />;
  }
  if (type === 'icon-only') {
    return <IconOnly icon={icon} onPress={onPress} />;
  }
  if (disable) {
    return (
      <View style={styles.disableBg} activeOpacity={0.8}>
        <Text style={styles.disableText}>{title}</Text>
      </View>
    );
  }
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
  disableBg: {
    maxWidth: '100%',
    height: 50,
    justifyContent: 'center',
    borderRadius: 8,
    backgroundColor: '#EDEEF0',
  },
  disableText: {
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    color: '#B1B7C2',
  },
  title: (subButton) => ({
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    color: subButton ? '#112340' : '#FFFFFF',
    textAlign: 'center',
  }),
});
