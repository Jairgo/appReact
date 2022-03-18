import React, { useState } from 'react';
import { StyleSheet, View, Text} from 'react-native';

const ActivityItem = props => {
    return (
        <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        margin: 2,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    },

});

export default ActivityItem;