/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';


import ViewMaker from './viewMaker.js'
import Result from './resultHandler.js'

export default class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            timePassed: false,
        };
        this.clicks = {}

    }

    componentDidMount() {
        setTimeout(() => {
            this.setTimePassed();
        }, 5000);
    }

    setTimePassed() {
        this.setState({timePassed: true});
    }

    setClicks = (name, numberOfClicks) => {
        this.clicks = {
            ...this.clicks,
            [name] : numberOfClicks,
        };
    };

    render() {
        return (
            <View>
                <ViewMaker setClicks={this.setClicks}/>

                <Result clicks={this.clicks} />

            </View>
        );
    }
}

//

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        backgroundColor: '#fefdff',
    },
    styleForFirstButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1739dd',
        height: '10%',
        width: '100%',
        margin: 10,
        position: 'absolute',
        top: 0,
    },
    styleForSecondButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#561cdd',
        height: '10%',
        width: '100%',
        margin: 10,
        position: 'absolute',
        bottom: 0,
    },
    customText: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 20,
        color: '#fff',
    },
});
