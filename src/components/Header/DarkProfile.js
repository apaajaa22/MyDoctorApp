import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Button} from '..';

const DarkProfile = ({title, onPress, name, profession, image}) => {
  return (
    <View style={styles.page}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.container}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{profession}</Text>
      </View>
      <Image source={image} style={styles.image} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#112340',
    height: 107,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  container: {flex: 1},
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    color: '#8092AF',
  },
  image: {width: 46, height: 46, borderRadius: 46 / 2},
});
