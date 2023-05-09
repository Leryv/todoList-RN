// Plugin
import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// Data Menu
import {Menu} from './DataMenu';

// Component
import TabMenu from './TabMenu';

const Navbar = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          ...styles.mainNav,
        },
      }}>
      {Menu.map(({id, name, component, icon}) => (
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => (
              <TabMenu focused={focused} title={name} icon={icon} />
            ),
          }}
          name={name}
          component={component}
          key={id}
        />
      ))}
    </Tab.Navigator>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  mainNav: {
    elevation: 5,
    borderRadius: 24,
    backgroundColor: 'rgb(45,151,218)',
    position: 'absolute',
    marginVertical: hp('3%'),
    marginHorizontal: wp('5%'),
    height: hp('9%'),
    width: wp('91.5%'),
  },
});
