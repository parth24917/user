import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../redux/userSlice';

const store = configureStore({
    reducer: {
        users: userSlice.reducer,
    },
});

export default store;