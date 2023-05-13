import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard} from 'react-native'
import React, { useState } from 'react'
import { auth } from '../Firebase/config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const AddToCart = () => {
  const todoRef = firebase.firestore().collection('newData');
  const [addData, setAddData] = useState('');

  const addField = () => {
    if (addData && addData.length > 0) {
      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const data = {
        heading: addData,
        createdAt: timestamp
      };
      todoRef
      .add(data)
      .then(() => {
        setAddData('');
        Keyboard.dismiss();
      })
      .catch((error) => {
        alert(error);
      })
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.formContainer}>
        <TextInput 
          style={styles.input}
          placeholder='Add some text'
          placeholderTextColor='#aaaaaa'
          onChangeText={(heading) =>  setAddData(heading)}
          vaue={addData}
          multiline={true}
          underlineColorAndroid='transparent'
          autoCapitalize='none'
          
        />

        <TouchableOpacity style={styles.button} onPress={addField}>
            <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}



export default AddToCart

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FFD85D',
    flex: 1,
  },
  formContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  input:{
    height: 48,
    borderRadius: 5,
    overflow:'hidden',
    backgroundColor: 'white',
    paddingLeft: 16,
    flex: 1,
    marginRight: 5
  },
  button: {
    height: 47,
    borderRadius: 5,
    backgroundColor: '#78eec',
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },

})