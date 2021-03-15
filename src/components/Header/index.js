import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Gap} from '..';
import Button from '../Button';
import DarkProfile from './DarkProfile';

const Header = ({onPress, title, type, name, profession, image}) => {
  if (type === 'dark-profile') {
    return (
      <DarkProfile
        name={name}
        profession={profession}
        image={image}
        title={title}
        onPress={onPress}
      />
    );
  }
  return (
    <View style={styles.page(type)}>
      <Button
        icon={type === 'dark' ? 'back-light' : 'back-dark'}
        type="icon-only"
        onPress={onPress}
      />
      <View style={styles.wrapperTitle}>
        <Text style={styles.title(type)}>{title}</Text>
      </View>
      <Gap width={30} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  page: (type) => ({
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: type === 'dark' ? '#112340' : '#FFFFFF',
    borderBottomLeftRadius: type === 'dark' ? 20 : 0,
    borderBottomRightRadius: type === 'dark' ? 20 : 0,
  }),
  title: (type) => ({
    fontSize: 20,
    textTransform: 'capitalize',
    fontFamily: 'Nunito-SemiBold',
    color: type === 'dark' ? '#FFFFFF' : '#112340',
  }),
  wrapperTitle: {flex: 1, alignItems: 'center'},
});
