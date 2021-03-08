import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';

const Loading = () => {
  return (
    <View style={styles.page}>
      <ActivityIndicator size="large" color="#0BCAD4" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  page: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
  },
});
