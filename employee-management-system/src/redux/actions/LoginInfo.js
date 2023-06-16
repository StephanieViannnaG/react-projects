import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: "",
};

export const LoginInfo = createSlice({
  name: "LoginInfo",
  initialState,
  reducers: {
    LoginInfoData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default LoginInfo.reducer;
export const { LoginInfoData } = LoginInfo.actions;
