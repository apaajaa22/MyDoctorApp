import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {ChatItem, Gap, Header, InputChat} from '../../components';
import Fire from '../../config/Fire';
import {getChatTime, getData, showError, setDateChat} from '../../Utils';

const Chatting = ({navigation, route}) => {
  const dataDoctor = route.params;
  const [chatContent, setChatContent] = useState('');
  const [user, setUser] = useState({});
  const [chatData, setChatData] = useState([]);

  useEffect(() => {
    getDataFromLocal();
    const chatID = `${user.uid}_${dataDoctor.data.uid}`;
    const urlFirebase = `chatting/${chatID}/allChat/`;
    Fire.database()
      .ref(urlFirebase)
      .on('value', (snapShot) => {
        console.log('data chat : ', snapShot.val());
        if (snapShot.val()) {
          const dataSnapShot = snapShot.val();
          const allDataChat = [];
          Object.keys(dataSnapShot).map((key) => {
            const dataChat = dataSnapShot[key];
            const newDataChat = [];
            Object.keys(dataChat).map((itemChat) => {
              newDataChat.push({
                id: itemChat,
                data: dataChat[itemChat],
              });
            });
            allDataChat.push({
              id: key,
              data: newDataChat,
            });
          });
          setChatData(allDataChat);
        }
      });
  }, [dataDoctor.data.uid, user.uid]);
  const getDataFromLocal = () => {
    getData('user').then((res) => {
      console.log('user login :', res);
      setUser(res);
    });
  };

  const onSend = () => {
    const today = new Date();

    const data = {
      sendBy: user.uid,
      chatDate: today.getTime(),
      chatTime: getChatTime(today),
      chatContent: chatContent,
    };

    const chatID = `${user.uid}_${dataDoctor.data.uid}`;

    const urlFirebase = `chatting/${chatID}/allChat/${setDateChat(today)}`;

    Fire.database()
      .ref(urlFirebase)
      .push(data)
      .then((res) => {
        setChatContent('');
      })
      .catch((err) => showError(err.message));
  };
  return (
    <View style={styles.page}>
      <Header
        onPress={() => navigation.goBack()}
        type="dark-profile"
        name={dataDoctor.data.fullName}
        profession={dataDoctor.data.profession}
        image={{uri: dataDoctor.data.photo}}
      />
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {chatData.map((chat) => {
            return (
              <View key={chat.id}>
                <Text style={styles.date}>{chat.id}</Text>
                <Gap height={20} />
                {chat.data.map((itemChat) => {
                  const isMe = itemChat.data.sendBy === user.uid;
                  return (
                    <ChatItem
                      key={itemChat.id}
                      isMe={isMe}
                      text={itemChat.data.chatContent}
                      date={itemChat.data.chatTime}
                      photo={isMe ? null : {uri: dataDoctor.data.photo}}
                    />
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
      </View>
      <InputChat
        value={chatContent}
        onChangeText={(value) => setChatContent(value)}
        onButtonPress={onSend}
      />
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
