import React, {useContext} from "react";
import {View, Text, StyleSheet} from "react-native";
import { CartContext } from "../CartContext";
import { AntDesign } from '@expo/vector-icons';

export function CartIcon({navigation}){
    const {getItemsCount} = useContext(CartContext);
    return(
        <View style={styles.container}>
            <Text style={styles.text} onPress={() => {navigation.navigate('Carrito')}}>
			<AntDesign name="shoppingcart" size={20} color="white" /> Carrito ({getItemsCount()})
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 8,
		backgroundColor: '#2E428B',
		height: 39,
		padding: 12,
		borderRadius: 32,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 2,
		paddingBottom: 5,
	},
	text: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 13
	}
})