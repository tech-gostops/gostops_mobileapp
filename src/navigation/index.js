import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator/index'
import * as React from 'react';

export default function CustomNavigationContainerApp() {
    return (
        <NavigationContainer>
            <TabNavigator></TabNavigator>
        </NavigationContainer>
    );
  }