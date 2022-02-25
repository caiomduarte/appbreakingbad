
import React, {useState} from 'react';

import {Text, Image, StyleSheet, ImageBackground,  TouchableOpacity } from 'react-native';

import api from '../../services/api';


export default function Home() {


 return (
     
      <ImageBackground source={image} resizeMode="cover" blurRadius={8} 
           style={styles.container} >
       
        <Image  style={styles.img} source={{uri: foto}}/>

        <Text style={styles.titulo}>Walter White</Text>
        <Text style={styles.subtitulo}>Heisenberg</Text>

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sortear</Text>
        </TouchableOpacity>

      </ImageBackground>
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },

  img:{
      borderRadius: 100,
      borderColor: '#016931',
      borderWidth:5,
      marginBottom: 1,
      width:200,
      height:200
  },
  
  fundo:{
    flex: 1,
    justifyContent: "center"
  },

  titulo:{
      fontSize:40,
      fontWeight: 'bold',
      color:'#FFF',
      marginTop:20
  },

  subtitulo:{
    fontSize:30,
    color:'#FFF',
    marginBottom:30
    
  },

  button:{
      backgroundColor: '#016931',
      width: 150,
      height: 50,
      marginTop:10,
      borderRadius: 50,
      justifyContent: 'center',
      alignItems: 'center'
  },

  buttonText:{
      fontSize:15,
      fontWeight: 'bold',
      color:'#FFF',
   
  }


});