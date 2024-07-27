// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import userSlice from './userSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userSlice,
  },
});

export default store;
