import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

export const DeleteTask = createAsyncThunk("DeleteTask", async (params) => {
  return await axios
    .delete(
      `${process.env.REACT_APP_USER_TASK_MANAGER_URL}DeleteTask?${params.val}`
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
});

const DeleteTaskSlice = createSlice({
  name: "DeleteTask",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(DeleteTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(DeleteTask.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(DeleteTask.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default DeleteTaskSlice.reducer;
