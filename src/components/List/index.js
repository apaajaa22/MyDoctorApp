import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Gap} from '..';
import {
  IcEditProfile,
  IcForward,
  IcHelp,
  IcLanguage,
  IcRate,
} from '../../assets';

const List = ({image, name, desc, type, onPress, icon}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IcEditProfile />;
    }
    if (icon === 'language') {
      return <IcLanguage />;
    }
    if (icon === 'rate') {
      return <IcRate />;
    }
    if (icon === 'help') {
      return <IcHelp />;
    }
    return <IcEditProfile />;
  };
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.page}>
        {icon ? <Icon /> : <Image source={image} style={styles.image} />}
        <View style={styles.container}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>{desc}</Text>
        </View>
        {type === 'next' && <IcForward />}
        <Gap width={16} />
      </View>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingTop: 16,
    paddingBottom: 10,
    marginLeft: 16,
    alignItems: 'center',
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
  container: {flex: 1, marginLeft: 12},
  title: {fontSize: 16, fontFamily: 'Nunito-Regular', color: '#112340'},
  subTitle: {fontSize: 16, fontFamily: 'Nunito-Regular', color: '#7D8797'},
});
