/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';

import * as React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from './src/screen/HomeScreen/index';
import AuthScreen from './src/screen/AuthScreen/index';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import CustomNavigationContainerApp from './src/navigation/index';
import TabNavigator from './src/navigation/TabNavigator/index';

class App extends React.Component {
  render () {
    const Tab = createMaterialTopTabNavigator();
      return (
        <>
        <StatusBar style="datk-content"></StatusBar>
          <SafeAreaView style={{flex:1}}>
            <CustomNavigationContainerApp></CustomNavigationContainerApp>
          </SafeAreaView>
      </>
      )
  }
};

export default App;
