import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button} from '..';

const InputChat = ({value, onButtonPress, ...rest}) => {
  return (
    <View style={styles.page}>
      <TextInput
        placeholder="Tulis pesan untuk Nairobi"
        style={styles.input}
        value={value}
        {...rest}
      />
      <Button
        type="btn-send"
        disable={value.length < 1}
        onPress={onButtonPress}
      />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#EDEEF0',
    padding: 14,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    height: 45,
  },
});
