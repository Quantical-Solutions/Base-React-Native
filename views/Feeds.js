import React from "react";
import { Text, FlatList, Image, View, StyleSheet } from "react-native";
import XHR from "../utils/XHR";

const call = 'https://api.deezer.com/search?q='

export default class Feeds extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {

        XHR('deezer', call, 'Guns n Roses', (response) => {
            this.setState({data: response})
        })
    }

    render() {

        console.log(this.state.data)

        return(
            <View style={styles.container}>
                <Text>Liste des albums :</Text>
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) =>
                        <Text style={styles.item}>{item.album.title}</Text>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
})