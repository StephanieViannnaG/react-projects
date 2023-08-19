import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Layouts/Login";
import Register from "./Layouts/Register";
import TodoWrapper from "./Views/TodoWrapper";
import "antd/dist/reset.css";
import "./App.css";

function App() {
  const [token, setToken] = useState("");
  const [newUser, setNewUser] = useState();

  if (!token && !newUser) {
    return <Login setToken={setToken} setNewUser={setNewUser} />;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/todo" name="TodoWrapper" element={<TodoWrapper />} />
        <Route path="/login" name="Login" element={<Login />} />
        <Route path="/register" name="Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
