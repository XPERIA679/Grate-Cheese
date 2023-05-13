import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
  } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../Redux/CartReducer";

export default function ReduxSoft () {

  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const images = [
    { id: '0', 
    name: 'Baby Brie',
    price: 'P300.00',
    description: 'This is a description of Product 1.',
    image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FSoft%20Cheese%2FBaby%20Brie.jpg?alt=media&token=a6b684d5-7bb6-4df0-a59e-4f0de65133e8',
    quantity: 0,
  },
  
    { id: '1', 
    name: 'Afuega \'l Pitu',
    price: 'P250.00',
    description: 'This is a description of Product 2.',
    image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FSoft%20Cheese%2FAfuega%20l%20Pitu.jpeg?alt=media&token=4e6765b7-b37a-499f-b832-7efd10488756',
    quantity: 0,
  },
    
    { id: '2', 
    name: 'Anari',
    price: 'P150.00',
    description: 'This is a description of Product 3.',
    image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FSoft%20Cheese%2Fanari.jpg?alt=media&token=5576d5b2-9e0d-4ac6-9173-4b0b64c9eba4',
    quantity: 0,
  },
  
    { id: '3', 
    name: 'Baladi',
    price: 'P200.00',
    description: 'This is a description of Product 4.',
    image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FSoft%20Cheese%2Fbaladi.jpg?alt=media&token=ae021b84-5f13-407d-b23b-6caa7c8dc2a6',
    quantity: 0,
  },
  
    { id: '4',
    name: 'Boulette d\' Avesnes',
    price: 'P300.00',
    description: 'This is a description of Product 5.' ,
    image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FSoft%20Cheese%2FBoulette-dAvesnes.jpg?alt=media&token=a80b30d1-daf8-4328-824e-0b6a44b28d09',
    quantity: 0,
  },
  
    { id: '5', 
    name: 'Brocciu',
    price: 'P500.00',
    description: 'This is a description of Product 6.',
    image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FSoft%20Cheese%2FBrocciu.jpg?alt=media&token=ca0bf9fc-4340-4f37-939b-e6105ef6116a',
    quantity: 0,
  },
  ];

const addItemToCart = (item) => {
  dispatch(addToCart(item));
};
const removeItemFromCart = (item) => {
  dispatch(removeFromCart(item));
};
const increaseQuantity = (item) => {
  dispatch(incrementQuantity(item));
}
const decreaseQuantity = (item) => {
  if(item.quantity == 1){
    dispatch(removeFromCart(item));
  }else{
    dispatch(decrementQuantity(item));
  }
}
return (
  <ScrollView>
    <Text style={{ textAlign: "center", fontSize: 16 }}>
      Redux cart system
    </Text>
    {images.map((item) => (
      <Pressable
        key={item.id}
        style={{ flexDirection: "row", alignItems: "center" }}
      >
        <View style={{ margin: 10 }}>
          <Image
            style={{ width: 100, height: 100, borderRadius: 8 }}
            source={{ uri: item.image }}
          />
        </View>
        <View>
          <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
          {cart.some((value) => value.id == item.id) ? (
            <Pressable onPress={() => removeItemFromCart(item)}>
              <Text
                style={{
                  borderColor: "gray",
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 5,
                }}
              >
                REMOVE FROM CART
              </Text>
            </Pressable>
          ) : (
            <Pressable onPress={() => addItemToCart(item)}>
              <Text
                style={{
                  borderColor: "gray",
                  borderWidth: 1,
                  marginVertical: 10,
                  padding: 5,
                }}
              >
                ADD TO CART
              </Text>
            </Pressable>
          )}
        </View>
      </Pressable>
    ))}

{cart.map((item,index) => (
      <View style={{padding:10}} key={index}>
        <Text>{item.name}</Text>
        <Image style={{ width: 100, height: 100, borderRadius: 8,marginTop:6 }}
            source={{ uri: item.image }}/>
                    <Text>{item.price}</Text>
                    <Text>{item.description}</Text>
        <Pressable
          style={{
            flexDirection: "row",
            marginTop:20,
            alignItems: "center",
            backgroundColor: "#FF3366",
            borderRadius: 5,
            width: 120,
          }}
        >
          <Pressable onPress={() => decreaseQuantity(item)}>
            <Text
              style={{
                fontSize: 25,
                color: "white",
                paddingHorizontal: 10,
              }}
            >
              -
            </Text>
          </Pressable>

          <Pressable>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                paddingHorizontal: 10,
              }}
            >
              {item.quantity}
            </Text>
          </Pressable>

          <Pressable onPress={() => increaseQuantity(item)}>
            <Text
              style={{
                fontSize: 20,
                color: "white",
                paddingHorizontal: 10,
              }}
            >
              +
            </Text>
          </Pressable>
        </Pressable>
      </View>
    ))}


  </ScrollView>
);
};



// const numColumns = 2;

// const ProductTry = () => {
//   const [cart, setCart] = useState([]);
//   console.log("cart items",cart)

//   const navigation = useNavigation();

//   const handleCheckout = () => {
//     navigation.navigate("TryAddToCart", { cart });
//   };

//   return (
//     <>
//       <ScrollView style={styles.container}>
//         <View style={styles.subContainer}>
//         {images.map((item) => (
//           <Pressable key={item.id}>
            
//             <View style={styles.productContainer}>
//               <Image style={styles.image} source={{ uri: item.image }} />
//               <Text>{item.name}</Text>
//               <Text>{item.price}</Text>

//               {cart.includes(item) ? (
//                 <Pressable
//                   onPress={() =>
//                     setCart(cart.filter((x) => x.id !== item.id))
//                   }
//                 style ={styles.onPressButton}>
//                   <Text style={styles.onPressText}>Remove from Cart</Text>
//                 </Pressable>
//               ) : (
//                 <Pressable onPress={() => setCart([...cart, item])} style ={styles.onPressButton}>
//                   <Text style={styles.onPressText}>Add to Cart</Text>
//                 </Pressable>
//               )}


//             </View>




//           </Pressable>
//         ))}
//                 </View>

//                 <Pressable onPress={handleCheckout} style={styles.checkoutButton}>
//         <Text style={styles.checkoutButtonText}>Go to Checkout</Text>
//       </Pressable>



//       </ScrollView>

//     </>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FDFCF4',
//   }, 
//   subContainer: {
//     marginVertical: 20,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-evenly',
//     rowGap: 20,
// },
//   productContainer:{
//     width: 175,
//     height: 220,
//     backgroundColor: '#f6df8a',
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 15,
//     shadowColor: '#46443F',
//   elevation: 10,
//   },
//   onPressButton:{
//     width: '90%',
//     borderColor: 'transparent',
//     backgroundColor: '#FFAE52',
//     borderWidth: 1,
//     marginVertical: 10,
//     padding: 5,
//     borderRadius: 10,
//     justifyContent: 'flex-end',
//   },
//     onPressText:{
//       fontSize: 15,
//       textAlign: 'center',
//     },
//     image:{
//     width: 140, 
//     height: 110, 
//     borderRadius: 10,
//     },

//     checkoutButton: {
//       width: 130,
//       backgroundColor :'#edc018',
//       height: 40,
//       marginBottom: 20,
//       alignSelf: 'center',
//       borderRadius: 15,
//       justifyContent: 'center',
//     },
//     checkoutButtonText:{
//       textAlign: 'center',
//       fontSize: 15,
//       fontWeight: 'bold',
//     }
// })

// export default ProductTry;
