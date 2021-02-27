import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Link = ({title, align, size, onPress}) => {
  return (
    <TouchableOpacity style={styles.page(align)} onPress={onPress}>
      <View style={styles.borderBottom}>
        <Text style={styles.title(size)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Link;

const styles = StyleSheet.create({
  page: (align) => ({
    alignItems: align,
  }),
  title: (size) => ({
    fontSize: size,
    fontFamily: 'Nunito-Regular',
    color: '#7D8797',
  }),
  borderBottom: {borderBottomColor: '#7D8797', borderBottomWidth: 1},
});
