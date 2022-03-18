import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const ActivityInput = props => {
    const [enteredActivity, setEnteredActivity] = useState('');

    const activityInputHandler = (enteredText) => {
        setEnteredActivity(enteredText);
    }
    //onPress={props.onAddActivity.bind(this, enteredActivity)}
    return(
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Actividad"
                    style={styles.input}
                    onChangeText={activityInputHandler}
                    value={enteredActivity}
                />
                <View style={styles.buttonContainer}>
                    <Button 
                        title="Cancelar"
                        color="red"
                    />
                </View>
                <Button
                    title="Agregar"
                    onPress={() => props.onAddActivity(enteredActivity)}
                />

            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    input: {
        width: '70%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20
    },
    inputContainer: {
        //flexDirection: 'row',
        flex: 1,
        //justifyContent: 'space-between',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between',
    }
});

export default ActivityInput;