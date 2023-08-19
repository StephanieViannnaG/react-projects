import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

export const EditTask = createAsyncThunk("EditTask", async (params) => {
  return await axios
    .put(`${process.env.REACT_APP_USER_TASK_MANAGER_URL}EditTask`, params.val)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
});

const EditTaskSlice = createSlice({
  name: "EditTask",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(EditTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(EditTask.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(EditTask.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default EditTaskSlice.reducer;
