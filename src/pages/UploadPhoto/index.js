import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {color} from 'react-native-reanimated';
import {IcBtnAdd, ILUserNull} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';

const UploadPhoto = () => {
  return (
    <View style={styles.page}>
      <Header title="Upload Photo" />
      <View style={styles.wrapperPhoto}>
        <View style={styles.imageBorder}>
          <Image source={ILUserNull} style={styles.image} />
          <View style={styles.btnAdd}>
            <TouchableOpacity activeOpacity={0.7}>
              <IcBtnAdd />
            </TouchableOpacity>
          </View>
        </View>
        <Gap height={26} />
        <View>
          <Text style={styles.name}>Shayna Melinda</Text>
          <Text style={styles.profession}>Product Designer</Text>
        </View>
      </View>
      <Button title="Upload and Continue" />
      <Gap height={30} />
      <Link title="Skip for this" align="center" />
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {padding: 40, flex: 1, backgroundColor: '#FFFFFF'},
  wrapperPhoto: {justifyContent: 'center', alignItems: 'center', flex: 1},
  imageBorder: {
    width: 130,
    height: 130,
    borderWidth: 1,
    borderColor: '#E9E9E9',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 130,
  },
  image: {width: 110, height: 110},
  btnAdd: {position: 'absolute', right: 6, bottom: 8},
  name: {
    fontSize: 24,
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    color: '#112340',
  },
  profession: {
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
    textAlign: 'center',
    color: '#7D8797',
  },
});
