import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getPoi } from '../poistate';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from '../components/Tabs';
const  MapList =() => {
    
    
    return (
           
                <NavigationContainer>
                    <Tabs/>
                </NavigationContainer>                   

    );

    


}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    topnav:{
        flex:0.2,
        backgroundColor: '#6610f2',
        justifyContent: 'center',
        width:'100%',
        
    },
    mapcont:{
        flex:1,
        backgroundColor: 'white',
        width: '100%',
        
    },
    logo:{
        flex:1,
        alignSelf:'center',

    },
    txt:{
        height:50,
        width:50,
        backgroundColor:'black',
    },
   
    mainwrap:{
        flexDirection:'column',
        flex:3,
        width:'100%',
    },
    

})

export default MapList;