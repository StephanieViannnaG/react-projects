import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Logo from "../../img/logo1.png";
import "./Login.css";
import { LoginFlagdata } from "../../redux/actions/LoginStatus";
import { LoginInfoData } from "../../redux/actions/LoginInfo";
import { loginCredentials } from "../../data/loginCredentials";
import { useEffect } from "react";

const Login = ({ onHandle }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const LoginInfo = useSelector((state) => state.LoginInfo.data);

  useEffect(() => {
    dispatch(LoginFlagdata(false));
  }, []);

  const onSubmit = () => {
    onHandle();
    dispatch(LoginInfoData({ uname: username, pwd: password }));
    if (
      (username === "admin" && password === "admin") ||
      (username === "emp" && password === "emp") ||
      (username === "manager" && password === "manager")
    ) {
      dispatch(LoginFlagdata(true));
    }
  };

  return (
    <>
      <div>
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
                  value={username}
                  className="login-form-input"
                  type="text"
                  placeholder="Email"
                  required="required"
                  name="Username"
                  onChange={(e) => setUsername(e.target.value)}
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
                  className="login-form-input"
                  type="submit"
                  value="Sign in"
                  id="submitBtn"
                />
                {/* </div> */}
                {/* {!this.props.pass ? (
                  <p className="alert">Invalid UserName or Password</p>
                ) : (
                  ""
                )} */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
