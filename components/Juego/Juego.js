import react, {useState} from "react";
import {StyleSheet,View, Text} from "react-native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('../.././assets/fonts/OpenSans-Regular.ttf'),
        'open-sans-bold': require('../.././assets/fonts/OpenSans-Bold.ttf')
    });
}

import Header from "./Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const Juego = () => {
    const [userNumber, setUserNumber] = useState();
    const [guessRounds, setGuessRounds] = useState(0);
    const [dataLoaded, setDataLoaded] = useState(false);

    if (!dataLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => setDataLoaded(true)}
                onError={(err) => console.log(err)}
            />
        );
    }

    const startGameHandler = (selectedNumber) => {
        setUserNumber(selectedNumber);
        setGuessRounds(0);
    };

    const gameOverHandler = (numRounds) => {
        setGuessRounds(numRounds);
    };

    const configNewGameHandler = () => {
        setGuessRounds(0);
        setUserNumber(null);
    }

    let content = <StartGameScreen onStartGame={startGameHandler} />;
    if(userNumber && guessRounds == 0) {
        content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    } else if (guessRounds > 0) {
        content = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={configNewGameHandler} />
    }

    return (
        <View style={styles.screen}>
            <Header title="Guess a number"/>
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
    }
});
export default Juego;