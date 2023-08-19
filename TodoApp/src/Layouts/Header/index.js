import React from "react";
import { useSelector } from "react-redux";
import { Row, Col, Avatar, Popover, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { CaretDownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import "./header.css";

function Header() {
  const navigate = useNavigate();
  const loginName = useSelector((state) => state.UserInfo.data);

  return (
    <header className="app-header bgImg">
      <Row>
        <Col span={21}>
          <h1 className="title">Todo App</h1>
        </Col>
        <Col span={2}>
          <div className="userInfo">
            <Space>
              <div className="userImage">
                <Avatar
                  size="large"
                  className="avatar-style"
                  icon={<UserOutlined />}
                />
              </div>
              <div className="userDesc">
                <p className="userName">{loginName}</p>
              </div>
              <Popover
                content={
                  <span
                    onClick={() => {
                      navigate("/login");
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
            </Space>
          </div>
        </Col>
      </Row>
    </header>
  );
}

export default Header;
