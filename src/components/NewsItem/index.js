import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gap} from '..';
import {ILNews1} from '../../assets';

const NewsItem = ({title, date, image}) => {
  return (
    <TouchableOpacity style={styles.page} activeOpacity={0.7}>
      <View style={styles.containerLeft}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{date}</Text>
      </View>
      <Image source={image} style={styles.image} />
    </TouchableOpacity>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  containerLeft: {marginLeft: 16},
  page: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
    alignItems: 'center',
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
  image: {
    width: 80,
    height: 60,
    borderRadius: 10,
    marginBottom: 16,
    marginRight: 16,
  },
});
