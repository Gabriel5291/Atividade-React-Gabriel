import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Nome from './src/Nome';
import Imagem from './src/Imagem';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Nome" component={Nome} />
        <Stack.Screen name="Imagem" component={Imagem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
