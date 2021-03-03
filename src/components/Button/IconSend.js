import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcSendDark, IcSendLight} from '../../assets';

const IconSend = ({disable, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={styles.page(disable)}>
        {disable && <IcSendDark />}
        {!disable && <IcSendLight />}
      </View>
    </TouchableOpacity>
  );
};

export default IconSend;

const styles = StyleSheet.create({
  page: (disable) => ({
    height: 45,
    width: 45,
    backgroundColor: disable ? '#EDEEF0' : '#0066CB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }),
});
