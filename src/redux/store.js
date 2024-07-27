// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import userSlice from './userSlice';
import searchSlice from './searchSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userSlice,
    search: searchSlice,
  },
});

export default store;
