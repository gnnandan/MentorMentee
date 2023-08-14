import { configureStore } from '@reduxjs/toolkit';
import getSlice from '../features/getSlice';

export const store = configureStore({
  reducer: {
    post : getSlice
  },
})