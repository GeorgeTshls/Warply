import React from 'react';
import { SafeAreaView, StyleSheet, Image, View, } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { AntDesign } from '@expo/vector-icons'; 

function WelcomeWrapper({navigation}) {
    const pressHandler = ()=>{
        navigation.push('Map')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flex:0.5, justifyContent:'space-evenly'}}>
            <Image style={styles.welcome} source={require('../assets/warply.png')}/>
            <View style={styles.nextview}>
            
            <AntDesign  style={{alignSelf:'center'}} name="caretright" size={32} stroke="#2ad0bc" strokewidth="4" color="white" onPress={pressHandler}/>
            </View>
            <StatusBar style="auto" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6610f2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    welcome: {
      overflow: 'hidden',
      zIndex: 1,
      position: 'relative',
  
    },
    nextview:{
      borderColor:"#2ad0bc", 
      width:60, 
      height:60, 
      justifyContent:'center', 
      alignSelf:'center', 
      borderWidth:2,
      borderRadius: 30,
      borderStyle: 'solid',

    }
   
  });

export default WelcomeWrapper;