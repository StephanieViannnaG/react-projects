import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: "",
};

export const LoginFlag = createSlice({
  name: "LoginFlag",
  initialState,
  reducers: {
    LoginFlagdata: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default LoginFlag.reducer;
export const { LoginFlagdata } = LoginFlag.actions;
