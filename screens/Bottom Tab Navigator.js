import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ProductStackScreen from './Product Screen/Product Stack';
import LoginStack from './Login Page/Login Stack';
import HomePageStack from './Home Page/Home Page Stack';
import AboutUs from './About Page/AboutUs';
import AddToCartStack from './Cart Page/Cart Stack'


const Tab = createBottomTabNavigator();

export default function BottomTabNavigation() {
  return (

    <NavigationContainer>
      
      <Tab.Navigator initialRouteName='Login Stack'
  screenOptions={{
    // headerShown: false,
    tabBarStyle: { backgroundColor: 'white' },
    tabBarActiveTintColor: 'red',
    tabBarInactiveTintColor: 'green',
  }}>

    <Tab.Screen
  name="Login Stack"
  component={LoginStack}
  options={{
    headerShown: false,
    tabBarLabel: 'Login',
    tabBarStyle: {display: 'none'},
    tabBarButton: () => null,
    tabBarIcon: () => (
      <Icon
        name="sign-in-alt"
        style={styles.icon}
      />
    ),
  }}
/>


<Tab.Screen
  name='Home Page Stack Screen'
  component={HomePageStack}
  options={{
    tabBarLabel: 'Home',
    tabBarIcon: () => (
      <Icon
        name="home"
        style={styles.icon}
      />
    ),
    headerStyle: {
      backgroundColor: '#fbc601',
      height: 100,
      },

      headerTitle: () => (
        <Image style ={styles.image} source={{uri:'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Logo%2Fgratee.png?alt=media&token=8c550c31-5297-4d1f-90cb-0d0d4a24219d'}} />
        ),
    headerTitleAlign: 'center',
    headerBackVisible: false,
  }}
/>


    <Tab.Screen name="ProductStackScreen" component={ProductStackScreen}
            options={{
            tabBarLabel: 'Products',
            // tabBarStyle: {display: 'none'},
            // tabBarButton: () => null,
            tabBarIcon: () => (
            <Icon
                name="cheese" 
                style={styles.icon}
            />
            ),
            headerStyle: {
              backgroundColor: '#fbc601',
              height: 100,
              },
                headerTitle: () => (
                  <Image style ={styles.image} source={{uri:'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Logo%2Fgratee.png?alt=media&token=8c550c31-5297-4d1f-90cb-0d0d4a24219d'}} />
                  ),
                headerTitleAlign: 'center',
                headerBackVisible: false,
            }}
/>

<Tab.Screen name="AddToCartStack" component={AddToCartStack} 
            options={{
              tabBarLabel: 'Shopping Cart',
            //  tabBarStyle: {display: 'none'},
            // tabBarButton: () => null,
              tabBarIcon: () => (
              <Icon
                  name="shopping-basket" 
                  style={styles.icon}
              />
              ),
                // headerLeft: () => (
                //     <Icon
                //     name="chevron-left" 
                //     style={StyleSheet.compose(styles.icon, {color: "#ffffff", marginLeft: 20, fontSize: 25})}
                //     />
                //     ),
                    headerStyle: {
                    backgroundColor: '#fbc601',
                    height: 100,
                    },
                    headerTitle: () => (
                      <Image style ={styles.image} source={{uri:'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Logo%2Fgratee.png?alt=media&token=8c550c31-5297-4d1f-90cb-0d0d4a24219d'}} />
                      ),
                    
                    headerTitleAlign: 'center',
                    headerBackVisible: false,
                      }} />

<Tab.Screen name="AboutStackScreen" component={AboutUs} 
            options={{
                tabBarLabel: 'About',
                tabBarIcon: () => (
                <Icon
                    name="user-tie" 
                    style={styles.icon}
                />
                ),

                headerStyle: {
                  backgroundColor: '#fbc601',
                  height: 100,
                  },
                  headerTitle: () => (
                    <Image style ={styles.image} source={{uri:'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Logo%2Fgratee.png?alt=media&token=8c550c31-5297-4d1f-90cb-0d0d4a24219d'}} />
                    ),
                    headerTitleAlign: 'center',
                    headerBackVisible: false,
                      }} />

                                          
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create ({
    icon: {
      fontSize: 25,
      color: "#fed94f",
      marginLeft: 5,
      
  },
  image: {
    width: 250,
    height: 70,
  },
  });