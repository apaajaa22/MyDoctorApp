import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {IcBackBlack, IcBackLight} from '../../assets';

const IconOnly = ({icon, onPress}) => {
  const Icon = () => {
    if (icon === 'back-dark') {
      return <IcBackBlack />;
    }
    if (icon === 'back-light') {
      return <IcBackLight />;
    }
    return <IcBackBlack />;
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon />
    </TouchableOpacity>
  );
};
export default IconOnly;

const styles = StyleSheet.create({});
