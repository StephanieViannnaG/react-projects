import { configureStore } from "@reduxjs/toolkit";
import LoginFlagReducer from "../actions/LoginStatus";
import LoginInfoReducer from "../actions/LoginInfo";

const store = configureStore({
  reducer: {
    LoginFlag: LoginFlagReducer,
    LoginInfo: LoginInfoReducer,
  },
});

export default store;
