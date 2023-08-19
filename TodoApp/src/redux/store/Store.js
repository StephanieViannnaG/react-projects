import { configureStore } from "@reduxjs/toolkit";
import UserInfoReducer from "../actions/UserInfo";
import GetAllTaskReducer from "../actions/UserTaskManager/GetAllTask";
import CreateTaskReducer from "../actions/UserTaskManager/CreateTask";
import EditTaskReducer from "../actions/UserTaskManager/EditTask";
import DeleteTaskReducer from "../actions/UserTaskManager/DeleteTask";

const store = configureStore({
  reducer: {
    UserInfo: UserInfoReducer,
    GetAllTask: GetAllTaskReducer,
    CreateTask: CreateTaskReducer,
    EditTask: EditTaskReducer,
    DeleteTask: DeleteTaskReducer,
  },
});

export default store;
