import { createSlice } from '@reduxjs/toolkit';
import { Place, PlaceList } from '../pages/index';
export interface PlaceInitialState {
  placeList: PlaceList;
  selectedPlaceId: string | null;
  selectedPlaceInfo: Place | null;
}
const placeListInitialState: PlaceInitialState = {
  placeList: {},
  selectedPlaceId: null,
  selectedPlaceInfo: null,
};
const placeSlice = createSlice({
  name: 'placeList',
  initialState: placeListInitialState,
  reducers: {
    getPlaceList(state, action) {
      state.placeList = action.payload;
    },
    setSelectedPlace(state, action) {
      state.selectedPlaceId = action.payload;
      state.selectedPlaceInfo = state.placeList[action.payload]
        ? state.placeList[action.payload]
        : null;
    },
  },
});

export const placeListActions = placeSlice.actions;
export default placeSlice.reducer;
