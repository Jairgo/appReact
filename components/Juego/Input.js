import react, {useState} from "react";
import {StyleSheet, View, Text, TextInput} from "react-native";

const Input = props => {
    return (
        <TextInput {...props} style={{...styles.input, ...props.style}}/>
    );
}

const styles = StyleSheet.create({
    input: {
        width: 35,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 12,
    }
});
export default Input;