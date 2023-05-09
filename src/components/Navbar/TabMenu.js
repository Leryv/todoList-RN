import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TabMenu = ({focused, title, icon}) => {
  const color = focused ? '#000' : '#fff';
  const styles = StyleSheet.create({
    menuWrapper: {alignItems: 'center'},
    icon: {
      color: color,
    },
    text: {
      color: color,
      fontFamily: 'Poppins-Bold',
    },
  });
  return (
    <View style={styles.menuWrapper}>
      <Icon
        name={focused ? icon : `${icon}-outline`}
        size={20}
        style={styles.icon}
      />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default TabMenu;
