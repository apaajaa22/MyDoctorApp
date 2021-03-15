import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {
  DoctorCategory,
  Gap,
  HomeProfile,
  NewsItem,
  RatedDoctor,
} from '../../components';
import Fire from '../../config/Fire';
import {showError} from '../../Utils';

const TabDoctor = ({navigation}) => {
  const [news, setNews] = useState([]);
  const [doctorCategory, setDoctorCategory] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getCategoryDoctor();
    topRatedDoctor();
    getNews();
  }, []);

  const getNews = () => {
    Fire.database()
      .ref('news/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter((el) => el !== null);
          setNews(filterData);
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };
  const getCategoryDoctor = () => {
    Fire.database()
      .ref('category_doctor/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          const data = res.val();
          const filterData = data.filter((el) => el !== null);
          setDoctorCategory(filterData);
          console.log('filter :', filterData);
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };

  const topRatedDoctor = () => {
    Fire.database()
      .ref('doctors/')
      .orderByChild('rate')
      .limitToLast(3)
      .once('value')
      .then((res) => {
        if (res.val()) {
          // setDoctorCategory(res.val());
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((key) => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setDoctors(data);
        }
      })
      .catch((err) => {
        showError(err.message);
      });
  };
  return (
    <View style={styles.page}>
      <View style={styles.pageContent}>
        <View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
              <Gap height={30} />
              <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
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
                {doctorCategory.map((item) => {
                  return (
                    <DoctorCategory
                      key={`category-${item.id}`}
                      type={item.category}
                      onPress={() => navigation.navigate('ChooseDoctor', item)}
                    />
                  );
                })}
              </ScrollView>
            </View>
            <Gap height={30} />
            <View style={styles.container}>
              <Text style={styles.title}>Top Rated Doctors</Text>
              <Gap height={16} />
              {doctors.map((doctor) => {
                return (
                  <RatedDoctor
                    image={{uri: doctor.data.photo}}
                    name={doctor.data.fullName}
                    profession={doctor.data.profession}
                    rating
                    onPress={() => navigation.navigate('DoctorProfile', doctor)}
                  />
                );
              })}

              <Text style={styles.title}>Good News</Text>
              <Gap height={16} />
            </View>
            <View style={styles.containerMargin}>
              {news.map((item) => {
                return (
                  <NewsItem
                    key={item.id}
                    title={item.title}
                    date={item.date}
                    image={item.image}
                  />
                );
              })}
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
