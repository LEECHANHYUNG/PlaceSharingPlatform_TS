import { createSlice } from '@reduxjs/toolkit';
import { PlaceList } from '../pages/index';
export interface PlaceInitialState {
  placeList: PlaceList;
  selectedPlaceId: string | null;
}
const placeListInitialState: PlaceInitialState = {
  placeList: {},
  selectedPlaceId: null,
};
const placeSlice = createSlice({
  name: 'placeList',
  initialState: placeListInitialState,
  reducers: {
    getPlaceList(state, action) {
      state.placeList = action.payload;
    },
    setSelectedPlaceList(state, action) {
      state.selectedPlaceId = action.payload;
    },
  },
});

export const placeListActions = placeSlice.actions;
export default placeSlice.reducer;
