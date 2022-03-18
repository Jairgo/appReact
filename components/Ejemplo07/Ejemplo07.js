import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, FlatList } from 'react-native';
import ActivityInput from './ActivityInput';

function Ejemplo() {

    const [activities, setActivities] = useState([]);
    const addActivityHandler = () => {
        console.log(enteredActivity);
        setActivities(
            currentActivities => [...activities,
            { id: Math.random().toString(), value: enteredActivity }]);
    };

    return (
        <View style={styles.screen}>
            <ActivityInput onAddActivity={addActivityHandler}  />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={activities}
                renderItem={itemData => (
                    <ActivityItem title={itemData.item.value}/>
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

