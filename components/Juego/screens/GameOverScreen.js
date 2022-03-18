import react, {useState, useRef, useEffect} from "react";
import {StyleSheet,View, Text} from "react-native";

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The game is over!</Text>
            <Text>Number of rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            
            <Text>
                <Text>Play again?</Text>
            </Text>
            <button onPress={() => props.onRestart}>NEW GAME</button>
        </View>
    );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
});

export default GameOverScreen;