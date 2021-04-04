import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image, FlatList } from 'react-native';
import db from '../src/data.json';
import Header from './Header'

const data = db["baja california"]["presidencia municipal"].municipios[0].alcaldes["ex presidentes municipales"];
const ex = db["baja california"].gobernador["ex gobernadores"];

const renderItem = ({ item }) => {
        if (item.partido.nombre == 'PRI'){
            return(
                <View style={styles.list}>
                    <Image 
                        style={styles.imageBebe2}
                        source= {require('../images/bc/pri.png')} 
                    />
                    <Text style={styles.text}>{item["inicio mandato"].ano}-{item["termino mandato"].ano}</Text>
                    <Image 
                        style={styles.image2}
                        source= {{uri: item.img}} 
                    />
                    <Text style={styles.text}>{item.nombre}</Text>
                </View>
            );
        } else if (item.partido.nombre == 'PAN'){
            return(
                <View style={styles.list}>
                    <Image 
                        style={styles.imageBebe2}
                        source= {require('../images/bc/pan.png')} 
                    />
                    <Text style={styles.text}>{item["inicio mandato"].ano}-{item["termino mandato"].ano}</Text>
                    <Image 
                        style={styles.image2}
                        source= {{uri: item.img}} 
                    />
                    <Text style={styles.text}>{item.nombre}</Text>
                </View>
            );
        } else if (item.partido.nombre == 'MORENA'){
            return(
                <View style={styles.list}>
                    <Image 
                        style={styles.imageBebe2}
                        source= {require('../images/bc/morena.png')} 
                    />
                    <Text style={styles.text}>{item["inicio mandato"].ano}-{item["termino mandato"].ano}</Text>
                    <Image 
                        style={styles.image2}
                        source= {{uri: item.img}} 
                    />
                    <Text style={styles.text}>{item.nombre}</Text>
                </View>
            );
        } else if (item.partido.nombre == 'PST'){
            return(
                <View style={styles.list}>
                    <Image 
                        style={styles.imageBebe2}
                        source= {require('../images/pst.png')} 
                    />
                    <Text style={styles.text}>{item["inicio mandato"].ano}-{item["termino mandato"].ano}</Text>
                    <Image 
                        style={styles.image2}
                        source= {{uri: item.img}} 
                    />
                    <Text style={styles.text}>{item.nombre}</Text>
                </View>
            );
        }
}

/* source= {require('../images/Escudo.png')} 
source= {{uri: item.partido.img}} */

export default class Content extends Component {  
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <FlatList
                    ListHeaderComponent={
                        <>
                            <Header/>
                        </>
                    }
                    style={styles.scrollView}
                    numColumns='2'
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
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
    text: {
        textAlign: 'center',
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
        height: 100
    },
    image2: {
        alignSelf: 'center',
        width: 75,
        height: 75
    },
    imageBebe: {
        width: 75,
        height: 75
    },
    imageBebe2: {
        width: 50,
        height: 50,
        alignSelf: 'center'
    },
    imageEscudo: {
        alignSelf: 'center',
        width: 200,
        height: 200
    },
    list: {
        width: '48 %',
        marginTop: 20,
        backgroundColor: '#d3d3d3'
    }
  });