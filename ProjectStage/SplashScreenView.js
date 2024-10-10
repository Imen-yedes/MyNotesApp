import { StyleSheet, Text, View, Image } from 'react-native';
import icon from "./assets/icon.png";


export default function SplashScreen(){
    return(
        <View style={[styles.container,{ backgroundColor: "#C2E2F2"}]}>
            <View>
                <Image source={icon} style={styles.image}/>
            </View>
        </View>
    )
}


const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#C2E2F2",
    },
    image:{
        width:100, 
        height:100, 
        resizeMode: "cover",
    }
})