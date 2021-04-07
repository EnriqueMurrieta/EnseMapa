import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native';
import ProfileHeader from './ProfileHeader';

const press = () => {
    return (
        <View>
            <Text>Sup, dude</Text>
        </View>
    );
}

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showDetails: false,
          showExp: false,
        };
    }
    /*
    <View>
                    <Text>{item.ocupacion}</Text>
                </View>
    */

    /*                 MODIFICAR JSON PARA COMPATIBILIDAD CON FLATLIST CON EXGOBERNADORES, SOLO BONILLA SE ENCUENTRA FUNCIONAL
    */
    render() {
        dang = ({ item }) => {
            return (
                <View>
                    <View>
                        <TouchableOpacity onPress={() => this.setState({ showDetails: !this.state.showDetails })}>
                            <Text style={styles.subtitle3}>Mostrar detalles</Text>
                        </TouchableOpacity>
                    </View>
                    {this.state.showDetails ? (
                        <View>
                            <TouchableOpacity onPress={() => this.setState({ showExp: !this.state.showExp })}>
                                <Text style={styles.text}>Experiencia publica</Text>
                            </TouchableOpacity>
                            {this.state.showExp ? 
                                <Text>Que tranza perro</Text>
                            : null }
                            <Text style={styles.text}>Nacimiento</Text>
                            {item["numero de partidos"] !== 0 ? 
                                <TouchableOpacity>
                                    <Text style={styles.text}>Ex partidos</Text>
                                </TouchableOpacity>
                            : null }
                            <TouchableOpacity>
                                <Text style={styles.text}>Experiencia publica</Text>
                            </TouchableOpacity>
                        </View>
                    ) : null }
                </View>
            );
        }
        const { data } = this.props.route.params;
        return (
            <SafeAreaView style={styles.container}>
                <FlatList
                    ListHeaderComponent={
                        <>
                            <ProfileHeader data={data}/>
                        </>
                    }
                    style={styles.scrollView}
                    /*numColumns='2'
                    columnWrapperStyle={{justifyContent: 'space-between'}}*/
                    data={data.detalles}
                    renderItem={dang}
                    keyExtractor={(item, index) => index.toString()}
                />
        </SafeAreaView>
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
    container2: {
        /*flex: 2,*/
        marginTop: 45,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    contained2: {
        width: '48%',
        backgroundColor: '#d3d3d3',
        alignItems: 'center'
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
    subtitle3: {
        fontWeight: 'bold',
        fontSize: 20,
        padding: 10,
        alignSelf: 'center'
    },
    text: {
        alignSelf: 'center',
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
        height: 100,
        borderRadius: 50
    },
    image2: {
        alignSelf: 'center',
        width: 100,
        marginBottom: 10,
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