import { configureStore } from '@reduxjs/toolkit';
import talukaReducer from './slice';

const store = configureStore({
  reducer: {
    yojna: talukaReducer,
  },
});

export default store;
