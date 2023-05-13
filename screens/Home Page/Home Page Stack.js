import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './Home Page';
import HomePage2 from './Home Page 2';

const Stack = createNativeStackNavigator();

function HomePageStack() {
  return (
      <Stack.Navigator initialRouteName="Home Page">
        <Stack.Screen name="Home Page" component={HomePage}
            options={{headerShown: false}}
        />
        <Stack.Screen name="Home Page 2" component={HomePage2} 
        options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

export default HomePageStack;
