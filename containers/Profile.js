import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native';

export default class Profile extends Component {
    render() {
        const { data } = this.props.route.params;
        return (
            <View>
                <Text>Profile</Text>
                <Text>{data.nombre}</Text>
            </View>
            
        );
    }
} 