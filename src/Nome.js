import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export default function Nome(props){
    return(
        <View style={styles.container}>
            <Text>Gabriel Ribeiro</Text>
            <Button title='Imagem' onPress={()=>props.navigation.navigate('Imagem')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });