import React from "react";
import "./App.css";
import Dashboard from "./Page/Dashboard";
import Login from "./Page/Dashboard/Login";
import { useDispatch, useSelector } from "react-redux";
import { LoginFlagdata } from "./redux/actions/LoginStatus";
import "antd/dist/reset.css";

function App() {
  const dispatch = useDispatch();
  const LoginFlag = useSelector((state) => state.LoginFlag.data);

  const handleLogin = () => {
    dispatch(LoginFlagdata(false));
  };

  return <>{LoginFlag ? <Dashboard /> : <Login onHandle={handleLogin} />}</>;
}

export default App;
