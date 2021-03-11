import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '..';
import {ILUserDummy, ILUserNull} from '../../assets';
import {getData} from '../../Utils';

const HomeProfile = ({onPress}) => {
  const [profile, setProfile] = useState({
    photo: ILUserNull,
    fullName: '',
    profession: '',
  });
  useEffect(() => {
    getData('user').then((res) => {
      console.log('res: ', res);
      const data = res;
      data.photo = {uri: res.photo};
      setProfile(res);
    });
  }, []);
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.page} onPress={onPress}>
      <Image source={profile.photo} style={styles.image} />
      <Gap width={12} />
      <View>
        <Text style={styles.name}>{profile.fullName}</Text>
        <Text style={styles.profession}>{profile.profession}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  page: {flexDirection: 'row', alignItems: 'center'},
  image: {width: 46, height: 46, borderRadius: 46 / 2},
  name: {
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
    color: '#112340',
    textTransform: 'capitalize',
  },
  profession: {
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    color: '#7D8797',
    textTransform: 'capitalize',
  },
});
