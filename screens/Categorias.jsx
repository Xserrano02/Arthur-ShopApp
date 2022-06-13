import react from "react";
import {Text,View,Image,TextInput,ScrollView,StyleSheet,TouchableOpacity} from "react-native";

function Categoria({navigation}) {
    return ( 
        <ScrollView style={styles.vista}>

            <Text style={{paddingTop:10 ,fontSize:30,paddingLeft:10, fontStyle:'arial'}}>Categorias</Text>
            
            <View style={styles.container}>
            <Image  style={styles.image} source={{ uri: 'https://static1.abc.es/media/summum/2021/12/20/hublotportada-k2lB--620x349@abc.jpg' }}/>
            <Image  style={styles.image} source={{ uri: 'https://www.namesnack.com/images/namesnack-nombres-para-tiendas-de-gorras-6713x4475-20210526.jpeg?crop=21:16,smart&width=420&dpr=2' }}/>
            </View>
            
            <View style={styles.button}>
                
            <TouchableOpacity 
            onPress={() => navigation.navigate('Products')}
            style={{borderRadius:10 ,backgroundColor:'#2e428b', padding:10, paddingLeft:50, paddingRight:50}}><Text style={{color:'white'}}>Ver</Text></TouchableOpacity>
            <TouchableOpacity style={{borderRadius:10 ,backgroundColor:'#2e428b', padding:10, paddingLeft:50, paddingRight:50}}><Text style={{color:'white'}}>Ver</Text></TouchableOpacity>
            </View>

            <View style={styles.container}>
            <Image  style={styles.image} source={{ uri: 'https://media.nidux.net/pull/599/800/10373/122-product-5f3cb86262027-2714.jpg' }}/>
            <Image  style={styles.image} source={{ uri: 'https://www.esquirelat.com/wp-content/uploads/2018/04/5-lociones-fuera-de-lo-comn-perfectas-para-el-veranoh.jpg.imgw_.1280.1280.jpeg-770x385.jpg' }}/>
            </View>
            
            <View style={styles.button}>
            <TouchableOpacity style={{borderRadius:10 ,backgroundColor:'#2e428b', padding:10, paddingLeft:50, paddingRight:50}}><Text style={{color:'white'}}>Ver</Text></TouchableOpacity>
            <TouchableOpacity style={{borderRadius:10 ,backgroundColor:'#2e428b', padding:10, paddingLeft:50, paddingRight:50}}><Text style={{color:'white'}}>Ver</Text></TouchableOpacity>
            </View>



        </ScrollView>

        
     );
}

const styles = StyleSheet.create({
    container:{marginTop:15,display:'flex', textAlign:'center',justifyContent:'center',flexDirection:'row'},
    image: {height:190,width:180,margin:5, borderRadius:10},
    button: {flexDirection:'row',justifyContent:'space-around'},
    vista:{marginBottom:30}
  })
export default Categoria;