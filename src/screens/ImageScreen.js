import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetails from './components/ImageDetails'


const ImageScreen = () => {
    return (
        <View>
            <ImageDetails title="Beach" imageSource={require('../../assets/beach.jpg')} imageScore={'Score - 10'}></ImageDetails>
            <ImageDetails title="Mountain" imageSource={require('../../assets/mountain.jpg')} imageScore={'Score - 20'} ></ImageDetails>
            <ImageDetails title="Forest" imageSource={require('../../assets/forest.jpg')} imageScore={'Score - 21'} ></ImageDetails>

        </View>
    )
}

const styles = StyleSheet.create({

})

export default ImageScreen;