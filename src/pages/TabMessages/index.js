import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILDokter1, ILDokter2, ILDokter3} from '../../assets';
import {ListDoctor} from '../../components';

const TabMessages = () => {
  return (
    <View style={styles.page}>
      <View style={styles.pageContent}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Messages</Text>
        </View>
        <View>
          <ListDoctor
            image={ILDokter2}
            name="Alexander Jannie"
            desc="Baik ibu, terima kasih banyak atas wakt..."
          />
          <ListDoctor
            image={ILDokter1}
            name="Nairobi Putri Hayza"
            desc="Oh tentu saja tidak karena jeruk it..."
          />
          <ListDoctor
            image={ILDokter3}
            name="John McParker Steve"
            desc="Oke menurut pak dokter bagaimana unt..."
          />
        </View>
      </View>
    </View>
  );
};

export default TabMessages;

const styles = StyleSheet.create({
  page: {backgroundColor: '#112340', flex: 1},
  pageContent: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
    paddingVertical: 30,
  },
  wrapper: {marginLeft: 16},
  title: {fontSize: 20, fontFamily: 'Nunito-SemiBold'},
});
