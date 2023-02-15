import { createSlice } from '@reduxjs/toolkit';
import { Place, PlaceList } from '../pages/index';
export interface PlaceInitialState {
  placeList: PlaceList;
  selectedPlaceId: string | null;
  selectedPlaceInfo: Place | null;
  filteredPlaceList: PlaceList;
  isFiltered: boolean;
  marker: any[];
}
const placeListInitialState: PlaceInitialState = {
  placeList: {},
  selectedPlaceId: null,
  selectedPlaceInfo: null,
  filteredPlaceList: {},
  isFiltered: false,
  marker: [],
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
      Object.keys(state.filteredPlaceList).length ===
      Object.keys(state.placeList).length
        ? (state.isFiltered = false)
        : (state.isFiltered = true);
    },
    setSelectedPlace(state, action) {
      state.selectedPlaceId = action.payload ? action.payload.placeId : null;
      state.selectedPlaceInfo = action.payload ? action.payload : null;
    },
    getMarker(state, action) {
      state.marker.push(action.payload);
    },
    resetMarker(state) {
      state.marker = [];
    },
    resetFilteredPlaceList(state) {
      state.filteredPlaceList = state.placeList;
      state.isFiltered = false;
    },
  },
});

export const placeListActions = placeSlice.actions;
export default placeSlice.reducer;
