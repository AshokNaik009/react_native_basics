import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle} />
      <View style={styles.viewTwoStyle} />  
      <View style={styles.viewThreeStyle} />  
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    flexDirection:"row",
    justifyContent:"space-between",
    height: 200,
    //justifyContent:'flex-start'
    //alignItems:"flex-end"
  },
  textOneStyle: {
    borderWidth: 1,
    margin: 10,
    borderColor: "red",
  },
  textTwoStyle: {
    borderWidth: 1,
    margin: 10,
    borderColor: "red",
    //position:'absolute',
    //fontSize:18,
    //bottom:40
    //alignSelf:"flex-end" //Overides the Parent Align Items
    ...StyleSheet.absoluteFillObject,
  },
  textThreeStyle: {
    borderWidth: 1,
    margin: 10,
    borderColor: "red",
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor:"red"
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor:"green",
    top:50
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor:"blue"
  }
});

export default BoxScreen;
