import React from "react";
import { View, Text } from "react-native";

export default class Test3 extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Test 3</Text>
            </View>
        )
    }
}