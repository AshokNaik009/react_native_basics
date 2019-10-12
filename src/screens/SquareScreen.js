import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import ColorCounter from './components/ColorCounter'

const COLORINCREMENT = 15;

const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    

    return (
        <View>
            <ColorCounter increaseColor={() => setRed(red + COLORINCREMENT)} decreaseColor={() => setRed(red - COLORINCREMENT)} color="Red" />
            <ColorCounter increaseColor={() => setGreen(green + COLORINCREMENT)} decreaseColor={() => setGreen(green - COLORINCREMENT)} color="Green" />
            <ColorCounter increaseColor={() => setBlue(blue + COLORINCREMENT)} decreaseColor={() => setBlue(blue - COLORINCREMENT)} color="Blue" />

            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red},${green},${blue})`
                }}
            />
        </View>);
}

const styles = StyleSheet.create({

});

export default SquareScreen;