import React from 'react';
import { StyleSheet } from 'react-native';
import Content from './containers/Content';
import Profile from './containers/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Header from './containers/Header';
import ProfileHeader from './containers/ProfileHeader';

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
        <Stack.Screen
          name="ProfileHeader"
          component={ProfileHeader}
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