import React from 'react';
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity, Alert,ScrollView,ScrollViewPropsIOS } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {auth} from '../firebase/firebaseconfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";



export default function Login({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleRegister = () => {
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.length === 0 || password.length === 0){
      Alert.alert('OOPS', 'Por favor ingrese un email y una contraseña')
    }
    else if(!validEmail.test(email)){
      Alert.alert('Error', 'Por favor ingrese un email valido')
    }else{
      registerUser();
    }
  }

  const registerUser = async() =>{
    try {
      await signInWithEmailAndPassword(auth,email, password);
      navigation.navigate('Home');
      setEmail('');
      setPassword('');
      Alert.alert('HOLA', 'Bienvenido a Arthur shop');
    } catch (error) {
      let errorCode = error.code;
      switch (errorCode) {
        case 'auth/invalid-email':
          Alert.alert('Error', 'Por favor ingrese un email valido');
          break;
        case 'auth/user-not-found':
          Alert.alert('Error', 'El usuario no existe');
          break;
        case 'auth/wrong-password':
          Alert.alert('Error', 'La contraseña es incorrecta');
          break;
        default:
          Alert.alert('Error', 'Por favor ingrese un email y una contraseña');
          break;

      }
    }
  }


  return (
    <ScrollView>
      <View style={styles.container}>

        <View>
          <Image
            source={{ uri: 'https://i.picsum.photos/id/116/536/354.jpg?hmac=ppG_4t-DlWhDTT5fqzgHs-S7DRcvi4JtiNLOJyi63UI' }}
            style={styles.imagen}

          />
        </View>

        <View>
          <Text style={styles.text}>Iniciar Sesion</Text>
          <Text style={{ marginTop: 10, color: 'grey' }}>Email: </Text>
          <TextInput
            placeholder='Tu correo'
            style={styles.inputs}
            keyboardType='email-address'
            value={email}
            onChangeText={setEmail}
          />

          <Text style={{ marginTop: 20, color: 'grey' }}>Contraseña: </Text>
          <TextInput
            placeholder='Tu contrasena'
            style={styles.inputs}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />



          <TouchableOpacity style={styles.btnIniciar} onPress={() => {
            handleRegister();
          }}>
            <MaterialCommunityIcons name="login-variant" size={24} color="white" />
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: 'bold', marginLeft: 50 }}>Iniciar sesion</Text>
          </TouchableOpacity>

        
          <TouchableOpacity style={styles.btnpassOlvidada} onPress={() => {
            navigation.navigate('Reset')
          }}>
            <Text style={{ color: '#2E428B', textAlign: 'left', marginTop: 20, fontWeight: 'bold' }}>Olvide mi Contraseña?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnpassOlvidada} onPress={() => {
            navigation.navigate('Registro')
          }}>
            <Text style={{ color: '#2E428B', textAlign: 'left', marginTop: 20, fontWeight: 'bold' }}>Registrate Gratis!</Text>
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
    alignItems: 'center',
    marginTop:30,
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
    borderRadius: 5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start'
  },

  btnGoogle:{
    backgroundColor:'#015bf1',
    marginTop:20,
    padding:20,
    borderRadius: 5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-start'
  }

});