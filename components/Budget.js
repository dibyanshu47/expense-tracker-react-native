import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { UPDATE_BUDGET } from '../constants/actionTypes';

import { AppContext } from '../context/AppContext';

export default function Budget() {
    const { expenses, budget, dispatch } = useContext(AppContext);

    // calculate the sum of all expenses
    const totalExpenses = expenses.reduce((total, item) => {
        return total += item.cost;
    }, 0);

    const alertType = totalExpenses > budget ? '#ff704d' : '#80ffa8';

    const [editToggle, setEditToggle] = useState(false);
    const [newBudget, setNewBudget] = useState(0);

    return (
        <>
            {!editToggle ? (
                <View style={{ ...styles.container, backgroundColor: '#b3b3cc', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Text>Budget: {budget}</Text>
                    <Button title='edit' color='blue' onPress={() => setEditToggle(!editToggle)} />
                </View>
            ) : (
                <View style={{ ...styles.container, backgroundColor: '#b3b3cc', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput
                        style={styles.input}
                        keyboardType='number-pad'
                        value={newBudget}
                        onChangeText={(e) => setNewBudget(e)}
                    />
                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <Button title='save' color='blue' onPress={() => {
                            dispatch({
                                type: UPDATE_BUDGET,
                                payload: newBudget,
                            });
                            setEditToggle(!editToggle)
                        }} />
                        <Button title='cancel' color='red' onPress={() => {
                            setNewBudget(0);
                            setEditToggle(!editToggle);
                        }} />
                    </View>
                </View>
            )}
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
    input: {
        backgroundColor: '#ccccb3',
        borderRadius: 2,
        width: 150,
        paddingHorizontal: 10,
    },
});