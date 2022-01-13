import React from "react";
import { Text } from "react-native";
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

        console.log(this.state.data)

        return(
            <Text>Article</Text>
        )
    }
}