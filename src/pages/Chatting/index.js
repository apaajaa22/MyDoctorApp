import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILDokter6} from '../../assets';
import {ChatItem, Header, InputChat} from '../../components';

const Chatting = () => {
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        name="Nairobi Putri Hayza"
        profession="Dokter Anak"
        image={ILDokter6}
      />
      <Text style={styles.date}>Senin, 21 Maret, 2020</Text>
      <View style={styles.container}>
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </View>
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#FFFFFF'},
  date: {
    fontSize: 11,
    fontFamily: 'Nunito-Regular',
    color: '#7D8797',
    textAlign: 'center',
    marginTop: 20,
  },
  container: {flex: 1},
});
