import React from 'react';
import { Text, StyleSheet , FlatList } from 'react-native';



const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 45
    },
    
})
const ListScreen = () => {
    const friends = [
        { name: '#Friend 1 ', age: '20' },
        { name: '#Friend 2 ', age: '20' },
        { name: '#Friend 3 ', age: '20' },
        { name: '#Friend 4 ', age: '20' },
        { name: '#Friend 11 ', age: '20' },
        { name: '#Friend 12 ', age: '20' },
        { name: '#Friend 13 ', age: '20' },
        { name: '#Friend 14 ', age: '20' },
        { name: '#Friend 21 ', age: '20' },
        { name: '#Friend 22 ', age: '20' },
        { name: '#Friend 23 ', age: '20' },
        { name: '#Friend 24 ', age: '20' },

    ]
    return <FlatList
        // horizontal
        // showsHorizontalScrollIndicator={false}
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({ item }) => {

            return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
        }}
    >

    </FlatList>
}



export default ListScreen;