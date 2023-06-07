

import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoard from './Dashboard';

const Stack = createNativeStackNavigator();

export const  MyStack = () => {
  return (
    <Stack.Navigator>

      <Stack.Screen name="DashBoard" component={DashBoard} />
    </Stack.Navigator>
  );
}