import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Gap} from '..';
import {IcForward} from '../../assets';

const ListDoctor = ({image, name, desc, type, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.page}>
        <Image source={image} style={styles.image} />
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

export default ListDoctor;

const styles = StyleSheet.create({
  page: {
    justifyContent: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    paddingTop: 16,
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginLeft: 16,
    marginBottom: 16,
  },
  container: {flex: 1, marginLeft: 12},
  title: {fontSize: 16, fontFamily: 'Nunito-Regular', color: '#112340'},
  subTitle: {fontSize: 16, fontFamily: 'Nunito-Regular', color: '#7D8797'},
});
