import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserInfoData } from "../../redux/actions/UserInfo";
import "./Login.css";
import Logo from "../../img/logo1.png";

async function loginUser(credentials) {
  return fetch(`${process.env.REACT_APP_USER_AUTHENTICATION_BASEURL}login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((res) => res.json());
}

const Login = ({ setToken, setNewUser }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNewUser = () => {
    setNewUser(true);
    navigate("/register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser({
      email,
      password,
    });
    setToken(res.accessToken);
    localStorage.setItem("accessToken", res.accessToken);
    dispatch(UserInfoData(res.loginName));
    navigate("/todo");
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
              <form action="" method="" onSubmit={handleSubmit}>
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
                  className="login-form-input"
                  type="submit"
                  value="Login"
                  id="submitBtn"
                />
              </form>
            </div>
            <div onClick={() => handleNewUser()}>
              <a>New User</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
