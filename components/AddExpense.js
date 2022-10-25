import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { ADD_EXPENSE } from '../constants/actionTypes';
import { AppContext } from '../context/AppContext';

export default function AddExpense() {
    const { budget, expenses, dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');

    const handleSubmit = (e) => {
        // Alert.alert(`name ${name} cost ${cost}`)
        const expense = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        };
        // dispatching add expense event with the payload
        dispatch({
            type: ADD_EXPENSE,
            payload: expense,
        });
        setName('');
        setCost('');
    }

    return (
        <View>
            <Text style={styles.heading}>Add Expense</Text>
            <View style={{ marginTop: 16 }}>
                <Text>Name</Text>
                <TextInput
                    style={styles.input}
                    value={name}
                    onChangeText={(e) => setName(e)}
                />
                <Text>Cost</Text>
                <TextInput
                    style={styles.input}
                    keyboardType='number-pad'
                    value={cost}
                    onChangeText={(e) => setCost(e)}
                />
                <Button
                    onPress={handleSubmit}
                    title='save'
                    color='coral'
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    input: {
        padding: 10,
        marginVertical: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10,
    },
});