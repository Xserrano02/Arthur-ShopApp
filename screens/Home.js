import react from "react";
import { ProductsList } from "./ProductsList";
import {View} from "react-native";
import Portada from "../components/Portada";
import { ScrollView } from "react-native";
import  Categorias from "./Categorias";

export default function Home ({navigation}) {
    return ( 
        <ScrollView>
            <Portada navigation={navigation}/>
            <Categorias navigation={navigation}/>
            
        </ScrollView>
     );
}
 
