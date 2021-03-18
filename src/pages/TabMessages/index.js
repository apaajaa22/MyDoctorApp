import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILDokter1, ILDokter2, ILDokter3} from '../../assets';
import {List} from '../../components';
import Fire from '../../config/Fire';
import {getData} from '../../Utils';

const TabMessages = ({navigation}) => {
  const [user, setUser] = useState({});
  const [historyChat, setHistoryChat] = useState([]);

  useEffect(() => {
    getDataFromLocal();

    const rootDB = Fire.database().ref();
    const urlHistory = `messages/${user.uid}/`;
    const messageDB = rootDB.child(urlHistory);

    messageDB.on('value', async (snapShot) => {
      console.log('snapshot : ', snapShot.val());
      if (snapShot.val()) {
        const oldData = snapShot.val();
        const data = [];
        const promises = await Object.keys(oldData).map(async (key) => {
          const urlUidDoctor = `doctors/${oldData[key].uidPartner}`;
          const detailDoctor = await rootDB.child(urlUidDoctor).once('value');
          data.push({
            id: key,
            detailDoctor: detailDoctor.val(),
            ...oldData[key],
          });
        });
        await Promise.all(promises);
        setHistoryChat(data);
      }
    });
  }, [user.uid]);

  const getDataFromLocal = () => {
    getData('user').then((res) => {
      console.log('user login :', res);
      setUser(res);
    });
  };

  return (
    <View style={styles.page}>
      <View style={styles.pageContent}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Messages</Text>
        </View>
        <View>
          {historyChat.map((doctor) => {
            const dataDoctor = {
              id: doctor.detailDoctor.uid,
              data: doctor.detailDoctor,
            };
            return (
              <List
                key={doctor.id}
                image={{uri: doctor.detailDoctor.photo}}
                name={doctor.detailDoctor.fullName}
                desc={doctor.lastContentChat}
                onPress={() => navigation.navigate('Chatting', dataDoctor)}
              />
            );
          })}
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
