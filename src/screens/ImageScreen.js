import React from 'react';
import {Text,StyleSheet,View} from 'react-native';
import ImageDetails from './components/ImageDetails'


const ImageScreen = () => {
    return  (
        <View>
            <ImageDetails title="Beach"></ImageDetails>
            <ImageDetails title="Mountain" ></ImageDetails>
            <ImageDetails title="Forest" ></ImageDetails>
            
        </View>
    )
}

const styles = StyleSheet.create({
    
})

export default ImageScreen;