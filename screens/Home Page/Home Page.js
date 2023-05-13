import React from "react";
import {View,Text, StyleSheet, SafeAreaView, ScrollView, Image, Card} from "react-native";
import { FullWindowOverlay } from "react-native-screens";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from "react-native-gesture-handler";
import { Pressable } from "react-native";
import { auth } from '../Firebase/config';
import firebase from 'firebase/compat/app';

const HomePage = () => {
  const navigation = useNavigation()
  // This log outs the user from the application
  // const handleSignOut = () => {
  //   auth 
  //   .signOut()
  //   .then(() => {
  //     navigation.navigate("Login")
  //   })
  //   .catch(error => alert(error.message))
  // }


  
return (
<ScrollView style={styles.container}>
        <View style={styles.svContainer}>


        <Image style ={styles.headerImage} source={{uri:'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Home%20Page%2Fcheese.png?alt=media&token=8f0ec89d-d298-4132-90ba-946af3ee5357'}} />
        {/* <Text style={styles.headerText}>Explore the World of Curated Cheese!</Text> */}

        <Text style={styles.tagline}>A great day starts with a Grate Cheese</Text>

        <View style={styles.homePageContent}>
     

        <View style={styles.firstContent}>

    <Image style ={styles.iconContent} source={{uri:'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Home%20Page%2Fcheese-icon1.png?alt=media&token=2eea75d9-2e4a-4bf7-b426-dd02328656f3'}} />
    <View style={styles.textContainer}>
    <Text style={styles.textContent}>Select your cheese on our product page</Text>
    </View>
</View>

        <View style={styles.secondContent}>

  
        <Image style ={styles.iconContent} source={{uri:'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Home%20Page%2Fcheese-icon2.png?alt=media&token=b1da737b-8852-439f-8f2e-7ac5abb7ae74'}} />
        <View style={styles.textContainer}>
        <Text style={styles.textContent}>Add it on your cart and we will deliver it right away</Text>
        </View>

        </View>

        <View style={styles.thirdContent}>

        <Image style ={styles.iconContent} source={{uri:'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Home%20Page%2Fcheese-icon3.png?alt=media&token=f983c48c-5913-43a9-8da9-0b36d98b69a3'}} />
        <View style={styles.textContainer}>
        <Text style={styles.textContent}>Enjoy your cheese with fruit and wine!</Text>
        </View>
        </View>

        </View>



        <Pressable style={styles.button}>
          <Text 
          onPress={() => navigation.navigate("ProductStackScreen", {screen:'ProductTry'})}
          style={styles.buttonText}>See More</Text>
        </Pressable> 

        </View>

        </ScrollView>

)

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDFCF4',
    flex: 1,
  },
    svContainer:{
    marginVertical: 20,
    marginHorizontal:20,
  },

headerImage: {
    width: 370,
    height: 180,
    alignSelf: 'center',
    // opacity: 0.7,
    borderRadius: 10,
    // backgroundColor: '#000000',
    },
headerText: {
  position: "absolute",
  fontSize: 28,
  fontWeight: "bold",
  color: "#fdfd88",
  padding: 10,
  borderRadius: 8,
  marginTop: 45,
  alignSelf: "center",
  textAlign:'center',
},
tagline: {
    fontSize: 23,
    fontWeight: "bold",
    marginTop: 20,
    color: "#4a4a27",
    letterSpacing: 0.2,
    padding: 5,
    alignSelf: "center",
    textAlign: 'center',
},

descriptionView:{
marginHorizontal: 5,
backgroundColor: 'white',
borderRadius: 15,
padding: 5,
borderColor: 'white',
borderWidth: 1,
shadowColor: '#46443F',
elevation: 10,
},
descriptionText: {
  fontSize: 17,
  color: "#46443F",
  textAlign: 'center',
  paddingHorizontal: 10,
  lineHeight: 25,

},
button: {
  backgroundColor: '#fea104',
  width: '40%',
  padding: 15,
  borderRadius: 40,
  alignSelf:'center',
  marginTop: 20,
},
buttonText:{
  color: 'white',
  fontWeight: 'bold',
  fontSize: 18,
  textAlign: 'center',
},
homePageContent:{
  marginTop: 20,
  gap: 20,
},


iconContent: {
  width: 85,
  height: 85,
},
textContainer:{
  flex: 1,
alignItems: 'center',
},
textContent: {
  fontSize: 18,
  fontWeight: "500",
  color: "#393930",
  padding: 5,
  textAlign: 'center',
  lineHeight: 30,
},

firstContent: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'#fbc601',
height: 100,
borderRadius: 15,
shadowColor: '#46443F',
elevation: 5,
height: 'auto',
},


secondContent: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'#fbc601',
height: 100,
borderRadius: 15,
shadowColor: '#46443F',
elevation: 5,
height: 'auto',
  },

thirdContent: {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'#fbc601',
height: 100,
borderRadius: 15,
shadowColor: '#46443F',
elevation: 5,
height: 'auto',
    },

})


  export default HomePage;