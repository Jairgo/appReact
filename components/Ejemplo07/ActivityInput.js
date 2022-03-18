import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button} from 'react-native';

const ActivityInput = props =>{
    const [enteredActivity, setEnteredActivity] = useState('');
    const activityInputHandler = (enteredText) => {
        setEnteredActivity(enteredText);
    }

    return(
        <View style={styles.inputContainer}>
            <TextInput
                placeholder="Actividad"
                style={styles.input}
                onChangeText={activityInputHandler}
                value={enteredActivity}
            />
            <Button
                title="Agregar"
                onPress={props.onAddActivity.bind(this, enteredActivity)}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: '70%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});

export default ActivityInput;