import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '..';
import {IcBtnRemove, ILUserDummy} from '../../assets';

const Profile = ({name, profession, isRemove, photo, onPress}) => {
  return (
    <View style={styles.page}>
      {!isRemove && (
        <View style={styles.borderImage}>
          <Image source={photo} style={styles.image} />
          {isRemove && <IcBtnRemove style={styles.btn} />}
        </View>
      )}

      {isRemove && (
        <TouchableOpacity
          style={styles.borderImage}
          activeOpacity={0.7}
          onPress={onPress}>
          <Image source={photo} style={styles.image} />
          {isRemove && <IcBtnRemove style={styles.btn} />}
        </TouchableOpacity>
      )}
      <Gap height={16} />
      {name && (
        <View>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subTitle}>{profession}</Text>
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {alignItems: 'center'},
  borderImage: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    borderWidth: 1,
    alignItems: 'center',
    borderColor: '#E9E9E9',
    justifyContent: 'center',
  },
  image: {width: 110, height: 110, borderRadius: 100 / 2},
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  subTitle: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    color: '#7D8797',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  btn: {position: 'absolute', right: 6, bottom: 8},
});
