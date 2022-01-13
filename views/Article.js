import React from "react";
import { Text, FlatList, Image, View, StyleSheet } from "react-native";
import XHR from "../utils/XHR";

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
            this.setState({data: response})
        })
    }

    render() {

        return(
            <View style={styles.container}>
                <Text>Liste des articles :</Text>
                <FlatList
                    data={this.state.data}
                    renderItem={({article}) =>
                        {console.log(article)}
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
        fontSize: 18,
        height: 44
    }
})