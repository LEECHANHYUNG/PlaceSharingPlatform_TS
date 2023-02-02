import { configureStore } from '@reduxjs/toolkit';
import map from './map';
import placeList from './placeList';

const store = configureStore({
  reducer: {
    map,
    placeList,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
