import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './home';

const store = configureStore({
  reducer: {
    images: homeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
