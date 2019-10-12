import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ColorCounter = ({color , increaseColor , decreaseColor}) => {
    return (<View>
        <Text>{color}</Text>
         <Button onPress={ () => { increaseColor()} } title={`Increase ${color}`} ></Button>
        <Button onPress={ () => { decreaseColor()} } title={`Decrease ${color}`} ></Button> 

    </View>);
}

const styles =  StyleSheet.create({

});

export default ColorCounter;