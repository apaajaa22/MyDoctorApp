import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IcBtnAdd, IcBtnRemove, ILUserNull} from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import {Fire} from '../../config';
import {storeData} from '../../Utils';

const UploadPhoto = ({navigation, route}) => {
  const {fullName, profession, uid} = route.params;
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILUserNull);
  const [photoForDB, setPhotoForDB] = useState('');
  const getImage = () => {
    ImagePicker.launchImageLibrary(
      {quality: 0.5, maxWidth: 200, maxHeight: 200},
      (response) => {
        console.log('response: ', response);
        if (response.didCancel || response.error) {
          showMessage({
            message: 'anda belum memilih foto',
            type: 'default',
            backgroundColor: '#E06379',
            color: '#FFFFFF',
          });
        } else {
          const source = {uri: response.uri};

          setPhotoForDB(`data:${response.type};base64, ${response.data}`);
          setPhoto(source);
          setHasPhoto(true);
        }
      },
    );
  };
  const uploadAndContinue = () => {
    Fire.database()
      .ref('users/' + uid + '/')
      .update({photo: photoForDB});

    const data = route.params;
    data.photo = photoForDB;

    storeData('user', data);

    navigation.replace('MainApp');
  };
  return (
    <View style={styles.page}>
      <Header
        onPress={() => navigation.goBack()}
        title="Upload Photo"
        icon="back-dark"
      />
      <View style={styles.page1}>
        <View style={styles.wrapperPhoto}>
          <View style={styles.imageBorder}>
            <Image source={photo} style={styles.image} />
            <View style={styles.btnAdd}>
              {hasPhoto && (
                <TouchableOpacity activeOpacity={0.7} onPress={getImage}>
                  <IcBtnRemove />
                </TouchableOpacity>
              )}
              {!hasPhoto && (
                <TouchableOpacity activeOpacity={0.7} onPress={getImage}>
                  <IcBtnAdd />
                </TouchableOpacity>
              )}
            </View>
          </View>
          <Gap height={26} />
          <View>
            <Text style={styles.name}>{fullName}</Text>
            <Text style={styles.profession}>{profession}</Text>
          </View>
        </View>
        <Button
          disable={!hasPhoto}
          title="Upload and Continue"
          onPress={uploadAndContinue}
        />
        <Gap height={30} />
        <Link title="Skip for this" align="center" />
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#FFFFFF'},
  page1: {padding: 40, flex: 1, backgroundColor: '#FFFFFF'},
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
  image: {width: 110, height: 110, borderRadius: 110 / 2},
  btnAdd: {position: 'absolute', right: 6, bottom: 8},
  name: {
    fontSize: 24,
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    color: '#112340',
    textTransform: 'capitalize',
  },
  profession: {
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
    textAlign: 'center',
    color: '#7D8797',
    textTransform: 'capitalize',
  },
});
