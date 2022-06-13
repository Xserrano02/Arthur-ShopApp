import React from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import reloj1 from "../assets/product_images/imagen7.jpg";
import reloj2 from "../assets/product_images/imagen5.jpg";


const Portada = ({navigation}) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.destacado}>Mas vendidos de la semana</Text>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Products')
        }}>
          <Image
            source={reloj1}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.card1}>
        <TouchableOpacity>
        <Image
          source={{
            uri: "https://st.mngbcn.com/rcs/pics/static/T2/fotos/S20/27044377_07.jpg?ts=1639501552354&imwidth=523&imdensity=2",
          }}
          style={styles.image1}
        />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{
          navigation.navigate('Products')
        }}>
          
        <Image
          source={reloj2}
          style={styles.image1}
        />
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: "center", zIndex: 50, marginTop: 20 },
  image: {
    marginTop: 10,
    height: 260,
    width: 10,
    borderRadius: 15,
    backgroundColor: "red",
    width: 350,
    height: 260,
    shadowColor: "black",
    shadowOffset: { height: 10 },
    shadowOpacity: 0.6,
    backgroundColor: "white",
  },

  destacado: {
    fontSize: 15,
    marginTop: 20,
    fontWeight: "bold",
    backgroundColor: "#d6241e",
    color: "white",
    padding: 10,
  },

  card1: {
    marginTop: 15,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },

  image1: {
    height: 190,
    width: 180,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
});
export default Portada;
