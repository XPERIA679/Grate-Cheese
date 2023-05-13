import React from "react";
import {View,Text, StyleSheet, SafeAreaView, ScrollView, Image} from "react-native";
import { FullWindowOverlay } from "react-native-screens";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from "react-native-gesture-handler";

const HomePage = () => {

const navigation = useNavigation()
  
return (
<ScrollView style={styles.container}>
        <View style={styles.svContainer}>

        <Icon name="arrow-left" style={styles.icon} onPress={()=> navigation.navigate('HomePageStack')} />
        <Text style={styles.headerText}>SHOP NOW!</Text>
        <Text style={styles.tagline}>Have a taste of our created cheese with our hassle-free order system!</Text> 

        <View style={styles.homePage2Content}>
     
        <View style={styles.firstContent}>
        <Image style ={styles.iconContent} source={require("../../image/img/cheese-icon1.png")} />
        <Text style={styles.textContent}>Select your cheese on our product page</Text>
        </View>

        <View style={styles.secondContent}>
        <Image style ={styles.iconContent} source={require("../../image/img/cheese-icon2.png")} />
        <Text style={styles.textContent}>Add it on your cart and we will deliver it{'\n'} right way</Text>
        </View>

        <View style={styles.thirdContent}>
        <Image style ={styles.iconContent} source={require("../../image/img/cheese-icon3.png")} />
        <Text style={styles.textContent}>Enjoy your cheese with fruit and wine!</Text>
        </View>

        </View>

        <View style={styles.iconNavigate}>
        <Icon name="arrow-alt-circle-left" onPress={() => navigation.navigate('HomePageStack')}
        style={styles.icon} />

<Icon name="archway" onPress={() => navigation.navigate('TestingProductStack')}
        style={styles.icon} />

        </View>

        </View>

        </ScrollView>

)

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FDFCF4',
    flex: 1,
  },
  icon: {
    position: 'absolute',
    fontSize: 20,
    color: "#53524F",
    marginLeft: 20,
    marginTop: 40,
    
},
  svContainer:{
    paddingTop: 20,
    paddingHorizontal:20,
  },

headerText: {
  fontSize: 28,
  fontWeight: "bold",
  marginVertical: 20,
  color: "#2A2E2A",
  letterSpacing: 0.2,
  padding: 5,
  alignSelf: "center",
  textAlign: 'center',
},
tagline: {
  fontSize: 17,
  color: "black",
  textAlign: 'center',
  paddingHorizontal: 10,
  lineHeight: 30,
},

homePage2Content:{
  marginTop: 20,
  gap: 20,
},


iconContent: {
  width: 85,
  height: 85,
},
textContent: {
  fontSize: 15,
  fontWeight: "500",
  color: "black",
  padding: 5,
  alignSelf: 'center',
  textAlign: 'center',
  lineHeight: 20,
},

firstContent: {
flexDirection: 'row',
},

secondContent: {
  flexDirection: 'row',
  },

thirdContent: {
    flexDirection: 'row',
    },

iconNavigate:{
  marginTop: 30,
  flexDirection: 'row',
  alignSelf: 'center',
  gap: 50,
},



})


  export default HomePage;