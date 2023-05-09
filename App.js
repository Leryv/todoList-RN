import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome} from './src/screens';
import Navbar from './src/components/Navbar';

const App = () => {
  const Stack = createNativeStackNavigator();
  const StackMenu = [
    {
      id: 1,
      name: 'Welcome',
      component: Welcome,
    },
    {
      id: 2,
      name: 'Navbar',
      component: Navbar,
    },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Welcome">
        {StackMenu.map(({id, name, component}) => (
          <Stack.Screen name={name} component={component} key={id} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
