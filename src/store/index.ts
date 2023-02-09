import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import map from './map';
import placeList from './placeList';
import logger from 'redux-logger';
applyMiddleware(logger);
const store = configureStore({
  reducer: {
    map,
    placeList,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
