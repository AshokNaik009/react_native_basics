import React from "react";
import { Text, StyleSheet , View,Button,TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (<View>
      <Button onPress={()=>{navigation.navigate('Components')}}  title="Go to Component Screen" />
      <Button onPress={()=>{navigation.navigate('List')}}  title="Go to List Screen" />
      <Button onPress={()=>{navigation.navigate('ImageScrn')}}  title="Go to Image Screen" />
      <Button onPress={()=>{navigation.navigate('CounterScrn')}}  title="Go to Counter Screen" />
      <Button onPress={()=>{navigation.navigate('ColorScrn')}}  title="Go to Color Screen" />
      <Button onPress={()=>{navigation.navigate('SquareScrn')}}  title="Go to Square Screen" />
      <Button onPress={()=>{navigation.navigate('TextScrn')}}  title="Go to Text Screen" />
      <Button onPress={()=>{navigation.navigate('BoxScrn')}}  title="Go to Box Screen" />
      {/* <TouchableOpacity onPress={()=>{ console.log("Go to List Demo")  }}>
        <Text> Go To List Screen </Text>
      </TouchableOpacity> */}
    </View>);
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
