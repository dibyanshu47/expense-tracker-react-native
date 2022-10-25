import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { DELETE_EXPENSE } from '../constants/actionTypes';
import { AppContext } from '../context/AppContext';

export default function ExpenseItem({ id, name, cost }) {
    const { budget, expenses, dispatch } = useContext(AppContext);

    const handlePress = () => {
        dispatch({
            type: DELETE_EXPENSE,
            payload: id,
        });
    }

    return (
        <View style={styles.item} key={id}>
            <Text>{name}</Text>
            <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
                <MaterialIcons name='delete' size={18} color='#333' onPress={handlePress} />
                <Text style={{ marginRight: 20 }}>{cost}</Text>
            </View>
        </View>
        // <Text>{name}</Text>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});