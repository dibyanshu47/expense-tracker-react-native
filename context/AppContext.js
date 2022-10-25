import { createContext, useReducer } from 'react';
import { ADD_EXPENSE, DELETE_EXPENSE } from '../constants/actionTypes';

const AppReducer = (state, action) => {
    switch (action.type) {
        case ADD_EXPENSE:
            return {
                ...state,
                expenses: [...state.expenses, action.payload],
            };
        case DELETE_EXPENSE:
            return {
                ...state,
                expenses: state.expenses.filter((expense) => expense.id !== action.payload),
            };
        default:
            return state;
    };
};

const initialState = {
    budget: 2000,
    expenses: [
        { id: 1, name: 'Shopping', cost: 50 },
        { id: 2, name: 'Holiday', cost: 300 },
        { id: 3, name: 'Transportation', cost: 70 },
        { id: 4, name: 'Fuel', cost: 40 },
        { id: 5, name: 'Child Care', cost: 500 },
    ],
}

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // similar to useState
    // state -> initial state
    // dispatch -> used to update the state
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <AppContext.Provider value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
        }}>
            {children}
        </AppContext.Provider>
    );
};