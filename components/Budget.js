import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppContext } from '../context/AppContext';

export default function Budget() {
    const { expenses, budget } = useContext(AppContext);

    // calculate the sum of all expenses
    const totalExpenses = expenses.reduce((total, item) => {
        return total += item.cost;
    }, 0);

    const alertType = totalExpenses > budget ? '#ff704d' : '#80ffa8';

    return (
        <>
            <View style={{ ...styles.container, backgroundColor: '#b3b3cc' }}>
                <Text>Budget: {budget}</Text>
            </View>
            <View style={{ ...styles.container, backgroundColor: `${alertType}` }}>
                <Text>Remaining: {budget - totalExpenses}</Text>
            </View>
            <View style={{ ...styles.container, backgroundColor: '#66e0ff' }}>
                <Text>Spent so far: {totalExpenses}</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginVertical: 5,
        borderRadius: 5
    },
});