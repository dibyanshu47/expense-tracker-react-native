import React, { useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppContext } from '../context/AppContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { INITIAL_STATE } from '../constants/actionTypes';

export default function Header() {
    const { dispatch } = useContext(AppContext);
    useEffect(() => {
        AsyncStorage.getItem('state').then(data => {
            console.log(JSON.parse(data));
            dispatch({
                type: INITIAL_STATE,
                payload: JSON.parse(data),
            });
        }).catch((error) => console.log(error));
    }, []);


    return (
        <View style={styles.header}>
            <Text style={styles.title}>Budget Planner</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral',
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
});