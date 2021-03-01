import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ILNews1} from '../../assets';

const NewsItem = ({title, date, image}) => {
  return (
    <TouchableOpacity style={styles.page} activeOpacity={0.7}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{date}</Text>
      </View>
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
    maxWidth: 177,
    color: '#112340',
  },
  subTitle: {
    fontSize: 12,
    fontFamily: 'Nunito-Regular',
    maxWidth: 177,
    color: '#7D8797',
  },
  image: {width: 80, height: 60, borderRadius: 10},
});
