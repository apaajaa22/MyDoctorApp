import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TabMessages = () => {
  return (
    <View style={styles.page}>
      <View style={styles.pageContent}>
        <Text>Message Page</Text>
      </View>
    </View>
  );
};

export default TabMessages;

const styles = StyleSheet.create({
  page: {backgroundColor: '#112340', flex: 1},
  pageContent: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});
