import React from "react";
import {Text, Image, View, StyleSheet, TouchableOpacity} from "react-native";
import Portada from "./Portada";
import { AntDesign } from '@expo/vector-icons';
export function Product({name, price, image, onPress}){
    return(
        <View>
            <TouchableOpacity style={styles.card} onPress={onPress}>
                <Image style={styles.image} source={image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.price}>$ {price}</Text>
                    <TouchableOpacity onPress={onPress} style={styles.btnVer}>
                         <Text style={styles.txt}>Ver Producto</Text>
                         <AntDesign name="eye" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

        </View>

    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 15, 
        display: 'flex',
        backgroundColor: 'white',
        textAlign: 'center',
        justifyContent: 'center',
        flexDirection: 'row', 
        flexWrap: 'wrap',
        borderRadius: 10
    },
    image: {
        width: '100%',
        aspectRatio: 1
    },
    infoContainer: {
        padding: 26 
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8
    },

    btnVer: {
        borderRadius: 10,
        backgroundColor: '#2e428b',
        padding: 15,
        width: 180,
        marginTop: 10,
        alignItems: 'center',
        margin:10,
        width:280,
        display: 'flex',
        flexDirection: 'row',
        textAlign: 'center',
        justifyContent: 'center'
    },

    txt: {
        color: 'white',
        fontWeight: 'bold',
        marginRight: 10
    }
})