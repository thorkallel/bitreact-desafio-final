import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Form, Input, Button } from "antd";
import { useUserContext } from "../context/UserContext";

export const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { login, user, logout } = useUserContext();

  console.log("Login user", user);

  const onFinish = (values) => {
    console.log("Success:", values);
    login(values.username, values.password);
    setIsOpen(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="relative">
      {user !== null ? (
        <button
          onClick={() => logout()}
          className="relative flex items-center text-white hover:text-gray-300 transition-colors duration-200"
        >
          <span className="text-white text-sm font-libre hover:text-[#35FF3D] cursor-pointer">
            Log out
          </span>
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center text-white hover:text-gray-300 transition-colors duration-200"
        >
          <span className="text-white text-sm font-libre hover:text-[#35FF3D] cursor-pointer">
            Login
          </span>
        </button>
      )}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl z-50 p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Sign In</h1>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="flex flex-col items-center"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please enter your username!" },
              ]}
              className="w-full"
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
              className="w-full"
            >
              <Input.Password />
            </Form.Item>

            <Form.Item label={null} className="w-full">
              <Button
                type="primary"
                htmlType="submit"
                className="w-full h-12 bg-[#35FF3D] hover:bg-[#2ed634] text-gray-900 font-bold text-lg border-none transition-all duration-300 transform hover:scale-[1.02]"
              >
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </div>
      )}
    </div>
  );
};

export default Login;
