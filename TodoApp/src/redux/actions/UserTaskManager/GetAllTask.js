import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

export const GetAllTask = createAsyncThunk("GetAllTask", async () => {
  return await axios
    .get(`${process.env.REACT_APP_USER_TASK_MANAGER_URL}GetAllTask`)
    .then((response) => response.data.Table);
});

const GetAllTaskSlice = createSlice({
  name: "GetAllTask",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetAllTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(GetAllTask.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(GetAllTask.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default GetAllTaskSlice.reducer;
