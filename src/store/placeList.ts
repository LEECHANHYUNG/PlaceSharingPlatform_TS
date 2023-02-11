import { createSlice } from '@reduxjs/toolkit';
import { Place, PlaceList } from '../pages/index';
export interface PlaceInitialState {
  placeList: PlaceList;
  selectedPlaceId: string | null;
  selectedPlaceInfo: Place | null;
  filteredPlaceList: PlaceList;
}
const placeListInitialState: PlaceInitialState = {
  placeList: {},
  selectedPlaceId: null,
  selectedPlaceInfo: null,
  filteredPlaceList: {},
};
const placeSlice = createSlice({
  name: 'placeList',
  initialState: placeListInitialState,
  reducers: {
    getPlaceList(state, action) {
      state.placeList = action.payload;
    },
    getFilteredPlaceList(state, action) {
      state.filteredPlaceList = action.payload;
    },
    setSelectedPlace(state, action) {
      state.selectedPlaceId = action.payload;
      state.selectedPlaceInfo = action.payload ? action.payload : null;
    },
  },
});

export const placeListActions = placeSlice.actions;
export default placeSlice.reducer;
