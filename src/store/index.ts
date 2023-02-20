import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import mapReducer from './map';
import placeListReducer from './placeList';
import authReducer from './auth';
import logger from 'redux-logger';
applyMiddleware(logger);
const store = configureStore({
  reducer: {
    mapReducer,
    placeListReducer,
    authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
