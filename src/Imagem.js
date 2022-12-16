import {StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function Imagem(){

    return(
        <View>
            <Image source={require('../assets/gabriel.jpg')} style={estilo.img}/>
        </View>
    )
}

const estilo = StyleSheet.create({
    img:{
        width:370,
        height:380,
        resizeMode:'contain'
    }
})