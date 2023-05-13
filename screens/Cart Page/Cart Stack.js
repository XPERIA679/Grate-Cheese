import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddToCart from './AddToCart';
import TryAddToCart from './TryAddToCart';


const Stack = createNativeStackNavigator();

function AddToCartStack() {
  return (
      <Stack.Navigator initialRouteName="TryAddToCart">
        <Stack.Screen name="CartStack" component={AddToCart}
            options={{headerShown: false}}
        />



<Stack.Screen name="TryAddToCart" component={TryAddToCart}
        initialParams={{ cartItems: [] }}
        options={{headerShown: false}}
      />








      </Stack.Navigator>
  );
}

export default AddToCartStack;
