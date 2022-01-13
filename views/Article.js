import React from "react";
import { Text, FlatList, Image, View, StyleSheet, Dimensions } from "react-native";
import XHR from "../utils/XHR";

const winWidth = Dimensions.get('window').width,
    winHeight = Dimensions.get('window').height

const call = 'http://api.eint-sandbox.fr?token=1234&'

export default class Article extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {

        XHR('fred', call, {table: 'articles'}, (response) => {
            this.setState({data: response.data})
        })
    }

    render() {

        return(
            <View style={styles.container}>
                <Text>Liste des articles :</Text>
                <FlatList
                    data={this.state.data}
                    renderItem={( {item} ) =>
                        <View style={styles.article}>
                            <Text>{item.title}</Text>
                            <Text>Publié par {item.author} le {item.date}</Text>
                            <Text>{item.chapo}</Text>
                            <Image source={{uri: item.image}} style={styles.img}/>
                            <Text>{item.content}</Text>
                        </View>
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
    article: {
        padding: 10,
        fontSize: 18
    },
    img: {
        height: 200
    }
})