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

export default function ReduxHard ()  {

  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const dispatch = useDispatch();

  const images = [
    { id: '0', 
    name: 'Abertam',
    price: 'P300.00',
    description: 'This is a description of Product 1.',
    image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FHard%20Cheese%2FAbertam.jpg?alt=media&token=8c5bd3c3-a122-4d06-ab4d-bd96919bbf90',
    quantity: 0,
  },
  
    { id: '1', 
    name: 'Acorn',
    price: 'P250.00',
    description: 'This is a description of Product 2.',
    image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FHard%20Cheese%2FAcorn.jpg?alt=media&token=cf952d68-d5d8-4473-bb2e-66c5682cdcfb',
    quantity: 0,
  },
    
    { id: '2', 
    name: 'Allgäuer Bergkäse',
    price: 'P150.00',
    description: 'This is a description of Product 3.',
    image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FHard%20Cheese%2FAllgäuer%20Bergkäse.jpg?alt=media&token=c57d2d0d-5654-4343-96d6-8ce42037d583',
    quantity: 0,
  },
  
    { id: '3', 
    name: 'Asiago',
    price: 'P200.00',
    description: 'This is a description of Product 4.',
    image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FHard%20Cheese%2FAsiago.jpg?alt=media&token=10bff88c-501e-4adb-8198-7c07aa0f12a3',
    quantity: 0,
  },
  
    { id: '4',
    name: 'Balfour',
    price: 'P300.00',
    description: 'This is a description of Product 5.' ,
    image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FHard%20Cheese%2FBalfour.jpg?alt=media&token=8f6ef5e9-32a1-415b-957f-8c796bbb92a6',
    quantity: 0,
  },
  
    { id: '5', 
    name: 'Berkswell',
    price: 'P500.00',
    description: 'This is a description of Product 6.',
    image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FHard%20Cheese%2FBerkswell.jpg?alt=media&token=c65775ae-64fd-422d-873e-2ab05c34ed6d',
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
