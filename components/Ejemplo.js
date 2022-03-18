import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, FlatList } from 'react-native';

function Ejemplo() {
    const [enteredActivity, setEnteredActivity] = useState('');
    const [activities, setActivities] = useState([]);

    const activityInputHandler = (enteredText) => {
        setEnteredActivity(enteredText);
        console.log(enteredText);
    }

    const addActivityHandler = () => {
        console.log(enteredActivity);
        setActivities(
            currentActivities => [...activities,
            { id: Math.random().toString(), value: enteredActivity }]);
    };

    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Actividad"
                    style={styles.input}
                    onChangeText={activityInputHandler}
                    value={enteredActivity}
                />
                <Button
                    title="Agregar"
                    onPress={addActivityHandler}
                />

            </View>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={activities}
                renderItem={itemData => (
                    <View style={styles.listItem}>
                        <Text>{itemData.item.value}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
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
    listItem: {
        padding: 10,
        margin: 2,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }

});

export default Ejemplo;

