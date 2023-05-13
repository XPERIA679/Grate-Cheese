import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Modal
} from "react-native";
import React, { useState } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../Redux/CartReducer";

const images = [
  { id: 6, 
  name: 'Baby Brie',
  price: 300,
  description: 'This is a description of Product 1.',
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FSoft%20Cheese%2FBaby%20Brie.jpg?alt=media&token=a6b684d5-7bb6-4df0-a59e-4f0de65133e8',
  quantity: 0,
},

  { id: 7, 
  name: 'Afuega \'l Pitu',
  price: 250,
  description: 'This is a description of Product 2.',
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FSoft%20Cheese%2FAfuega%20l%20Pitu.jpeg?alt=media&token=4e6765b7-b37a-499f-b832-7efd10488756',
  quantity: 0,
},
  
  { id: 8, 
  name: 'Anari',
  price: 150,
  description: 'This is a description of Product 3.',
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FSoft%20Cheese%2Fanari.jpg?alt=media&token=5576d5b2-9e0d-4ac6-9173-4b0b64c9eba4',
  quantity: 0,
},

  { id: 9, 
  name: 'Baladi',
  price: 200,
  description: 'This is a description of Product 4.',
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FSoft%20Cheese%2Fbaladi.jpg?alt=media&token=ae021b84-5f13-407d-b23b-6caa7c8dc2a6',
  quantity: 0,
},

  { id: 10,
  name: 'Boulette d\' Avesnes',
  price: 300,
  description: 'This is a description of Product 5.' ,
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FSoft%20Cheese%2FBoulette-dAvesnes.jpg?alt=media&token=a80b30d1-daf8-4328-824e-0b6a44b28d09',
  quantity: 0,
},

  { id: 11, 
  name: 'Brocciu',
  price: 500,
  description: 'This is a description of Product 6.',
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FSoft%20Cheese%2FBrocciu.jpg?alt=media&token=ca0bf9fc-4340-4f37-939b-e6105ef6116a',
  quantity: 0,
},
];


const ProductSoft = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const navigation = useNavigation();
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  
  const toggleModal = (item) => {
    setSelectedItem(item);
    setModalVisible(!modalVisible);
  };
  
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  };
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  
  function formatCurrency(number) {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
    }).format(number);
  }
  
  return (
    <ScrollView style={styles.container}>
  
  <View style={styles.iconNavigation}>
  
      <Pressable 
      onPress={() => navigation.navigate ('Product Try')}>
      <Image style ={styles.iconImage} source={require("../../image/img/assets2/brie.jpg")}/>
      <Text style={styles.iconText}>Fresh</Text>
      </Pressable>
  
      <Pressable 
      onPress={() => navigation.navigate ('Product Soft')}>
      <Image 
      style ={styles.iconImage} 
      source={require("../../image/img/assets/vegan.png")} />
      <Text style={styles.iconText}>Soft</Text>
      </Pressable>
  
      <Pressable 
      onPress={() => navigation.navigate ('Product Hard')}>
      <Image 
      style ={styles.iconImage} 
      source={require("../../image/img/assets/best.png")} />
      <Text style={styles.iconText}>Hard</Text>
      </Pressable>
  
      <Pressable 
      onPress={() => navigation.navigate ('Product Vegetarian')}>
      <Image 
      style ={styles.iconImage} 
      source={require("../../image/img/assets/promo.png")} />
      <Text style={styles.iconText}>Vegetarian</Text>
      </Pressable>
  
  
    </View>
  
      <View style={styles.subContainer}>
  
        {images.map((item) => (
          <Pressable
            key={item.id} onPress={() => toggleModal(item)}> 
            <View style={styles.productContainer}>
              <Image
                style={styles.image}
                source={{ uri: item.image }}
              />
  
              <View>
              <Text style={styles.name}> {item.name}</Text>
                <Text style={styles.price}> {formatCurrency(item.price)}</Text>
              </View>
            </View>
          </Pressable>
        ))}
  
        <Modal visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
          {selectedItem && (
  
            <View style={styles.selectedContainer}>
              <Image style={styles.selectedImage} source={{ uri: selectedItem.image }}/>
              <View style={styles.selectedSubText}>
                <View style={styles.selectedTextRow}>
              <Text style={styles.selectedName}> {selectedItem.name}</Text>
              <Text style={styles.selectedPrice}> {formatCurrency(selectedItem.price)}</Text>
              </View>
              <Text style={styles.selectedDescription}> {selectedItem.description}</Text>
            

  
  
        <View style={styles.selectedRowButton}>
  
        <Pressable style={styles.selectedIconButton}>
              <Icon name="chevron-left" style={styles.icon} onPress={() => setModalVisible(false)} />
        </Pressable>
  
        {cart.some((value) => value.id == selectedItem.id) ? (
                  <Pressable onPress={() => removeItemFromCart(selectedItem)}
                    style ={styles.selectedOnPressButton}>
                    <Text style={styles.selectedOnPressText}>Remove from Cart</Text>
                  </Pressable>
                ) : (
                  <Pressable onPress={() => addItemToCart(selectedItem)}
                    style ={styles.selectedOnPressButton}>
                    <Text style={styles.selectedOnPressText}>Add to Cart</Text>
                  </Pressable>
                )}
  {/* 
        <Pressable style={styles.selectedOnPressButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.selectedOnPressText}>Back</Text>
        </Pressable> */}
        </View>
        </View>
            </View>
          )}
        </Modal>
  
      </View>
    </ScrollView>
  );
  };




  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FDFCF4',
    }, 
    subContainer: {
      marginVertical: 20,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      rowGap: 20,
    },
    productContainer:{
    width: 175,
    height: 220,
    backgroundColor: '#f6df8a',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    shadowColor: '#46443F',
    elevation: 10,
    },
    image:{
    width: 140, 
    height: 110, 
    borderRadius: 10,
    },
    onPressButton:{
      width: '90%',
      borderColor: 'transparent',
      backgroundColor: '#FFAE52',
      borderWidth: 1,
      marginVertical: 10,
      padding: 5,
      borderRadius: 10,
      justifyContent: 'flex-end',
    },
      onPressText:{
        fontSize: 15,
        textAlign: 'center',
      },
    
    // Modal Styling
    selectedContainer:{
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#fbc601',
    },
    selectedImage:{
    width: 350,
    height: 250,
    borderRadius: 50,
    marginTop: 50,
    marginBottom: 40,
    },
    
    selectedSubText:{
    backgroundColor:'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: '100%',
    height: '100%',
    },
    selectedTextRow:{
    flexDirection:'row',
    marginTop: 15,
    justifyContent:'space-around',
    alignItems:'center',
    },
    selectedName:{
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf:'flex-start',
    textTransform:'uppercase',
    },
    selectedPrice:{
    fontSize: 20,
    },
    selectedDescription:{
    fontSize: 14,
    lineHeight: 25,
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 30,
    textAlign:'justify',
    },
    selectedDesign:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    },
    
    selectedBoxDesign:{
    backgroundColor:'#e0e6ff',
    height: 60,
    width: 70,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 10,
    shadowColor: '#46443F',
    elevation: 5,
    },
    
    selectedRowButton:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop: 25,
    },
    icon: {
    fontSize: 25,
    color: "#7195a1", 
    },
    selectedIconButton:{
    width: '15%',
    height: 45,
    borderRadius: 30,
    backgroundColor:'white',
    justifyContent: 'center',
    shadowColor: '#46443F',
    elevation: 5,
    alignItems:'center',
    },
    selectedOnPressButton:{
    width: '50%',
    height: 45,
    backgroundColor: '#7195a1',
    borderRadius: 30,
    justifyContent: 'center',
    },
    selectedOnPressText:{
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white'
    },
    iconNavigation: {
    flex: 1,
    width: '95%',
    height: 120,
    marginVertical: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems:'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'white',
    shadowColor: '#46443F',
    elevation: 10,
    
    },
    iconImage:{
    width: 70,
    height: 60,
    borderRadius: 50,
    
    },
    iconText:{
    alignSelf: 'center',
    fontSize: 17,
    marginTop: 10,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    price: {
      fontSize: 17,
      color: '#000000',
      textAlign: 'center',
      alignSelf: 'center',
    },
    })

export default ProductSoft;
