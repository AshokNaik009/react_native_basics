import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return <View> 
    <Text style={styles.text}>Getting Started with React Native!</Text>
    <Button onPress={() => { navigation.navigate('Component') }} title="Go to Components" />
    <Button onPress={() => { navigation.navigate('List') }} title="Go to List" />
    <Button onPress={() => { navigation.navigate('Image') }} title="Go to ImageScreen" />
  </View>

};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
