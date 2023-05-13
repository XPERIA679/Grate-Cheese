import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TouchableOpacity
} from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const images = [
  { id: '0', 
  name: 'Allium Piper',
  price: 'P300.00',
  description: 'This is a description of Product 1.',
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FFresh%20Cheese%2FAllium%20Piper.jpg?alt=media&token=806866ba-4ee6-4f33-9529-d525e7d68e09',
  quantity: 0,
},

  { id: '1', 
  name: 'Avaxtskyr',
  price: 'P250.00',
  description: 'This is a description of Product 2.',
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FFresh%20Cheese%2FAvaxtskyr.png?alt=media&token=a9345b47-c2e9-43a6-8b82-8e4a9105c026',
  quantity: 0,
},
  
  { id: '2', 
  name: 'Cerney Pyramid',
  price: 'P150.00',
  description: 'This is a description of Product 3.',
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FFresh%20Cheese%2FCerney%20Pyramid.jpg?alt=media&token=e6f59e51-8c57-4ee2-910f-5292436b337c',
  quantity: 0,
},

  { id: '3', 
  name: 'Chèvre des Neiges',
  price: 'P200.00',
  description: 'This is a description of Product 4.',
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FFresh%20Cheese%2FChèvre%20des%20neiges.jpg?alt=media&token=b76d0277-2533-49ac-a91e-a822ff533975',
  quantity: 0,
},

  { id: '4',
  name: 'Burgos',
  price: 'P300.00',
  description: 'This is a description of Product 5.' ,
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FFresh%20Cheese%2Fburgos.jpg?alt=media&token=3ea33cbb-8785-4615-a187-7ff8d0f11b83',
  quantity: 0,
},

  { id: '5', 
  name: 'Beehive',
  price: 'P500.00',
  description: 'This is a description of Product 6.',
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FFresh%20Cheese%2Fbeehive.jpg?alt=media&token=348fdb6d-c94f-45f8-ba62-4906a6df8cb8',
  quantity: 0,
},
];

const numColumns = 2;

const ProductFresh = () => {
const [cart, setCart] = useState([]);

const navigation = useNavigation();

const handleCheckout = () => {
  navigation.navigate("TryAddToCart", { cart });
};

return (
  <>
    <ScrollView style={styles.container}>
      <View style={styles.iconNavigation}>

      <Pressable 
      onPress={() => navigation.navigate ('ProductStackScreen', {screen:'Product Fresh'})}>
      <Image style ={styles.image} source={require("../../image/img/assets2/brie.jpg")}/>
      <Text style={styles.iconText}>Fresh</Text>
      </Pressable>
      
      <Pressable 
      onPress={() => navigation.navigate ('ProductStackScreen', {screen:'Product Soft'})}>
      <Image 
      style ={styles.image} 
      source={require("../../image/img/assets/vegan.png")} />
      <Text style={styles.iconText}>Soft</Text>
      </Pressable>

      <Pressable 
      onPress={() => navigation.navigate ('ProductStackScreen', {screen:'Product Hard'})}>
      <Image 
      style ={styles.image} 
      source={require("../../image/img/assets/best.png")} />
      <Text style={styles.iconText}>Hard</Text>
      </Pressable>

      <Pressable 
      onPress={() => navigation.navigate ('ProductStackScreen', {screen:'Product Vegetarian'})}>
      <Image 
      style ={styles.image} 
      source={require("../../image/img/assets/promo.png")} />
      <Text style={styles.iconText}>Vegetarian</Text>
      </Pressable>

      
      </View>

      <View style={styles.subContainer}>

      {images.map((item) => (
        <Pressable key={item.id}>
          
          <View style={styles.productContainer}>
            <Image style={styles.productImage} source={{ uri: item.image }} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>

            {cart.includes(item) ? (
              <Pressable
                onPress={() =>
                  setCart(cart.filter((x) => x.id !== item.id))
                }
              style ={styles.button}>
                <Text style={styles.buttonText}>Remove from Cart</Text>
              </Pressable>
            ) : (
              <Pressable onPress={() => setCart([...cart, item])} style ={styles.button}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </Pressable>
            )}


          </View>




        </Pressable>
      ))}

<Pressable onPress={handleCheckout} style={styles.checkoutButton}>
      <Text style={styles.checkoutButtonText}>Go to Checkout</Text>
    </Pressable>


              </View>


    </ScrollView>

  </>
);
};


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f7f7f7',  
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
  image:{
    width: 70,
    height: 60,
    borderRadius: 50,

  },
  iconText:{
    alignSelf: 'center',
    fontSize: 17,
    marginTop: 10,
  },
subContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  rowGap: 20,
  backgroundColor: 'white',
  paddingVertical: 20,
  borderColor: 'white',
  shadowColor: '#46443F',
elevation: 10,
},
productContainer:{
  width: 190,
  height: 270,
  backgroundColor: '#f8f8f8',
  alignItems: 'center',
  borderRadius: 10,
  borderColor: 'white',
  shadowColor: '#46443F',
elevation: 10,
},
productName: {
  fontSize: 17,
  fontWeight: 'bold',
},
button:{
  width: '95%',
  height: 35,
  borderColor: 'transparent',
  backgroundColor: '#fbc601',
  borderWidth: 1,
  marginVertical: 10,
  padding: 5,
  borderRadius: 5,
  justifyContent: 'flex-end',
},
buttonText:{
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  productImage:{
    width: '95%',
    height: '65%',
    marginTop: 3,
    borderRadius: 10,
  },

  checkoutButton: {
    width: '90%',
    backgroundColor :'#fbc601',
    height: 50,
    marginVertical: 20,
    alignSelf: 'center',
    borderRadius: 15,
    justifyContent: 'center',
  },
  checkoutButtonText:{
    fontSize: 17,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  }
})

export default ProductFresh;
