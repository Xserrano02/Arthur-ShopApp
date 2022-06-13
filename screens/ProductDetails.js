import React, {useEffect, useState, useContext} from 'react';
import {Text, StyleSheet, View, Image, ScrollView, SafeAreaView, Alert} from "react-native";
import { getProduct } from '../services/ProductsService';
import {CartContext} from "../CartContext";
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import Animated,{useSharedValue, useAnimatedStyle} from 'react-native-reanimated';

import { Gesture,GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';



export function ProductDetails({route}) {
  
  const width = Dimensions.get('window').width;
  const ANCHO_IMAGEN = width;
  const ALTO_IMAGEN = width;

  const escala = useSharedValue(1);
  const focoX = useSharedValue(0);
  const focoY = useSharedValue(0);

  const pinchazo = Gesture.Pinch().onStart((e)=>{
    focoX.value = e.focalX;
    focoY.value = e.focalY;
  })
  .onUpdate((e)=>{
    escala.value = e.scale;
  }).onEnd((e)=>{
    escala.value = 1;
  });

  const centroImagen={
    x:ANCHO_IMAGEN/2,
    y:ALTO_IMAGEN/2
  }

  const estiloAnimado = useAnimatedStyle(()=>({
    transform:[
      {translateX:focoX.value},
      {translateY:focoY.value},
      {translateX:-centroImagen.x},
      {translateY:-centroImagen.y},
      {scale:escala.value},
      {translateX:-focoX.value},
      {translateY:-focoY.value},
      {translateX: centroImagen.x},
      {translateY: centroImagen.y},
    ]
  }));



  //hook para obtener el id del producto
    const {productId} = route.params;
    const [product, setProduct] = useState({});

    useEffect(() => {
        setProduct(getProduct(productId))
    })

    //contexto de carrito
    const {addItemToCart} = useContext(CartContext)

    //funcion de agregar al carrito
    function onAddToCart(){
      addItemToCart(product.id)
      Alert.alert('AGREGADO','El reloj ' + product.name + ' ha sido agregado a tu carrito')
    }

    //estilos de los componentes
    const styles = StyleSheet.create({
      imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    
        },
        image: {
          position: 'relative',
          width: ANCHO_IMAGEN,
          height: ALTO_IMAGEN,
          aspectRatio: 1
        },
        infoContainer: {
          padding: 16
        },
        name: {
          fontSize: 16,
          marginRight: 10,
          color: 'black',
          fontWeight: 'bold'
        },
        price: {
          fontSize: 16,
          fontWeight: '600',
          marginBottom: 8,
          color: 'black',
        },
        description: {
          fontSize: 16,
          fontWeight: '400',
          color: 'black',
          marginBottom: 16,
          backgroundColor: '#FDFEFE',
          shadowColor: '#000',
          width: '100%',
          padding: 20,
          borderRadius: 10,
        },
    
        sizes:{
          fontSize: 16,
        },
        infoContainerName:{
          display: 'flex',
          flexDirection: 'row',
          padding: 20,
          backgroundColor: '#FDFEFE',
          marginBottom: 20,
          color: 'black',
          borderRadius: 10,
        },
        life:{
          marginBottom: 20,
          color: '#787878',
          backgroundColor: '#ffffff',
          padding: 20,
          borderRadius: 50,
        },
    
        btnIniciar:{
          backgroundColor:'#2E428B',
          marginTop:20,
          padding:20,
          borderRadius: 5,
          display: 'flex',
          flexDirection: 'row',
          textAlign: 'center',
          justifyContent: 'center'
        }
      });

  return (
    <ScrollView>
        <SafeAreaView style={styles.imageContainer}>
          <GestureHandlerRootView>
                      
          <GestureDetector gesture={pinchazo}>
            <Animated.Image style={[styles.image, estiloAnimado]} source={product.image} />
          </GestureDetector>

          </GestureHandlerRootView>
        </SafeAreaView>

        
        <View style={styles.infoContainer}>

          <View style={styles.infoContainerName}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>${product.price}</Text>
          </View>

          <Text style={styles.description}> {product.description}</Text>

          <View>
            <TouchableOpacity style={styles.btnIniciar} onPress={onAddToCart}>
              <Ionicons name="add-circle-outline" size={24} color="white" />
              <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', marginLeft: 10, paddingTop: 5 }}>Agregar al carrito</Text>
            </TouchableOpacity>
          </View>

        </View>

    </ScrollView>
    
  )
}

