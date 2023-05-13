import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductScreen from './Product Screen';
import ProductSoft from './Product Soft';
import ProductHard from './Product Hard';
import ProductVegetarian from './Product Vegetarian';
import ProductFresh from './Product Fresh';
import ProductTry from './ProductTry';

const Stack = createNativeStackNavigator();

function ProductStackScreen() {
  return (
      <Stack.Navigator initialRouteName="">

<Stack.Screen name="Product Try" component={ProductTry} 
        options={{
          headerShown: false}}
        />

        <Stack.Screen name="Product" component={ProductScreen}
            options={{headerShown: false}}
        />

        <Stack.Screen name="Product Fresh" component={ProductFresh} 
        options={{headerShown: false}}
        />

        <Stack.Screen name="Product Soft" component={ProductSoft} 
        options={{headerShown: false}
        }/>  

        <Stack.Screen name="Product Hard" component={ProductHard} 
        options={{headerShown: false}
        }/>  

        <Stack.Screen name="Product Vegetarian" component={ProductVegetarian} 
        options={{headerShown: false}
        }/>



        


      </Stack.Navigator>
  );
}

export default ProductStackScreen;
