import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface MapInitialState {
  map: undefined | kakao.maps.Map;
}
const mapInitialState: MapInitialState = {
  map: undefined,
};
const mapSlice = createSlice({
  name: 'map',
  initialState: mapInitialState,
  reducers: {
    getMap(state, action: PayloadAction<kakao.maps.Map | undefined>) {
      state.map = action.payload;
    },
  },
});
export const mapActions = mapSlice.actions;
export default mapSlice.reducer;
