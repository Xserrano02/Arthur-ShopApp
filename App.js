import React from "react";
import {StyleSheet, View, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductsList } from "./screens/ProductsList.js";
import { ProductDetails } from "./screens/ProductDetails.js";
import { Cart } from "./screens/Cart.js";
import { CartProvider } from "./CartContext.js";
import { CartIcon } from "./components/CartIcon.js";
import Registro from "./screens/Registro.js";
import Login from "./screens/Login.js";
import ResetPassword from "./screens/ResetPassword.js";
import Home from "./screens/Home.js";
import DatFacturacion from "./screens/DatFacturacion.js";

const Stack = createNativeStackNavigator();

function App(){
  return(
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={({navigation}) => ({title: 'Inicio Sesion'})} />
          <Stack.Screen name="Registro" component={Registro} options={({navigation}) => ({title: 'registro'})} />
          <Stack.Screen name="Reset" component={ResetPassword} options={({navigation}) => ({title: 'Cambiar contrasena'})} />
          <Stack.Screen name="Datos" component={DatFacturacion} options={({navigation}) => ({title: 'Datos Facturacion'})} />
          <Stack.Screen name="Home" component={Home} options={({navigation}) => ({title: 'Home', headerRight: () => <CartIcon navigation={navigation}  />})}  />
          <Stack.Screen name="Products" component={ProductsList} options={({navigation}) => ({title: 'Productos', headerRight: () => <CartIcon navigation={navigation}  />})}  />
          <Stack.Screen name="ProductDetails" component={ProductDetails} options={({navigation}) => ({title: 'Producto', headerRight: () => <CartIcon navigation={navigation} />})} />
          <Stack.Screen name="Carrito" component={Cart} options={({navigation}) => ({title: 'Products', headerRight: () => <CartIcon navigation={navigation} />})} />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  )
}

const styles = StyleSheet.create({
  Container: {
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  }
})

export default App;