

import React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoard from '../pages/Dashboard';
import Login from '../pages/Login';
import SignIn from '../pages/SignIn';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
    initialRouteName='SignIn' ///the name of the initial screen
    >
      
      <Stack.Screen name="DashBoard" component={DashBoard} />
      <Stack.Screen name="Login" component={Login} /> 
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
}