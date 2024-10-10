import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import React from "react"
import Onboarding from 'react-native-onboarding-swiper';
//import LottieView from 'lottie-react-native';
import Onboarding1 from "./assets/Onboarding1.png";
import Onboarding2 from "./assets/Onboarding2.png";
import Onboarding3 from "./assets/Onboarding3.png";

// console.log('Image path:', require('./assets/animations/1.json'));
const{width, height} =Dimensions.get('window');


export default function OnBoardingScreen(){
    return(
        <View style={styles.container}>
            <Onboarding
                containerStyles={{paddingHorizontal:15}}
                pages={[
                    {
                        backgroundColor: '#C2E2F2',
                        image:(
                            <View>
                                 <Image source={Onboarding1} style={styles.image}/>
                            </View>
                        ),
                        title: 'Stay Organised and Productive',
                        subtitle: 'With us !',
                    },
                    {
                        backgroundColor: '#C2E2F2',
                        
                        image:(
                            <View>
                                  <Image source={Onboarding2} style={styles.image}/>
                            </View>
                        ),
                        title: 'Don’t forget any Task',
                        subtitle: 'With us !',
                    },
                    {
                        backgroundColor: '#C2E2F2',
                        image:(
                            <View>
                                <Image source={Onboarding3} style={styles.image}/>
                            </View>
                        ),
                        title: 'Manage your daily Tasks',
                        subtitle: 'With us !',
                    },
                ]}
            />
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    /*lottie:{
        width:width*0.9,
        height:height*0.5,
        justifyContent:'center',
        alignItems:'center',
    }*/
   image:{
        width:width*0.9, 
        height:height*0.5, 
        marginTop:20,
        resizeMode:"cover",
        alignItems:"center",
    }
})