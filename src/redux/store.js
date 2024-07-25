// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default store;
