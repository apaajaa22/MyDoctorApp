import React from 'react';
import {ImageBackground, StatusBar, StyleSheet, Text, View} from 'react-native';
import {IcSplashScreen, ILBackground} from '../../assets';
import {Button, Gap} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILBackground} style={styles.background}>
      <View style={styles.page}>
        <View>
          <IcSplashScreen />
          <Gap height={91} />
          <View style={styles.wrapperText}>
            <Text style={styles.title}>
              Konsultasi dengan dokter jadi lebih mudah & fleksibel
            </Text>
          </View>
        </View>
        <View>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate('SignUp')}
          />
          <Gap height={16} />
          <Button
            title="Sign In"
            subButton
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  background: {maxWidth: '100%', height: '100%'},
  page: {padding: 40, justifyContent: 'space-between', flex: 1},
  wrapperText: {maxWidth: 234},
  title: {fontSize: 28, fontFamily: 'Nunito-Regular', color: '#FFFFFF'},
});
