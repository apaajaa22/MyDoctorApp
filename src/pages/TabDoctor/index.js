import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  ILDokter1,
  ILDokter2,
  ILDokter3,
  ILNews1,
  ILNews2,
  ILNews3,
} from '../../assets';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';

const TabDoctor = () => {
  return (
    <View style={styles.page}>
      <View style={styles.pageContent}>
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <Gap height={30} />
              <HomeProfile />
            </View>
            <Gap height={30} />
            <View style={styles.container}>
              <Text style={styles.title}>
                Mau konsultasi dengan siapa hari ini?
              </Text>
            </View>
            <Gap height={16} />
            <View style={styles.wrapperDoctorCategory}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Gap width={16} />
                <DoctorCategory type="dokter umum" />
                <DoctorCategory type="psikiater" />
                <DoctorCategory type="dokter obat" />
                <DoctorCategory type="dokter obat" />
              </ScrollView>
            </View>
            <Gap height={30} />
            <View style={styles.container}>
              <Text style={styles.title}>Top Rated Doctors</Text>
              <Gap height={16} />
              <RatedDoctor
                image={ILDokter1}
                name="Alexa Rachel"
                profession="Pediatrician"
                rating
              />
              <RatedDoctor
                image={ILDokter2}
                name="Sunny Frank"
                profession="Dentist"
                rating
              />
              <RatedDoctor
                image={ILDokter3}
                name="Poe Minn"
                profession="Podiatrist"
                rating
              />
              <Text style={styles.title}>Good News</Text>
              <Gap height={16} />
            </View>
            <View style={styles.containerMargin}>
              <NewsItem
                title="Is it safe to stay at home during coronavirus?"
                date="Today"
                image={ILNews1}
              />
              <NewsItem
                title="Consume yellow citrus helps you healthier"
                date="Today"
                image={ILNews2}
              />
              <NewsItem
                title="Learn how to make a proper orange juice at home"
                date="Today"
                image={ILNews3}
              />
            </View>
            <Gap height={30} />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default TabDoctor;

const styles = StyleSheet.create({
  page: {backgroundColor: '#112340', flex: 1},
  pageContent: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    borderBottomLeftRadius: 23,
    borderBottomRightRadius: 23,
  },
  title: {fontSize: 20, fontFamily: 'Nunito-SemiBold', maxWidth: 209},
  wrapperDoctorCategory: {flexDirection: 'row'},
  container: {paddingHorizontal: 16},
});
