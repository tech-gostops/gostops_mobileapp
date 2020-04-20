import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from '../../screen/HomeScreen/index';
import AuthScreen from '../../screen/AuthScreen/index';
import * as React from 'react';

export default function TabNavigator() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: '#694fad' }}
        tabBarPosition="bottom"
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={AuthScreen} />
    </Tab.Navigator>
  );
}