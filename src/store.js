    import { configureStore } from '@reduxjs/toolkit';
import numberReducer from './features/numberSlice';
import usersReducer from './features/userSlice';
import authReducer from './features/authSlice';
import { apiSlice } from './features/api/apiSlice';
import { apiHousesSlice } from './features/api/apiHousesSlice';

/** Agrupamos los estados en una sola ubicacion */

const store = configureStore({
    reducer: {
        number: numberReducer,
        users: usersReducer,
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer,
        [apiHousesSlice.reducerPath]: apiHousesSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware).concat(apiHousesSlice.middleware),
})

export default store;