import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import { AppContext } from '../context/AppContext';

import ExpenseItem from './ExpenseItem';

export default function ExpenseList() {
    const { expenses } = useContext(AppContext);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Expenses</Text>
            <FlatList
                data={expenses}
                renderItem={({ item }) => <ExpenseItem
                    id={item.id}
                    name={item.name}
                    cost={item.cost}
                />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
    },
});