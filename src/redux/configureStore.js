import logger from 'redux-logger';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import homeReducer from './home';
import navbarSearch from './navbarSearch';
import details from './details';

const rootReducer = combineReducers({
  images: homeReducer,
  search: navbarSearch,
  details,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
