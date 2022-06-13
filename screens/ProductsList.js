import React, {useEffect, useState} from "react";
import {View, Text, FlatList, StyleSheet} from "react-native";
import { getProducts } from "../services/ProductsService";
import {Product} from "../components/Product";


export function ProductsList({navigation}){

    function renderProduct({item: product}){
        return(
            <View >

                <Product 
                {...product}
                onPress={() => {
                    navigation.navigate('ProductDetails', {productId: product.id})
                }}
            />
            </View>
            
        )
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProducts())
    })

    return(
        <View>
            <FlatList 
            style={styles.productsList}
            contentContainerStyle={styles.productsListContainer}
            keyExtractor={(item) => item.id.toString()}
            data={products}
            renderItem={renderProduct}
        />

        </View>

    )

}

const styles = StyleSheet.create({
    productsList: {
      backgroundColor: "#eeeeee",
    },
    productsListContainer: {
      backgroundColor: "#eeeeee",
      paddingVertical: 10,
      marginHorizontal: 30,
    },

  });
  