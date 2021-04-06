import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native';

/*
<Text>{data.nombre}</Text>
*/

export default class Profile extends Component {
    render() {
        const { data } = this.props.route.params;
        return (
            <View style={styles.background}>
                <View>
                    <Text style={styles.title}>Gobernador</Text>
                </View>
                <View>
                    <Image 
                        style={styles.imagePartido}
                        source= {{uri: data.partido.img}}
                    />
                    <Text style={styles.text}>({data["inicio mandato"].fecha}-{data["termino mandato"].fecha})</Text>
                    <Image 
                        style={styles.image}
                        source= {{uri: data.img}}
                    />
                    <Text style={styles.text}>{data.nombre}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#E8E8E8' 
    },
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        flex: 1,
        width: '100%',
        marginHorizontal: 5,
    },
    title: {
        alignSelf: 'center',
        marginTop: 20,
        marginBottom: 5,
        fontSize: 50
    },
    subtitle: {
        marginTop: 40,
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10
    },
    subtitle2: {
        marginTop: 40,
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        alignSelf: 'center'
    },
    text: {
        alignSelf: 'center',
        fontSize: 20
    },
    textBebe: {
        flex: .5,
        fontSize: 20,
        textAlign: 'right',
        marginTop: 15
    },
    listLeft: {
        flex: 1,
        flexDirection: 'row',
        textAlign: 'left',
        padding: 10,
        fontSize: 20,
    },
    imagePartido: {
        alignSelf: 'center',
        width: 150,
        height: 100
    },
    image: {
        alignSelf: 'center',
        width: 100,
        marginTop: 20,
        height: 100,
        borderRadius: 50
    },
    imageBebe: {
        width: 65,
        height: 65
    },
    imageEscudo: {
        alignSelf: 'center',
        width: 170,
        height: 170
    }
    
  });