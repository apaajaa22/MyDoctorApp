import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBackBlack, IcBackLight} from '../../assets';

const IconOnly = ({icon, onPress}) => {
  const Icon = () => {
    switch (icon) {
      case 'back-dark':
        return <IcBackBlack />;
      case 'back-light':
        return <IcBackLight />;
      default:
        return <IcBackBlack />;
    }
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};

export default IconOnly;

const styles = StyleSheet.create({});
