import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const ColorCounter = ({color}) => {
    return (<View>
        <Text>{color}</Text>
        <Button title={`Increase ${color}`} ></Button>
        <Button title={`Increase ${color}`} ></Button>

    </View>);
}

const styles =  StyleSheet.create({

});

export default ColorCounter;