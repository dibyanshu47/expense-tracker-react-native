import AsyncStorage from '@react-native-async-storage/async-storage';

export const setItem = async ({ budget, expenses }) => {
    try {
        await AsyncStorage.setItem('state', JSON.stringify({ budget, expenses }));
        // console.log('Success');
    } catch (error) {
        console.log(error);
    }
};