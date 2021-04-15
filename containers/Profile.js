import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import ProfileHeader from './ProfileHeader';
import { AntDesign } from '@expo/vector-icons';

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
          showPartidos: false,
          showEdu: false
        };
    }
    /*
    <View>
                    <Text>{item.ocupacion}</Text>
                </View>
    */

    /* 
    <View style={styles.icon}>
                                    <AntDesign name="bars" size={20} color="black" />
                                </View>
    */
    render() {
        detalles = ({ item }) => {
            experiencia = ({ item }) => {
                return (
                    <View >
                        <View style={styles.detailsContent}>
                            <Text style={{fontWeight: "bold"}}>{item.cargo}</Text>
                            <Text>{item.por}</Text>
                            <Text>{item["inicio mandato"].fecha} - {item["termino mandato"].fecha}</Text>
                        </View>
                        <View style={styles.detailsSubContent}>
                            <View>
                                <Text>{item.predecesor}</Text>
                                <Text style={{fontStyle: "italic"}}>(Predecesor)</Text>
                            </View>
                            <View>
                                <Text>{item.sucesor}</Text>
                                <Text style={{fontStyle: "italic"}}>(Sucesor)</Text>
                            </View>
                        </View>
                    </View>
                );
            },
            partidos = ({ item }) => {
                return (
                    <View>
                        <View style={styles.detailsContentEx}>
                            <Text style={{fontWeight: "bold"}}>{item.partido}</Text>
                            <Text>{item.inicio.fecha} - {item.termino.fecha}</Text>
                        </View>
                    </View>
                );
            }
            educacion = ({ item }) => {
                return (
                    <View>
                        <View style={styles.detailsContentEx}>
                            <Text style={{fontWeight: "bold"}}>{item.titulo}</Text>
                            <Text>{item.institucion}</Text>
                        </View>
                    </View>
                );
            }
            return (
                <View>
                    <View>
                        <TouchableOpacity onPress={() => this.setState({ showDetails: !this.state.showDetails })}>
                            <View style={styles.subtitle3}>
                                <Button title="Mostrar detalles" onPress={() => this.setState({ showDetails: !this.state.showDetails })}/>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {this.state.showDetails ? (
                        <View>
                            <TouchableOpacity style={styles.detailsList} onPress={() => this.setState({ showExp: !this.state.showExp })}>
                                <Button title="Experiencia publica" onPress={() => this.setState({ showExp: !this.state.showExp })}/>
                            </TouchableOpacity>
                            {this.state.showExp ? 
                                <SafeAreaView style={styles.container}>
                                    <FlatList
                                        style={styles.scrollView}
                                        /*numColumns='2'
                                        columnWrapperStyle={{justifyContent: 'space-between'}}*/
                                        data={item["experiencia publica"]}
                                        renderItem={experiencia}
                                        keyExtractor={(item, index) => index.toString()}
                                        listKey="ProfileExpKey"
                                    />
                                </SafeAreaView>
                            : null }
                            {item["numero de ex partidos"] != 0 ? 
                                <View>
                                    <TouchableOpacity style={styles.detailsList} onPress={() => this.setState({ showPartidos: !this.state.showPartidos })}>
                                        <Button title="Ex partidos" onPress={() => this.setState({ showPartidos: !this.state.showPartidos })}/>
                                    </TouchableOpacity>
                                    {this.state.showPartidos ? 
                                        <SafeAreaView style={styles.container}>
                                            <FlatList
                                                style={styles.scrollView}
                                                /*numColumns='2'
                                                columnWrapperStyle={{justifyContent: 'space-between'}}*/
                                                data={item["ex partidos"]}
                                                renderItem={partidos}
                                                listKey="ProfilePartidosKey"
                                                keyExtractor={(item, index) => index.toString()}
                                            />
                                        </SafeAreaView>
                                    : null }
                                </View>
                            : null }
                            <View>
                                <TouchableOpacity style={styles.detailsList} onPress={() => this.setState({ showEdu: !this.state.showEdu })}>
                                    <Button title="Educacion" onPress={() => this.setState({ showEdu: !this.state.showEdu })}/>
                                </TouchableOpacity>
                                {this.state.showEdu ? 
                                    <SafeAreaView style={styles.container}>
                                        <FlatList
                                            style={styles.scrollView}
                                            /*numColumns='2'
                                            columnWrapperStyle={{justifyContent: 'space-between'}}*/
                                            data={item.educacion}
                                            renderItem={educacion}
                                            listKey="ProfileEduKey"
                                            keyExtractor={(item, index) => index.toString()}
                                        />
                                    </SafeAreaView>
                                : null }
                            </View>
                            <Text style={styles.text}>Nacimiento</Text>
                            <Text style={styles.text}>{item.nacimiento.fecha}</Text>
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
                    listKey="ProfileMainKey"
                    renderItem={detalles}
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
    detailsList: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        padding: 20
    },
    detailsContent: {
        textAlign: 'center',
        alignItems: 'center'
    },
    detailsContentEx: {
        textAlign: 'center',
        alignItems: 'center',
        marginBottom: 20
    },
    detailsSubContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        /*alignItems: 'flex-start',
        alignSelf: 'flex-start',*/
        marginLeft: 10,
        marginTop: 5,
        marginRight: 10,
        justifyContent: 'space-between',
        marginBottom: 20
    },
    icon: {
        marginTop: 3,
        marginLeft: 10,
        marginRight: 25
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
        alignSelf: 'auto',
        textAlign: 'left',
        fontSize: 20,
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