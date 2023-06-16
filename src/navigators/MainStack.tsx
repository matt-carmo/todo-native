

import React from 'react';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoard from '../pages/Dashboard';
import Login from '../pages/Login';
import SignIn from '../pages/SignIn';
import { useDispatch, useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  const dispatch = useDispatch();
  const auth = useSelector(({ auth }) => auth);
  console.log(auth.isAuthenticated);
  return (


    <Stack.Navigator
      initialRouteName='SignIn' ///the name of the initial screen
    >
      {auth.isAuthenticated ? (
        <Stack.Screen name="DashBoard" component={DashBoard} />
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignIn" component={SignIn} />
        </>

      )

      }

    </Stack.Navigator>
  );
}