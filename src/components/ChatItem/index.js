import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IsMe from './IsMe';
import IsOthers from './IsOthers';

const ChatItem = ({isMe, text, date, photo}) => {
  if (isMe) {
    return <IsMe text={text} date={date} />;
  }
  return <IsOthers text={text} date={date} photo={photo} />;
};

export default ChatItem;

const styles = StyleSheet.create({
  page: {alignItems: 'flex-end', marginBottom: 20, paddingRight: 16},
  chatContainer: {
    backgroundColor: '#EDFCFD',
    maxWidth: '60%',
    padding: 12,
    borderRadius: 10,
    borderBottomRightRadius: 10,
    marginBottom: 8,
  },
  title: {fontSize: 14, fontFamily: 'Nunito-Regular'},
  date: {
    fontSize: 11,
    fontFamily: 'Nunito-Regular',
    color: '#7D8797',
  },
});
