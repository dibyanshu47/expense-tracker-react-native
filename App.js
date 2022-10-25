import React, { useEffect, useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';

import { AppProvider } from './context/AppContext';

import Header from './components/Header';
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';

export default function App() {
  return (
    <AppProvider>
      <ScrollView>
        <Header />
        <View style={styles.container}>
          <Budget />
          <ExpenseList />
          <AddExpense />
          <StatusBar style="auto" />
        </View>
        <View style={{ height: 50 }}></View>
      </ScrollView>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
});
