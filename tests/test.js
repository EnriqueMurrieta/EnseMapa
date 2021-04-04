import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image, FlatList } from 'react-native';
import test from '../src/test.json';

const renderItem = ({ item }) => (
    <Text>{item.nombre}</Text>
);

export default class Test extends Component {  
    render() {
        return(
            <SafeAreaView>
                <FlatList
                    ListHeaderComponent={
                        <>
                            <Text>{test[1].nombre}</Text>
                        </>}
                    data={test}
                    renderItem={renderItem}
                    keyExtractor={item => item["inicio mandato"].fecha}
                /> 
            </SafeAreaView>
        );
    }
}