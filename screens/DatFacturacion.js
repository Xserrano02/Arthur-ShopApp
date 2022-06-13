import React from 'react'
import { Text, View, StyleSheet, TextInput} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const DatFacturacion = () => {
    return (
        <ScrollView>
            <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 20, fontWeight: 'bold' }}>Datos de Facturacion y entrega</Text>

            <View style={styles.container}>

                <View>
                    <Text>Nombre</Text>
                    <TextInput style={styles.input} placeholder="Escribe tu nombre" />
                </View>
                <View>
                    <Text>Apellido</Text>
                    <TextInput style={styles.input} placeholder="Escribe tu apellido" />
                </View>
                <View>
                    <Text>Correo Electronico</Text>
                    <TextInput style={styles.input} placeholder="Ejem: correo@correo.com" />
                </View>
                <View>
                    <Text>Teléfono</Text>
                    <TextInput style={styles.input} keyboardType='numeric' placeholder="5555-5555" />
                </View>
                <View>
                    <Text>Dirección</Text>
                    <TextInput style={styles.input} placeholder="Pje, Calle, Local, Colonia" />
                </View>
                <View>
                    <Text>Departamento</Text>
                    <TextInput style={styles.input} placeholder="Ejem: San Salvador" />
                </View>
                <View>
                    <Text>Municipio</Text>
                    <TextInput style={styles.input} placeholder="Ejem: Mejicanos" />
                </View>

            </View>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.button}>Pagar</Text>
            </TouchableOpacity>

        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop:10,
        width:380,
        display:'flex',

        borderRadius:10,
        justifyContent:'space-around',
        margin:15         
    },
    input:{
        borderColor:'black',
        borderWidth:1,
        padding:10,
        paddingLeft:10,
        paddingRight:10,
        height:55,
        marginVertical:10,
    },

    btn:{
        borderRadius: 10,
        backgroundColor: '#2e428b',
        padding: 15,
        width: 180,
        marginTop: 10,
        alignItems: 'center',
        margin:10,
        width:380
    },


    button:{
        color:'white',
        fontSize:15,
        fontWeight:'bold',
    },

    txtfacturacion:{
        fontSize:50,
        fontWeight:'bold',
    }
}) 
export default DatFacturacion;