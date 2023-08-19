import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  data: [],
  error: "",
};

export const CreateTask = createAsyncThunk("CreateTask", async (params) => {
  return await axios
    .post(
      `${process.env.REACT_APP_USER_TASK_MANAGER_URL}CreateTask`,
      params.val
    )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
});

const CreateTaskSlice = createSlice({
  name: "CreateTask",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(CreateTask.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(CreateTask.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(CreateTask.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default CreateTaskSlice.reducer;
