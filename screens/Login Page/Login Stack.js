import React, {useEffect, useState} from 'react';
import { firebase } from '../Firebase/config';
import 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Login';
import RegistrationScreen from './Registration';

const Stack = createNativeStackNavigator();

function LoginStack() {



  return (
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="Login" component={LoginScreen}
            options={{headerShown: false}}
        />
        <Stack.Screen name="Register" component={RegistrationScreen} 
        options={{headerShown: false}}/>
      </Stack.Navigator>
  );

}

export default LoginStack;
