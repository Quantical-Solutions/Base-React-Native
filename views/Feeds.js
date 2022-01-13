import React from "react";
import { Text, FlatList, Image, View, StyleSheet, TextInput } from "react-native";
import XHR from "../utils/XHR";

const call = 'https://api.deezer.com/search?q='

export default class Feeds extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    handleText = (text) => {

        XHR('deezer', call, text, (response) => {
            this.setState({data: response})
        })
    }

    render() {

        return(
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="Taper le nom d'un artiste"
                    onChangeText={text => this.handleText(text)}
                />
                <FlatList
                    data={this.state.data}
                    renderItem={( {item} ) =>
                        <View style={styles.album}>
                            <Text style={styles.title}>{item.album.title}</Text>
                            <View style={styles.imgContainer}>
                                <Image source={{uri: item.album.cover}} style={styles.img} />
                            </View>
                        </View>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    album: {
        padding: 20,
        margin: 20,
        fontSize: 18,
        marginBottom: 30,
        backgroundColor: '#E7E7E7',
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#fff',
        shadowOffset: { width: 15, height: 15 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 4,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 20,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
    },
    input: {
        margin: 20,
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderBottomColor: '#E1E1E1',
        backgroundColor: '#fff',
        overflow: 'hidden',
        shadowOffset: { width: 15, height: 15 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 4,
        borderRadius: 8
    },
    imgContainer: {
        height: 80,
        width: 80,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#A1A1A1',
        overflow: 'hidden',
        shadowOffset: { width: 15, height: 15 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 4,
        backgroundColor: '#fff'
    },
    img: {
        height: 80,
        width: 80
    }
})