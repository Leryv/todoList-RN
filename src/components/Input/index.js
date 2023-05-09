import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import AppTheme from '../../styles';

const Input = ({placeholder, borderColor}) => {
  const styles = StyleSheet.create({
    input: {
      borderColor: borderColor || AppTheme.color.primary,
      borderWidth: 2,
      padding: 12,
      paddingHorizontal: 24,
      borderRadius: 18,
      width: wp('70%'),
      height: hp('8%'),
    },
  });
  return <TextInput style={styles.input} placeholder={placeholder} />;
};

export default Input;
