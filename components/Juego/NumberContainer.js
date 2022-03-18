import react, {useState} from "react";
import {StyleSheet,View, Text} from "react-native";
import colors from "./constants/colors";

const NumberContainer = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.number} >{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: colors.COLOR_SECONDARY,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: colors.COLOR_SECONDARY,
        fontSize: 22
    }

});
export default NumberContainer;