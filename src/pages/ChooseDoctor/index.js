import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  ILDokter1,
  ILDokter4,
  ILDokter5,
  ILDokter6,
  ILDokter7,
  ILDokter8,
} from '../../assets';
import {Header, List} from '../../components';

const ChooseDoctor = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        icon="back-dark"
        onPress={() => navigation.goBack()}
        title="Pilih Dokter Anak"
        type="dark"
      />
      <List
        type="next"
        image={ILDokter4}
        name="Alexander Jannie"
        desc="Wanita"
        onPress={() => navigation.navigate('Chatting')}
      />
      <List
        type="next"
        image={ILDokter5}
        name="John McParker Steve"
        desc="Pria"
      />
      <List
        type="next"
        image={ILDokter6}
        name="Nairobi Putri Hayza"
        desc="Wanita"
      />
      <List type="next" image={ILDokter7} name="James Rivillia" desc="Pria" />
      <List
        type="next"
        image={ILDokter8}
        name="Liu Yue Tian Park"
        desc="Wanita"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {backgroundColor: 'white', flex: 1},
});
