import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { auth } from '../Firebase/config';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from './styles';



const products = [
  {
    id: 1,
    name: 'Manchego',
    price: '500',
    image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/manchego.jpg?alt=media&token=04f52286-9478-440e-b63b-d465f1dfc0d0',
    description: `Made from pasteurized sheep's milk \nCountry of origin: Spain \nTexture: firm and supple \nFlavour: fruity, nutty, sweet, tangy \nAroma: grassy, pleasant`
  },
  {
    id: 2,
    name: 'Camembert',
    price: '500',
    image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/camembert.jpg?alt=media&token=d77328f5-8f68-453b-9b0b-69dc4a58f55b',
    description: `Made from unpasteurized cow's milk \nCountry of origin: France \nTexture: chalky, runny, smooth and soft \nFlavour: buttery, creamy, milky, sweet \nAroma: earthy`
  },
  {
    id: 3,
    name: 'Brie',
    price: '500',
    image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/brie.jpg?alt=media&token=a638a04a-8472-4e09-92ed-f86595f6bd41',
    description: `Made from unpasteurized cow's milk \nCountry of origin: France \nTexture: buttery, runny and soft-ripened \nFlavour: fruity, mild, nutty, tangy \nAroma: pronounced, strong`
  },
  {
    id: 4,
    name: 'Cheddar',
    price: '500',
    image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/cheddar.jpg?alt=media&token=e6033048-7d20-4030-8a8a-a7ecf5f8e162',
    description: `Made from unpasteurized cow's milk \nCountry of origin: France \nTexture: buttery, runny and soft-ripened \nFlavour: fruity, mild, nutty, tangy \nAroma: pronounced, strong`
  },
  {
    id: 5,
    name: 'Pecorino',
    price: '500',
    image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/pecorino.jpg?alt=media&token=528d89e7-aed5-4ed1-992d-5b067e3c97c4',
    description: `Made from unpasteurized cow's milk \nCountry of origin: France \nTexture: buttery, runny and soft-ripened \nFlavour: fruity, mild, nutty, tangy \nAroma: pronounced, strong`
  },
  {
    id: 6,
    name: 'Provolone',
    price: '500',
    image: 'https://firebasestorage.googleapis.com/v0/b/fir-auth-604dc.appspot.com/o/provolone.jpg?alt=media&token=b3e8b693-b24d-4033-88e8-015a096e7b96',
    description: `Made from unpasteurized cow's milk \nCountry of origin: France \nTexture: buttery, runny and soft-ripened \nFlavour: fruity, mild, nutty, tangy \nAroma: pronounced, strong`
  },
];



const ProductCard = ({ product, onPress }) => {
  const [cart, setCart] = useState([]);
  // console.log("cart items", cart)

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.info}>
        <Image source={{ uri: product.image }} style={styles.image} />
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}> ₱ {product.price}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText} onPress={() => setCart([...cart,products])}><Icon name="shopping-cart" /> Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};


const QuantityPicker = ({ quantity, onIncrease, onDecrease, max }) => {
  return (
    <View style={styles.quantityPicker}>
      <TouchableOpacity style={styles.arrowButton} onPress={onDecrease} disabled={quantity === 1}>
        <Text style={styles.arrowButtonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{quantity}</Text>
      <TouchableOpacity style={styles.arrowButton} onPress={onIncrease} disabled={quantity === max}>
        <Text style={styles.arrowButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}


const ProductModal = ({ product, visible, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };
  const handleDecrease = () => {
    const newQuantity = Math.max(quantity - 1, 1);
    setQuantity(newQuantity);
  };
  const handleQuantityChange = (value) => {
    const newQuantity = parseInt(value, 10);
    if (!isNaN(newQuantity)) {
      setQuantity(Math.max(1, Math.min(newQuantity, 10)));
    }
  };
  // const handleAddToCart = () => {
  //   const item = {
  //     product: product,
  //     quantity: quantity,
  //   };
  //   // add item to cart page (di ko alam kung need pa to dito?)
  //   onClose();
  // };

const cheeseIcon = <Icon name="cheese" size={20} color="#36454F" />;
const globeIcon = <Icon name="globe" size={20} color="#36454F"/>;
const pieChartIcon = <Icon name="chart-pie" size={20} color="#36454F" />;
const spoonIcon = <Icon name="utensil-spoon" size={20} color="#36454F" />;
const scentIcon = <Icon name="water" size={20} color="#36454F" />;

  const productDescription = product.description
  .split('\n')
  .slice(0, 5) // limit to first 5 lines
  .map((line, index) => (
    <View style={styles.descriptionRow} key={index}>
      {index === 0 ? (
        <View style={styles.descriptionIcon}>{cheeseIcon}</View>
      ) : index === 1 ? (
        <View style={styles.descriptionIcon}>{globeIcon}</View>
      ) : index === 2 ? (
        <View style={styles.descriptionIcon}>{pieChartIcon}</View>
      ) : index === 3 ? (
        <View style={styles.descriptionIcon}>{spoonIcon}</View>
      ) : index === 4 ? (
        <View style={styles.descriptionIcon}>{scentIcon}</View>
      ) : null}
      <Text style={styles.modalDescription}>{line}</Text>
    </View>
  ));

  return (
    <ScrollView>
    <Modal visible={visible} animationType='slide'>
      <View style={styles.modal}>
        <Image source={{ uri: product.image }} style={styles.modalImage} />
        <View style={styles.modalInfo}>
          <Text style={styles.modalName}>{product.name}</Text>
              <View style={styles.priceRow}>
                <Text style={styles.modalPrice}>₱ {(product.price * quantity).toFixed(2)}</Text>
                <QuantityPicker
                  quantity={quantity}
                  onIncrease={handleIncrease}
                  onDecrease={handleDecrease}
                  onChangeText={handleQuantityChange}
                  max={10}
                />
              </View>
          {productDescription}
          <TouchableOpacity style={styles.modalButton}>
            <Text style={styles.modalButtonText}>Add to Cart</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalCloseButton} onPress={onClose}>
            <Text style={styles.modalCloseButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    </ScrollView>
  );
};


export default function ProductScreen() {

  const navigation = useNavigation();



  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [index, setIndex] = useState(0);


  const handleProductPress = (product) => {
    console.log("Product pressed:", product);

    setSelectedProduct(product);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
    setModalVisible(false);
  };



  return (
    <ScrollView style={styles.scroll}>
      <StatusBar style="auto" />
    <View style={styles.container}>
      <View style={styles.row}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onPress={() => handleProductPress(product)}
          />
        ))}
      </View>
      
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          visible={modalVisible}
          onClose={handleModalClose}
        />
      )}
      
    </View>
    </ScrollView>
  );
}

