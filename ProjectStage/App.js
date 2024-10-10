import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from './SplashScreenView';
import HomeScreen from "./HomeScreen.js";
import { AppRegistry } from 'react-native';
import { useState, useEffect } from 'react';
import OnBoardingScreen from './OnBoardingScreen.js';

// AppRegistry.registerComponent('YourAppName', () => App);

// implementation SplashScreen
export default function App(){
  const [isShowSplash, setIsShowSplash]= useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsShowSplash(false);
    },5000);

    // hedhi tkhaliha mato93odech fel onborading twari loula 1s w tarja3 splashscreen
    //setIsShowSplash(true);
  });
  
  //hedhi tkhaliha dima fel splashscreen
  //return <>{isShowSplash ?<SplashScreen/>:<SplashScreen/>}</>; 

  return <>{isShowSplash ? <SplashScreen/> : <OnBoardingScreen/>}</>;

//implementation OnBoarding
  //return <><OnBoardingScreen></OnBoardingScreen></>;
}