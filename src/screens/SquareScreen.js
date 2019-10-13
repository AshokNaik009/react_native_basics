import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import ColorCounter from './components/ColorCounter'

const COLORINCREMENT = 15;

const SquareScreen = () => {

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    

    //Creating a helper Function
    const setColor = (color,change) => {
        //Color Paramter wil be the color we want to Change
        //Change will be +15 or -15

        switch(color) {
         case 'red':
             red + change > 255 || red + change < 0 ? null : setRed(red+change)
             return
         case 'green':
             green + change > 255 || green + change < 0 ? null : setGreen(green+change)
             return
         case 'blue':
             blue + change > 255 || blue + change < 0 ? null : setBlue(blue+change)
             return

         default:
             return
         
        }
    }

    return (
        <View>
            <ColorCounter increaseColor={() => setColor('red' , COLORINCREMENT)} decreaseColor={() => setColor('red'  , -1 * COLORINCREMENT)} color="Red" />
            <ColorCounter increaseColor={() => setColor('green' , COLORINCREMENT)} decreaseColor={() => setColor('green' ,  -1 * COLORINCREMENT)} color="Green" />
            <ColorCounter increaseColor={() => setColor('blue' , COLORINCREMENT)} decreaseColor={() => setColor('blue' , -1 * COLORINCREMENT)} color="Blue" />

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