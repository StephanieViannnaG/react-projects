import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: false,
};

export const UserInfo = createSlice({
  name: "UserInfo",
  initialState,
  reducers: {
    UserInfoData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export default UserInfo.reducer;
export const { UserInfoData } = UserInfo.actions;
