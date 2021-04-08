import React, { Component } from 'react';
import { StyleSheet, StatusBar, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import db from '../src/data.json';

/*
<Text style={styles.text}>{db["baja california"].gobernador.nombre}</Text>
*/


export default class Header extends Component {
    render() {
        const info = db["baja california"].gobernador; 
        return (
            <View style={styles.background}>
                <View>
                    <Image 
                        style={styles.imageEscudo}
                        source= {require('../images/bc/escudo.png')}
                    />
                </View>
                <View>
                    <Text style={styles.title}>Gobernador</Text>
                </View>
                <View>
                    <Image 
                        style={styles.imagePartido}
                        source= {require('../images/bc/morena.png')}
                    />
                    <Text style={styles.text}>({db['baja california'].gobernador["inicio mandato"].ano}-{db['baja california'].gobernador["termino mandato"].ano})</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile', { data: info })}>  
                    <Image 
                        style={styles.image}
                        source= {require('../images/bc/JaimeBonilla.png')}
                    />
                    <Button title={db["baja california"].gobernador.nombre} onPress={() => this.props.navigation.navigate('Profile', { data: info })}/>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.subtitle}>Históricamente</Text>
                    <View style={styles.listLeft}>
                        <Image 
                            style={styles.imageBebe}
                            source= {require('../images/bc/morena.png')}
                        />
                        <Text style={styles.textBebe}>{db["baja california"].gobernador.historicamente.morena.porcentaje}</Text>
                    </View>
                    <View style={styles.listLeft}>
                        <Image 
                            style={styles.imageBebe}
                            source= {require('../images/bc/pri.png')}
                        />
                        <Text style={styles.textBebe}>{db["baja california"].gobernador.historicamente.pri.porcentaje}</Text>
                    </View>
                    <View style={styles.listLeft}>
                        <Image 
                            style={styles.imageBebe}
                            source= {require('../images/bc/pan.png')}
                        />
                        <Text style={styles.textBebe}>{db["baja california"].gobernador.historicamente.pan.porcentaje}</Text>
                    </View>
                </View>
                <Text style={styles.subtitle2}>Ex gobernadores</Text>
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
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'gray',
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