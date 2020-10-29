import React from "react";
import { Text, View, StyleSheet } from "react-native";
import ImageDetails from "./components/ImageDetails";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetails
        title="Beach"
        imageSource={require('../../assets/beach.jpg')}
        imageScore={10}
      />
      <ImageDetails
        title="Mountain"
        imageSource={require('../../assets/mountain.jpg')}
        imageScore={13}
      />
      <ImageDetails
        title="Forest"
        imageSource={require('../../assets/forest.jpg')}
        imageScore={15}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
