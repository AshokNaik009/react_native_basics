import React, { useReducer} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import ColorCounter from './components/ColorCounter'

const COLORINCREMENT = 15;


const reducer = (state,action) => {

        //state === { red:number , green: number , blue:number}
        //action === { colorToChange , amount}

        switch(action.colortoChange) {

            case 'red' :
                return state.red + action.amount > 255 || state.red + action.amount < 0 ? state : {...state,red: state.red + action.amount}                    
            case 'green' :
                return state.green + action.amount > 255 || state.green + action.amount < 0 ? state : {...state,green: state.green + action.amount}
            case 'blue' :
                return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state : {...state,blue: state.blue + action.amount}

            default:
                return state;

        }

}

const SquareScreen = () => {


    const [state,dispatch] = useReducer(reducer, {red:0,green:0,blue:0});
  //  console.log(state); // {red:0,green:0,blue:0}
    const {red , green , blue } = state;
    //dispactch method is also called as runMyReducer


    // const [red, setRed] = useState(0);
    // const [green, setGreen] = useState(0);
    // const [blue, setBlue] = useState(0);
    

    //Creating a helper Function
    // const setColor = (color,change) => {
    //     //Color Paramter wil be the color we want to Change
    //     //Change will be +15 or -15

    //     switch(color) {
    //      case 'red':
    //          red + change > 255 || red + change < 0 ? null : setRed(red+change)
    //          return
    //      case 'green':
    //          green + change > 255 || green + change < 0 ? null : setGreen(green+change)
    //          return
    //      case 'blue':
    //          blue + change > 255 || blue + change < 0 ? null : setBlue(blue+change)
    //          return

    //      default:
    //          return
         
    //     }
    // }

    return (
        <View>
            <ColorCounter increaseColor={() => dispatch({colortoChange: 'red',amount:COLORINCREMENT}) } decreaseColor={() => dispatch({colortoChange: 'red',amount: -1 * COLORINCREMENT}) } color="Red" />
            <ColorCounter increaseColor={() => dispatch({colortoChange: 'green',amount:COLORINCREMENT}) } decreaseColor={() => dispatch({colortoChange: 'green',amount:-1 * COLORINCREMENT}) } color="Green" />
            <ColorCounter increaseColor={() => dispatch({colortoChange: 'blue',amount:COLORINCREMENT}) } decreaseColor={() => dispatch({colortoChange: 'blue',amount:-1 * COLORINCREMENT}) } color="Blue" />

            <View
                style={{
                    height: 150,
                    width: 150,
                    backgroundColor: `rgb(${red},${green},${blue})`
                }}
            />
        </View>);
}

const styles = StyleSheet.create({

});

export default SquareScreen;