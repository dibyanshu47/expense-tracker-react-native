import { createContext, useEffect, useReducer } from 'react';
import { ADD_EXPENSE, DELETE_EXPENSE, INITIAL_STATE, UPDATE_BUDGET } from '../constants/actionTypes';
import { setItem } from '../storage/storage';

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
        case INITIAL_STATE:
            return action.payload;
        case UPDATE_BUDGET:
            return {
                ...state,
                budget: action.payload,
            };
        default:
            return state;
    };
};

const initialState = {
    budget: 0,
    expenses: [],
}

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // similar to useState
    // state -> initial state
    // dispatch -> used to update the state
    const [state, dispatch] = useReducer(AppReducer, initialState);
    useEffect(() => {
        setItem(state);
    }, [state])

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