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
  { id: 0, 
  name: 'Allium Piper',
  price: 300.00,
  description: `Made from cow's milk \nCountry of origin: Iceland \nTexture: creamy and soft \nFlavour: creamy, vegan`,  
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FFresh%20Cheese%2FAllium%20Piper.jpg?alt=media&token=806866ba-4ee6-4f33-9529-d525e7d68e09',
  quantity: 0,
},

  { id: 1, 
  name: 'Avaxtskyr',
  price: 250,
  // description: 'Made from pasteurized sheep\'s milk.' +
  //  'Originated from Spain.The texture is firm and supple. flavored with fruity' +
  //  'nutty, sweet, tangy and with an aroma grassy, pleasant',
  description: `Made from pasteurized goat's milk \nCountry of origin: Australia \nTexture: creamy and soft \nFlavour: garlicky and spicy`,  
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FFresh%20Cheese%2FAvaxtskyr.png?alt=media&token=a9345b47-c2e9-43a6-8b82-8e4a9105c026',
  quantity: 0,
},
  
  { id: 2, 
  name: 'Cerney Pyramid',
  price: 150,
  description: `Made from unpasteurized goat's milk \nCountry of origin: England, Great Britain, and United Kingdom \nTexture: creamy \nFlavour: crusty, lemony, mild, sweet`,  
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FFresh%20Cheese%2FCerney%20Pyramid.jpg?alt=media&token=e6f59e51-8c57-4ee2-910f-5292436b337c',
  quantity: 0,
},

  { id: 3, 
  name: 'Chèvre des Neiges',
  price: 200,
  description: `Made from pasteurized cow's and goat's milk \nCountry of origin: Canada \nTexture: soft, spreadable, and supple \nFlavour: fruity, mildy, nutty \nAroma: aromatic, fresh, fruity`,  
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FFresh%20Cheese%2FChèvre%20des%20neiges.jpg?alt=media&token=b76d0277-2533-49ac-a91e-a822ff533975',
  quantity: 0,
},

  { id: 4,
  name: 'Burgos',
  price: 300,
  description: `Made from unpasteurized cow's and sheep's milk \nCountry of origin: Spain \nTexture: creamy \nFlavour: mild, milky \nAroma: fresh`,  
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FFresh%20Cheese%2Fburgos.jpg?alt=media&token=3ea33cbb-8785-4615-a187-7ff8d0f11b83',
  quantity: 0,
},

  { id: 5,
  name: 'Beehive',
  price: 500,
  description: `Made from pasteurized cow's milk \nCountry of origin: United States \nTexture: buttery and soft \nFlavour: buttery, mild \nAroma: buttery, fresh, mild`,  
  image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/Products%2FFresh%20Cheese%2Fbeehive.jpg?alt=media&token=348fdb6d-c94f-45f8-ba62-4906a6df8cb8',
  quantity: 0,
},
];


const ProductTry = () => {

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
                {/* {cart.some((value) => value.id == item.id) ? (
                  <Pressable onPress={() => removeItemFromCart(item)}
                    style ={styles.onPressButton}>
                    <Text style={styles.onPressText}>Remove from Cart</Text>
                  </Pressable>
                ) : (
                  <Pressable onPress={() => addItemToCart(item)}
                    style ={styles.onPressButton}>
                    <Text style={styles.onPressText}>Add to Cart</Text>
                  </Pressable>
                )} */}
              </View>
            </View>
          </Pressable>
        ))}

        <Modal visible={modalVisible} animationType="slide" onRequestClose={() => setModalVisible(false)}>
          {selectedItem && (

            <View style={styles.selectedContainer}>
              <Image style={styles.selectedImage} source={{ uri: selectedItem.image }}/>
              <View style={styles.selectedSubText}>
                <View style={styles.selectedTextRow}>
              <Text style={styles.selectedName}> {selectedItem.name}</Text>
              <Text style={styles.selectedPrice}> {formatCurrency(selectedItem.price)}</Text>
              </View>
              <Text style={styles.selectedDescription}> {selectedItem.description}</Text>

            {/* <View style={styles.selectedDesign}>
              <View style={styles.selectedBoxDesign}>
                <Text style={styles.selectedDesignText}>Ewan ko</Text>
              </View>

              <View style={styles.selectedBoxDesign}>
                <Text style={styles.selectedDesignText}>jeje</Text>
              </View>

              <View style={styles.selectedBoxDesign}>
                <Text style={styles.selectedDesignText}>sleep well</Text>
              </View>
            </View> */}






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

export default ProductTry;



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
  fontSize: 18,
  lineHeight: 25,
  marginTop: 10,
  marginBottom: 10,
  marginHorizontal: 30,
  textAlign:'left',
},
descriptionRow: {
  flexDirection: 'row',
  alignItems: 'center',
},
modalDescription: {
  fontSize: 16,
  marginBottom: 10,
},
descriptionIcon: {
  marginRight: 8,
  marginBottom: 10,
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
})

