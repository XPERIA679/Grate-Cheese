import { 
  StyleSheet,
   Text, 
   TextInput, 
   TouchableOpacity, 
   View, 
   ScrollView, 
   Image } from 'react-native'
import React, {useEffect, useState} from 'react';
import { auth } from '../Firebase/config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useNavigation } from '@react-navigation/native';
import Button from '../Components/Button';
import Input from '../Components/Input';

const LoginScreen = () => {

  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setpassword] = useState('')
  const [loading, setLoading] = React.useState(false);


  // Check if the user account is authenticated from firebase
useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged(user => {
    if (user) {

    }
  })

  return unsubscribe
}, [])

 // Validates login button. When pressed, it will validate account from Firebase
const handleLogin = () => {
  auth
  .signInWithEmailAndPassword(email, password)
  .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with:', user.email);
      navigation.navigate("Home Page Stack Screen")
  })
  .catch(error => alert(error.message))


}

  return (

    <ScrollView style={styles.container}>

 <Image style ={styles.image} source={{uri:'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Logo%2Fcheese_t.png?alt=media&token=3fb16a7b-a463-49ee-ba5a-312653a8e0ae'}} />
 <Image style ={styles.imageLogo} source={{uri:'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Logo%2Flogo-yellow.png?alt=media&token=db46d611-835b-493f-8055-579d5e31dc92'}} />
 

      <View style={styles.subContainer}>
     
        <Input 
        // label="Email Address" 
        iconName="envelope" 
        value={email}
        placeholder="Enter Your Email Address"
        onChangeText={(email) => setEmail(email)}
        />

        <Input 
        // label="Password" 
        iconName="key" password 
        placeholder="Enter Your Password"
        onChangeText={password => setpassword(password)}
        />

    <TouchableOpacity>
    <Button title="Login" onPress={handleLogin} />
    </TouchableOpacity>

    </View>

    <View style={styles.textRegister}>
    <Text style={styles.textRegister1}>Don't have an account? </Text>
    <Text onPress={() => navigation.navigate("Register")}  style={styles.textRegister2}>Register</Text>
    </View>

</ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFCF4',
  }, 
  imageLogo:{
    position: 'absolute',
    width: 270,
    height: 180,
    alignSelf: 'center',
    top: 70,
  },
  subContainer:{
    justifyContent: 'center',
    paddingHorizontal: 20,
  },  

  image: {
      width: 200,
      height: 250,
      right: 0,
    alignSelf: 'flex-end',
    transform: [
      {scaleX: -1}
    ],
},
  textRegister:{
    position:'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  textRegister1:{
    fontSize: 16,
    color: '#53524F',
  },
  textRegister2:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#df922f',
    fontWeight: 'bold',
  },
})