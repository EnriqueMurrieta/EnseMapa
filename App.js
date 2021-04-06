import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Content from './containers/Content';
import Profile from './containers/Profile';
import Test from './tests/test';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './containers/Header';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home" 
          component={Content}
          options={{ title: 'Baja California' }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Perfil' }}
        />
        <Stack.Screen
          name="Header"
          component={Header}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*
<View style={styles.container}>
      <Content/>
      <StatusBar style="auto" />
    </View>
*/