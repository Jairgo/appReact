import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, ScrollView, FlatList } from 'react-native';

import ActivityInput from './ActivityInput';
import ActivityItem from './ActivityItem';

function Ejemplo09() {
    
    const [activities, setActivities] = useState([]);

    const [isAddMode, setIsAddMode] = useState(false);

    const addActivityHandler = (activityTitle) => {
        setActivities(
            currentActivities => [...activities,
            { id: Math.random().toString(), value: activityTitle }]);
            setIsAddMode(false);
    };

    const removeActivityHandler = (activityId) => {
        setActivities((currentActivities) => {
            return currentActivities.filter
                ((activity) => activity.id !== activityId);
        });
    };

    //onDelete = {() => console.log("Funciona el touch")}
    return (
        <View style={styles.screen}>
            <Button title={'Agregar una actividad'}
                onPress={() => setIsAddMode(true)} />
            <ActivityInput visible={isAddMode} onAddActivity={addActivityHandler}/>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={activities}
                renderItem={itemData => (
                    <ActivityItem 
                        title = {itemData.item.value}
                        id={itemData.item.id}
                        onDelete = {removeActivityHandler}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    }

});

export default Ejemplo09;

