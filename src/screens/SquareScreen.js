import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import ColorCounter from './components/ColorCounter'

const SquareScreen = () => {

    const [red,setRed] = useState(0);
    const [green,setGreen] = useState(0);
    const [blue,setBlue] = useState(0);

    return <View>
        <ColorCounter increaseColor={ () => setRed(red+1) } decreaseColor={ () => setRed(red-1) } color="Red" />
        <ColorCounter increaseColor={ () => setRed(green+1) } decreaseColor={ () => setRed(green-1) } color="Green" />
        <ColorCounter increaseColor={ () => setRed(blue+1) } decreaseColor={ () => setRed(blue-1) }  color="Blue" />
    </View>
}

const styles =  StyleSheet.create({

});

export default SquareScreen;