import React from "react";
import { Text } from "react-native";
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
            <Text>Feeds</Text>
        )
    }
}