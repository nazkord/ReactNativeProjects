import React, {Component} from 'react';
import {StyleSheet, View} from "react-native";
import PlaceOfGame from './placeOfGame.js'

export default class ViewMaker extends Component {



    render() {

        return (
            <View style={styles.container} >
                <PlaceOfGame
                    childrenStyle={[styles.styleForButton, styles.buttonText, {top: 20,left: 20}]}
                    name="Nazar"
                    setClicks={this.props.setClicks}
                />

                <PlaceOfGame
                    childrenStyle={[styles.styleForButton, styles.buttonText, {top: 20,right: 20}]}
                    name="Ola"
                    setClicks={this.props.setClicks}
                />

                <PlaceOfGame
                    childrenStyle={[styles.styleForButton, styles.buttonText, {top: 150,right: 20}]}
                    name="Mateusz"
                    setClicks={this.props.setClicks}
                />

                <PlaceOfGame
                    childrenStyle={[styles.styleForButton, styles.buttonText, {top: 150,left: 20}]}
                    name="Jan"
                    setClicks={this.props.setClicks}
                />
            </View>


        );

    }
}

const styles = StyleSheet.create({
        container: {
            marginTop: 30,
            position: 'absolute',
            display: 'flex',
            width: 350,
            height: 300,
            backgroundColor: '#ff8fe1',
        },
        styleForButton: {
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: '#118edd',
            height: 75,
            width: 75,
            position: 'absolute',
        },
        buttonText: {
            fontSize: 10,
            fontWeight: 'bold',
            color: '#ff3d46',
        },
    });