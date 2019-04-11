import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";

export default class PlaceOfGame extends Component {
    constructor(props) {
        super(props);
        this.numberOfClicks = 0;

    }

    incrementHandle = () => {
        this.numberOfClicks += 1;
        this.props.setClicks(this.props.name, this.numberOfClicks);
    };

    render() {

        const { name, childrenStyle } = this.props;

        return(
            <View>
                <TouchableOpacity onPress={this.incrementHandle} style={childrenStyle}>
                    <Text>
                        {name}
                    </Text>
                </TouchableOpacity>
            </View>
    );
    }
}