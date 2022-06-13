import React from 'react';
import { View,Text,TextInput,StyleSheet, TouchableOpacity,Alert } from 'react-native';
import { auth } from '../firebase/firebaseconfig';
import { sendPasswordResetEmail } from 'firebase/auth';

const ResetPassword = () => {
    const [email, setEmail] = React.useState('');

    const handleResetPassword = () => {
        const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if(email.length === 0){
            Alert.alert('Error', 'Por favor ingrese un email')
        }else if(!validEmail.test(email)){
            Alert.alert('Error', 'Por favor ingrese un email valido')
        }else{
            sendPasswordResetEmail(auth, email)
            .then(() => {
                Alert.alert('Email enviado', 'Revisa tu bandeja de entrada')
                setEmail('')
            })
            .catch(() => {
                Alert.alert('Error', 'El email ingresado no existe')
            })
        }

    }
    return ( 
        <View style={styles.container}>
            <Text style={{color:'black', fontWeight:'bold', fontSize:40, width:'70%' }}>Cambiar Contrasena</Text>
            <Text style={{color:'grey', fontWeight:'bold', fontSize:20}}>Ingresa tu correo electronico</Text>

            <TextInput
                style={styles.inputs}
                placeholder='Tu correo'
                keyboardType='email-address'
                value={email}
                onChangeText={setEmail}
            />

            <TouchableOpacity style={styles.btnIniciar}><Text style={{color: 'white', textAlign:'center', fontWeight:'bold'}}
            onPress={handleResetPassword}>
                Enviar Reset</Text>
                </TouchableOpacity>

        </View>
     );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        height:800,
        paddingTop:100
      },
      inputs:{
        padding:15,
        borderColor:'grey',
        borderWidth:1,
        marginTop:10,
        borderRadius:5,

        backgroundColor:'white',
        width:'80%'
      },
      btnIniciar:{
        backgroundColor:'#2E428B',
        marginTop:20,
        padding:20,
        borderRadius: 5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
      }
});
 
export default ResetPassword;