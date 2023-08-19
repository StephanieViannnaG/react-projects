import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../Login/Login.css";
import Logo from "../../img/logo1.png";

async function registerUser(credentials) {
  return fetch(`${process.env.REACT_APP_USER_AUTHENTICATION_BASEURL}register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((res) => res.json());
}

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registerStatus, setRegisterStatus] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    await registerUser({
      email,
      password,
    }).then((res) => {
      setRegisterStatus(res);
      navigate("/todo");
    });
  };

  return (
    <>
      <div className="container">
        <div id="main-outer-div">
          <div id="logo-div">
            <img id="logo-img" src={Logo} alt="" />
          </div>
          <div id="title-div">
            <h4 className="title">Sign in</h4>
          </div>

          <div id="outer-login-form-div">
            <form action="" method="" onSubmit={onSubmit}>
              <input
                value={name}
                className="login-form-input"
                type="text"
                placeholder="Name"
                required="required"
                name="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                value={email}
                className="login-form-input"
                type="text"
                placeholder="Email"
                required="required"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                value={password}
                className="login-form-input"
                type="password"
                placeholder="Password"
                required="required"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                value={confirmPassword}
                className="login-form-input"
                type="password"
                placeholder="Confirm Password"
                required="required"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <input
                className="login-form-input"
                type="submit"
                value="Sign in"
                id="submitBtn"
              />
            </form>
            <div className="text-black">{registerStatus}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
