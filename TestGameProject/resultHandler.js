import React, {Component} from 'react';
import {Text,View} from "react-native";

export default class Result extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return(


            <View>
            {
                Object.keys(this.props.clicks).map(function (key) {
                    return <Text>Key: {key}, Value: {this.props.clicks[key]}</Text>;
                })

            }
            </View>
        )

    }
}