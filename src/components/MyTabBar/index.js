import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IcDoctorOff,
  IcDoctorOn,
  IcHospitalsOff,
  IcHospitalsOn,
  IcMessagesOn,
  IcMessagesOff,
} from '../../assets';

const MyTabBar = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const Icon = ({label, focus}) => {
    switch (label) {
      case 'Doctor':
        return focus ? <IcDoctorOn /> : <IcDoctorOff />;
      case 'Messages':
        return focus ? <IcMessagesOn /> : <IcMessagesOff />;
      case 'Hospitals':
        return focus ? <IcHospitalsOn /> : <IcHospitalsOff />;
      default:
        return <IcDoctorOn />;
    }
  };

  return (
    <View style={styles.page}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            activeOpacity={0.7}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <View style={styles.wrapperTab}>
              <Icon label={label} focus={isFocused} />
              <Text style={{color: isFocused ? '#0BCAD4' : '#495A75'}}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTabBar;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 53,
    backgroundColor: '#112340',
    height: 62,
  },
  wrapperTab: {alignItems: 'center'},
});
