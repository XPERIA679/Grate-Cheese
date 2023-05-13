import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { incrementQuantity, decrementQuantity, clearCart } from '../Redux/CartReducer';

const CheckoutPage = () => {
  const cart = useSelector((state) => state.cart.cart);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [checkoutClicked, setCheckoutClicked] = useState(false);

  const increaseQuantity = (id) => {
    dispatch(incrementQuantity({ id: id }));
  };

  const decreaseQuantity = (id) => {
    dispatch(decrementQuantity({ id: id }));
  };

  const removeItem = (id) => {
    dispatch(clearCart({ id: id }));
  };

  function formatCurrency(number) {
    return new Intl.NumberFormat('en-PH', {
      style: 'currency',
      currency: 'PHP',
    }).format(number);
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
      {cart.map((item) => {
        // console.log(item.quantity);
        return (
          <View key={item.id} style={styles.itemContainer}>
            <Image style={styles.itemImage} source={{ uri: item.image }} />

            <View style={styles.textContainer}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>
                {formatCurrency(item.quantity * item.price)}
              </Text>
            </View>

            <View style={styles.quantityContainer}>
              <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
                <Icon name="minus-circle"  style={styles.icon} />
              </TouchableOpacity>

              <Text style={styles.quantityText}>{item.quantity}</Text>
              <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
                <Icon name="plus-circle"  style={styles.icon} />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}

      <View style={styles.totalPriceContainer}>
        <View style={styles.totalPriceSubContainer}>
          <Text style={{fontSize: 15, color:'#838383', fontWeight: '500'}}>Total</Text>
          <Text style={styles.totalPriceText}>
            {formatCurrency(cart.reduce((total, item) => total + item.quantity * item.price, 0))}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            setCheckoutClicked(true);
            Alert.alert('Success', 'Transaction is successful!', [{ text: 'OK' }]);
            cart.forEach((item) => removeItem(item.id));
          }}
        >
          <Text style={styles.buttonText}>Checkout</Text>
          <Icon name="long-arrow-alt-right" style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
  );
};

// ...rest of the code


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f2f2f2',
    flexDirection:'column',
  },
  subContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 7,
    width: '90%',
    height: 90,
    borderRadius: 5,
    backgroundColor:'white',
    shadowColor: 'black',
    elevation: 10,
    justifyContent:'space-around',
  },
  quantityContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemImage: {
    width: 70,
    height: 70,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 16,
  },
  textContainer:{
    alignItems:'center',
  },
  quantityText:{
    marginHorizontal: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  icon:{
    fontSize: 22,
    color: '#fea104',
  },
  totalPriceContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 90,
    backgroundColor: 'white',
    marginBottom: 7,
    shadowColor: '#525252',
    elevation: 10,
  },
  totalPriceSubContainer:{
    marginLeft: 30,
    gap: 5,
  },
  totalPriceText:{
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
  },
  buttonContainer:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fea104',
    width: 150,
    height: 42,
    marginRight: 30,
    borderRadius: 30,
    gap: 20,
  },
  buttonText:{
    color: 'white',
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 15,
  },
  buttonIcon:{
    color: 'white',
    fontSize: 20,
  },
   

});

export default CheckoutPage;