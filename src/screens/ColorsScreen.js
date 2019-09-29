import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


const ColorScreen = () => {
    //Inializing State Varaible and State Method
    const [colors, setColors] = [];
    return <View>
        {/*  Using ... to create a replica of the array  */}
        <Button title="Add Color" onPress={() => { setColors([...colors, RandomRgb()]) }} />
        {/*  {{}} braces used because we are changing the Style Dynamically */}

        <FlatList
            keyExtractor={item => item}
            data={colors}
            renderItem={({ item }) => {
                return (
                    <View style={{ height: 100, width: 100, backgroundColor: item }}> </View>
                );
            }}
        >

        </FlatList>

    </View>
}

const styles = StyleSheet.create({

})

const RandomRgb = () => {
    //Method to Generate Color from 0 to 255
    const red = Math.floor(Math.round * 256);
    const green = Math.floor(Math.round * 256);
    const blue = Math.floor(Math.round * 256);

    return `{${red},${green},${blue}}`;
}

export default ColorScreen