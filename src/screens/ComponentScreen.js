import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentScreen = () => {

    const greeting = 'Ashok';
    return <View>
        <Text style={styles.textStyle}>Getting Started with React Native!</Text>
        <Text style={styles.subHeader}> My Name is {greeting}, Impossible is not a Programming Language. </Text>
    </View>;
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeader: {
        fontSize: 20
    }
})

export default ComponentScreen;