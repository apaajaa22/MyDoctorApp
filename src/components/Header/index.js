import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBackBlack} from '../../assets';

const Header = ({onPress, title}) => {
  return (
    <View style={styles.page}>
      <TouchableOpacity onPress={onPress}>
        <IcBackBlack />
      </TouchableOpacity>
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: -24,
  },
  title: {textAlign: 'center', fontSize: 20, fontFamily: 'Nunito-SemiBold'},
  wrapperTitle: {flex: 1},
});
