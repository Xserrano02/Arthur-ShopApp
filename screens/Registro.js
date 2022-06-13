import React,{useState, useContext} from "react";
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity, Alert,ScrollView } from 'react-native';
import {createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
import {auth} from '../firebase/firebaseconfig';
import {CartContext} from "../CartContext";


const Registrarse = ({navigation}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setconfirmPass] = useState('');


  const handleRegister = () => {

    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.length === 0 || password.length === 0){
      Alert.alert('Error', 'Por favor ingrese un email y una contrasena')
    }
    else if(!validEmail.test(email)){
      Alert.alert('Error', 'Por favor ingrese un email valido')
    }else if(password !== confirmPass){
      Alert.alert('UPSSS', 'Las contrasenas no coinciden')
    }else{
      handleLogin();
    }
  }

  const handleLogin = async() =>{
    try {
      await createUserWithEmailAndPassword(auth,email, password);
      handleSendEmailVerification();
      setEmail('');
      setPassword('');
      navigation.navigate('Login');
    } catch (error) {
      alert(error.message);
    }
  }

  const handleSendEmailVerification = async() =>{
    try {
      await sendEmailVerification(auth.currentUser);
      Alert.alert('Correo de verificacion enviado!', 'Por favor revise su correo');
    } catch (error) {
      alert(error.message);
    }
  }

  
    return ( 
        <ScrollView >
          <View style={styles.container}>
            <View>
                <Image
                source={{uri: 'https://i.picsum.photos/id/116/536/354.jpg?hmac=ppG_4t-DlWhDTT5fqzgHs-S7DRcvi4JtiNLOJyi63UI'}}
                style={styles.imagen}
                />
              </View>

              <View>
                  <Text style={styles.text}>Registrarse</Text>

                  <Text style={{marginTop:20, color:'grey'}}>Correo: </Text>
                  <TextInput
                      placeholder='Tu correo'
                      style={styles.inputs}
                      value={email}
                      onChangeText={setEmail}
                  />

                  <Text style={{marginTop:20, color:'grey'}}>Contrasena: </Text>
                  <TextInput
                      placeholder='Tu contrasena'
                      style={styles.inputs}
                      secureTextEntry={true}
                      value={password}
                      onChangeText={setPassword}
                      
                  />

                  <Text style={{ marginTop: 10, color: 'grey' }}>Confirmar contrasena: </Text>
                  <TextInput
                    placeholder='Confirma tu contrasena'
                    style={styles.inputs}
                    secureTextEntry={true}
                    value={confirmPass}
                    onChangeText={setconfirmPass}
                  />


                  <TouchableOpacity style={styles.btnIniciar} onPress={()=>handleRegister()}>
                      <Text style={{color:'white', textAlign:'center', fontWeight:'bold'}}>Registrarse</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.btnpassOlvidada}>
                      <Text style={{color:'#2E428B', textAlign:'left', marginTop:20, fontWeight:'bold' }}>Ya tienes cuenta?</Text>
                  </TouchableOpacity>
              </View>
          </View>
           

        </ScrollView>
     );
}


const styles = StyleSheet.create({

    text:{
        fontSize:40,
        margin:20,
         
        fontWeight:'bold'
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop:30,
        alignItems:'center',
        paddingBottom:30,
        height:800
      },
    
      imagen:{height:200, width:1000, marginTop:-60},
    
      inputs:{
        padding:15,
        borderColor:'grey',
        borderWidth:1,
        marginTop:10,
        borderRadius:5
      },
    
      btnIniciar:{
        backgroundColor:'#2E428B',
        marginTop:20,
        padding:20,
        borderRadius: 5
      }
})
 
export default Registrarse;