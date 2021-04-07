import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image, FlatList, TouchableOpacity } from 'react-native';

export default class ProfileHeader extends Component {
    
    render(){
        return(
            <View style={styles.background}>
                <View>
                    <Text style={styles.title}>Gobernador</Text>
                </View>
                <View>
                    <Image 
                        style={styles.imagePartido}
                        source= {{uri: this.props.data.partido.img}}
                    />
                    <Text style={styles.text}>({this.props.data["inicio mandato"].fecha}-{this.props.data["termino mandato"].fecha})</Text>
                    <Image 
                        style={styles.image}
                        source= {{uri: this.props.data.img}}
                    />
                    <Text style={styles.text}>{this.props.data.nombre}</Text>
                </View>
                <View style={styles.container2}>
                    <View style={styles.contained2}>
                        <TouchableOpacity>
                            <Text style={styles.subtitle3}>Predecesor</Text>
                            <Image 
                                style={styles.image2}
                                source= {{uri: this.props.data["partido predecesor"].img}}
                            />
                            <Text style={styles.text}>{this.props.data.predecesor}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.contained2}>
                        {this.props.data["partido sucesor"] ? (
                            <TouchableOpacity>
                                <Text style={styles.subtitle3}>Sucesor</Text>
                                <Image 
                                    style={styles.image2}
                                    source= {{uri: this.props.data["partido sucesor"].img}}
                                />
                                <Text style={styles.text}>{this.props.data.sucesor}</Text>
                            </TouchableOpacity>
                        ) : null }
                    </View>
                </View>
                
            </View>
        );
    }
}

/*

*/

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