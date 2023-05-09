import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import AppTheme from '../../styles';

const ButtonIcon = ({source, color}) => {
  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      marginHorizontal: 12,
      justifyContent: 'center',
    },
    content: {
      padding: 10,
      backgroundColor: color || AppTheme.color.primary,
      borderRadius: 24,
    },
  });

  return (
    <View style={styles.button}>
      <TouchableOpacity style={styles.content}>
        <Image source={source} />
      </TouchableOpacity>
    </View>
  );
};

export default ButtonIcon;
