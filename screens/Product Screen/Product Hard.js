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
  { id: 12, 
  name: 'Abertam',
  price: 300,
  description: 'This is a description of Product 1.',
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FHard%20Cheese%2FAbertam.jpg?alt=media&token=8c5bd3c3-a122-4d06-ab4d-bd96919bbf90',
  quantity: 0,
},

  { id: 13, 
  name: 'Acorn',
  price: 250,
  description: 'This is a description of Product 2.',
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FHard%20Cheese%2FAcorn.jpg?alt=media&token=cf952d68-d5d8-4473-bb2e-66c5682cdcfb',
  quantity: 0,
},
  
  { id: 14, 
  name: 'Allgäuer Bergkäse',
  price: 150.,
  description: 'This is a description of Product 3.',
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FHard%20Cheese%2FAllgäuer%20Bergkäse.jpg?alt=media&token=c57d2d0d-5654-4343-96d6-8ce42037d583',
  quantity: 0,
},

  { id: 15, 
  name: 'Asiago',
  price: 200,
  description: 'This is a description of Product 4.',
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FHard%20Cheese%2FAsiago.jpg?alt=media&token=10bff88c-501e-4adb-8198-7c07aa0f12a3',
  quantity: 0,
},

  { id: 16,
  name: 'Balfour',
  price: 300,
  description: 'This is a description of Product 5.' ,
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FHard%20Cheese%2FBalfour.jpg?alt=media&token=8f6ef5e9-32a1-415b-957f-8c796bbb92a6',
  quantity: 0,
},

  { id: 17, 
  name: 'Berkswell',
  price: 500,
  description: 'This is a description of Product 6.',
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FHard%20Cheese%2FBerkswell.jpg?alt=media&token=c65775ae-64fd-422d-873e-2ab05c34ed6d',
  quantity: 0,
},
];


const ProductHard = () => {

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
  
  export default ProductHard;
  
  
  
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
