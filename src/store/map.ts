import { createSlice } from '@reduxjs/toolkit';
export interface MapInitialState {
  map: null | kakao.maps.Map;
}
const mapInitialState: MapInitialState = {
  map: null,
};
const mapSlice = createSlice({
  name: 'map',
  initialState: mapInitialState,
  reducers: {
    getMap(state, action) {
      state.map = action.payload;
    },
  },
});
export const mapActions = mapSlice.actions;
export default mapSlice.reducer;
