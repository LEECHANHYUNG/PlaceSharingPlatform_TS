import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  emailIsValid: false,
  enteredEmail: '',
};

const emailRegExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    getEmailValid(state, action) {
      state.enteredEmail = action.payload;
      state.emailIsValid = emailRegExp.test(action.payload);
    },
  },
});
export const authSliceActions = authSlice.actions;
export default authSlice.reducer;
