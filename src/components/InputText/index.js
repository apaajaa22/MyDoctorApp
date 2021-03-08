import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Gap} from '..';

const InputText = ({title, ...rest}) => {
  const [border, setBorder] = useState('#E9E9E9');

  const onFocusForm = () => {
    setBorder('#0BCAD4');
  };

  const onBlurForm = () => {
    setBorder('#E9E9E9');
  };
  return (
    <View>
      <Text style={styles.label}>{title}</Text>
      <Gap height={6} />
      <TextInput
        style={styles.input(border)}
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        {...rest}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Nunito-Regular', color: '#7D8797'},
  input: (border) => ({
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    color: '#112340',
    borderColor: border,
  }),
});
