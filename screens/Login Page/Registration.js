import { View, Text, KeyboardAvoidingView, TouchableOpacity, KeyboardType, Image, TextInput, StyleSheet } from 'react-native';
import React, {useState} from 'react';
import { auth } from '../Firebase/config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Loader from '../Components/Loader';
import { ALERT_TYPE, 
  Dialog,
  AlertNotificationRoot,
  Toast } from 'react-native-alert-notification';
  import ButtonRegister from '../Components/ButtonRegister';
  import InputRegister from '../Components/InputRegister';


const RegistrationScreen = () => {

    const navigation = useNavigation()
    const [fullName, setFullName] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = React.useState(false);

const isEmailValid = () => {

    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    return emailRegex.test(email)
      }

const isPasswordValid = () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/
    return passwordRegex.test(password)
      }

      const handleSignup = () => {
        if (!isEmailValid()) {
          alert('Please enter a valid email address.');
          return;
        }
      
        if (!isPasswordValid()) {
          alert(
            'Password must be at least 8 characters long, and contain at least one lowercase letter, one uppercase letter, and one special character.',
          );
          return;
        }
      
        if (password !== confirmPassword) {
          alert('Password does not match.');
          return;
        }
      
        setLoading(true);
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            console.log('Registered with:', user.email);
      
            Dialog.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Success',
              textBody: 'User Successfully Created!',
              button: 'Login',
              onHide: () => {
                navigation.navigate('LoginStack');
              },
            });
          })
          .catch((error) => {
            alert(error.message);
          })
          .finally(() => {
            setLoading(false);
          });
      };

  return (

    <ScrollView style={styles.container}>
        <AlertNotificationRoot>
          <Loader visible={loading} />

<Icon name="arrow-left" style={styles.icon} onPress={()=> navigation.navigate('LoginStack')}></Icon>
<Image style ={styles.image} source={{uri:'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Logo%2Fcheese_t.png?alt=media&token=3fb16a7b-a463-49ee-ba5a-312653a8e0ae'}} />
 <Image style ={styles.imageLogo} source={{uri:'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Logo%2Flogo-yellow.png?alt=media&token=db46d611-835b-493f-8055-579d5e31dc92'}} />

 <View style={styles.subContainer}>

              <InputRegister 
        // label="Full Name" 
        iconName="user" 
        value={fullName}
        placeholder='Enter Your Full Name'
        onChangeText={(fullName) => setFullName(fullName)}
        />  

        {/* <InputRegister 
        // label="Contact Number" 
        iconName="mobile-alt" 
        keyboardType={"number-pad"}
        placeholder="Enter Your Contact Number"
        onChangeText={(contact) => setContact(contact)}

        /> */}

        <InputRegister 
        // label="Email Address" 
        iconName="envelope" 
        value={email}
        placeholder='Enter Your Email Address'
        onChangeText={(email) => setEmail(email)}
        />  

        <InputRegister 
        // label="Password" 
        iconName="key" password
        value={password}
        placeholder='Enter Your Password'
        onChangeText={(password) => setPassword(password)}
        />  

        <InputRegister 
        // label="Confirm Password" 
        iconName="key" password
        value={confirmPassword}
        placeholder='Confirm Your Password'
        onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)}
        /> 

    <ButtonRegister title="Register" onPress={handleSignup} />




    <View style={styles.textRegister}>
    <Text style={styles.textRegister1}>Already have an account? </Text>
    <Text onPress={() => navigation.navigate("Login")}  style={styles.textRegister2}>Login</Text>
    </View>

    </View>
    </AlertNotificationRoot>
    </ScrollView>
  )
}

export default RegistrationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFCF4',
  }, 
  icon: {
    position: 'absolute',
    fontSize: 20,
    color: "#53524F",
    marginLeft: 20,
    marginTop: 40,
    
},
imageLogo:{
  position: 'absolute',
  width: 270,
  height: 200,
  alignSelf: 'center',
  top: 70,
},
  subContainer:{
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: -75,
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
      flex: 1,
      flexDirection: 'row',
      alignSelf: 'center',
      marginBottom: 20,
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