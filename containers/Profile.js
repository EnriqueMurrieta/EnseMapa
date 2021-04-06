import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native';

export default class Profile extends Component {
    render() {
        return (
            <Text>{this.props.info.nombre}</Text>
        );
    }
} 