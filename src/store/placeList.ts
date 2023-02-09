import { createSlice } from '@reduxjs/toolkit';
import { PlaceList } from '../pages/index';
export interface PlaceInitialState {
  placeList: PlaceList;
}
const placeListInitialState: PlaceInitialState = {
  placeList: {},
};
const placeSlice = createSlice({
  name: 'placeList',
  initialState: placeListInitialState,
  reducers: {
    getPlaceList(state, action) {
      state.placeList = action.payload;
    },
  },
});

export const placeListActions = placeSlice.actions;
export default placeSlice.reducer;
