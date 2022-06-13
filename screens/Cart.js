import React, {useEffect, useState, useContext} from "react";
import {View, Image, Text, Button, FlatList, StyleSheet,TouchableOpacity} from "react-native";
import { Alert } from "react-native-web";
import {CartContext} from "../CartContext";

export function Cart({navigation}){
    const {items, getItemsCount, getTotalPrice,deleteItemToCart, deleteItemProduct} = useContext(CartContext);

    function Totals(){
        let [total, setTotal] = useState(0);
		

		const DeleteItem = (items) => {

			if(items.length === 0){
				Alert.Alert("Oops", "No hay productos en el carrito");
			}else{
				deleteItemToCart();
			}


		}
        useEffect(() => {
            setTotal(getTotalPrice())
        })
        return(
            <View style={styles.cartLineTotal}>
                <Text style={[styles.lineLeft, styles.lineTotal]}>Precio total a pagar: </Text>
                <Text style={styles.mainTotal}>$ {total}</Text>
				<View>
					<TouchableOpacity onPress={DeleteItem} style={styles.borrar}><Text style={{color:'white', fontWeight:'bold'}}>Vaciar carrito</Text></TouchableOpacity>
					<TouchableOpacity onPress={()=>navigation.navigate('Datos')} 
					style={styles.borrar}><Text style={{color:'white', fontWeight:'bold'}}>Comprar</Text></TouchableOpacity>
				</View>	
            </View>
        )
    }


    function renderItem({item}){

        return(
            <>
                <View style={styles.container}>
					<View style={styles.cartLine}>
						<Image style={styles.image} source={item.product.image} />
						<Text style={styles.lineLeft}>{item.product.name}</Text>
					</View>
				
					<Text style={styles.cant}>Cantidad: {item.qty}</Text>
					<Text style={styles.price}>${item.totalPrice}</Text>
					<Text style={styles.description}>{item.product.description}</Text>
                </View>
            </>
        )
    }

    return(
        <FlatList
            style={styles.itemsList}
            contentContainerStyle={styles.itemsListContainer}
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.product.id.toString()}
            ListFooterComponent={Totals}
        />
    )

}

const styles = StyleSheet.create({
	cartLine: {
		flexDirection: 'row',
		width: '100%',
		paddingVertical: 10,
		backgroundColor: '#ffffff'
	},
	image: {
		width: '35%',
		aspectRatio: 1,
		marginRight: 20,
	},
	cartLineTotal: {
		flexDirection: 'row',
		borderTopColor: '#dddddd',
		borderTopWidth: 1,
		backgroundColor: '#ffffff',
		padding: 10
	},
	productTotal: {
		fontWeight: 'bold'
		
	},
	lineTotal: {
		fontWeight: 'bold'
	},
	lineLeft: {
		fontSize: 15,
		lineHeight: 40,
		
	},
	lineRight: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#333333',
		textAlign: 'left',
	},
	mainTotal: {
		flex: 1,
		fontSize: 20,
		fontWeight: 'bold',
		lineHeight: 40,
		color: '#333333',
		textAlign: 'left'
	},
	itemsList: {
		backgroundColor: '#eeeeee'
	},
	itemsListContainer: {
		backgroundColor: '#eeeeee',
		paddingVertical: 8,
		marginHorizontal: 8
	},
	container: {
		backgroundColor: '#ffffff',
		marginBottom: 20,
		
	},
	cant: {
		position: 'relative',
		top: -110,
		textAlign: 'center',
	},

	price: {
		position: 'relative',
		top: -100,
		textAlign: 'right',
		fontWeight: 'bold',
		fontSize: 20,
		paddingRight: 10
	},

	description: {
		display: 'flex',
		justifyContent: 'center',
		textAlign: 'justify',
		backgroundColor: '#2E428B',
		padding: 10,
		color: '#ffffff',
	},

	borrar: {
		backgroundColor: '#2E428B',
		padding: 10,
		borderRadius: 10,
		marginBottom: 10,
		textAlign: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	}

})