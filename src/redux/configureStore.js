import logger from 'redux-logger';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homeReducer from './home';
import navbarSearch from './navbarSearch';

const rootReducer = combineReducers({
  images: homeReducer,
  search: navbarSearch,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
