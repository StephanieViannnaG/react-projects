import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Avatar, Popover } from "antd";
import { LoginFlagdata } from "../../redux/actions/LoginStatus";
import { loginCredentials } from "../../data/loginCredentials";
import { UserOutlined } from "@ant-design/icons";
import { CaretDownOutlined } from "@ant-design/icons";

function Header({ setIsAdding }) {
  const dispatch = useDispatch();
  const LoginInfo = useSelector((state) => state.LoginInfo.data);
  const LoginFlag = useSelector((state) => state.LoginFlag.data);

  return (
    <header className="app-header">
      <Row>
        <Col span={22}>
          <h1 className="title">Employee Management Software</h1>
        </Col>
        <Col span={2}>
          <div className="userInfo">
            <div className="userImage">
              <Avatar
                size="large"
                className="avatar-style"
                icon={<UserOutlined />}
              />
            </div>
            <div className="userDesc">
              <p className="userName">
                {LoginFlag &&
                  loginCredentials.map((item) => {
                    if (
                      item.username === LoginInfo.uname &&
                      item.password === LoginInfo.pwd
                    ) {
                      return <b>{item.name}</b>;
                    }
                  })}
              </p>
            </div>
            <Popover
              content={
                <span
                  onClick={() => {
                    dispatch(LoginFlagdata(false));
                  }}
                  className="logout-button"
                >
                  {" "}
                  Log Out
                </span>
              }
              className={"pd-10 theme_color"}
              placement="bottomRight"
            >
              <CaretDownOutlined />
            </Popover>
          </div>
        </Col>
      </Row>

      <div className="outer-div-header">
        {/* <div className="inner-div-header1">
          <div>
            <span
              onClick={() => {
                dispatch(LoginFlagdata(false));
              }}
              className="logout-button"
            >
              {" "}
              Log Out
            </span>
          </div>
        </div> */}
        {!LoginInfo.uname === "emp" && (
          <div style={{ marginTop: "30px", marginBottom: "18px" }}>
            <button onClick={() => setIsAdding(true)} className="round-button">
              Add
            </button>
          </div>
        )}

        {/* </div> */}
      </div>
    </header>
  );
}

export default Header;
