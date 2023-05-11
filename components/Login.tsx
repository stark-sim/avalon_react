import CasApollo from "./CasApollo";

import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from "@ant-design/icons";
import {
  LoginForm,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
  ProConfigProvider,
} from "@ant-design/pro-components";
import { Space, Tabs } from "antd";
import type { CSSProperties } from "react";
import { useState } from "react";
import { App } from "antd"

type LoginType = "phone" | "account";

const iconStyles: CSSProperties = {
  marginInlineStart: "16px",
  color: "rgba(0, 0, 0, 0.2)",
  fontSize: "24px",
  verticalAlign: "middle",
  cursor: "pointer",
};

export default () => {
  const { message, notification, modal } = App.useApp();
  const [loginType, setLoginType] = useState<LoginType>("phone");

  const handleLogin = async (values: {
    username: string;
    password: string;
    mobile: string;
    captcha: string;
  }) => {
    if (loginType === "account") {
      message.success("Must have account")
    } else {
      console.log("must have mobile")  
    };
    console.log(values)
    console.log("handling login")
  }

  return (  
    // 要使用 CasApollo 中的 client 才能拿到 cookie
    <CasApollo>
      <ProConfigProvider hashed={false}>
        <div style={{ backgroundColor: "white" }}>
          <LoginForm
            logo="/avalon_logo2.png"
            title="圆桌骑士"
            subTitle="自用线下朋友聚会桌游助手"
            actions={
              <Space>
                其他登录方式
                <AlipayCircleOutlined style={iconStyles} />
                <TaobaoCircleOutlined style={iconStyles} />
                <WeiboCircleOutlined style={iconStyles} />
              </Space>
            }
            onFinish={handleLogin}
          >
            <Tabs
              centered
              activeKey={loginType}
              onChange={(activeKey) => setLoginType(activeKey as LoginType)}
            >
              <Tabs.TabPane key={"account"} tab={"账号密码登录"} />
              <Tabs.TabPane key={"phone"} tab={"手机号登录"} />
            </Tabs>
            {loginType === "account" && (
              <>
                <ProFormText
                  name="username"
                  fieldProps={{
                    size: "large",
                    prefix: <UserOutlined className={"prefixIcon"} />,
                  }}
                  placeholder={"用户名: admin or user"}
                  rules={[
                    {
                      required: true,
                      message: "请输入用户名!",
                    },
                  ]}
                />
                <ProFormText.Password
                  name="password"
                  fieldProps={{
                    size: "large",
                    prefix: <LockOutlined className={"prefixIcon"} />,
                  }}
                  placeholder={"密码: ant.design"}
                  rules={[
                    {
                      required: false,
                      message: "请输入密码！",
                    },
                  ]}
                />
              </>
            )}
            {loginType === "phone" && (
              <>
                <ProFormText
                  fieldProps={{
                    size: "large",
                    prefix: <MobileOutlined className={"prefixIcon"} />,
                  }}
                  name="mobile"
                  placeholder={"手机号"}
                  rules={[
                    {
                      required: true,
                      message: "请输入手机号！",
                    },
                    {
                      pattern: /^1\d{10}$/,
                      message: "手机号格式错误！",
                    },
                  ]}
                />
                <ProFormCaptcha
                  fieldProps={{
                    size: "large",
                    prefix: <LockOutlined className={"prefixIcon"} />,
                  }}
                  captchaProps={{
                    size: "large",
                  }}
                  placeholder={"请输入验证码"}
                  captchaTextRender={(timing, count) => {
                    if (timing) {
                      return `${count} ${"获取验证码"}`;
                    }
                    return "获取验证码";
                  }}
                  name="captcha"
                  rules={[
                    {
                      required: true,
                      message: "请输入验证码！",
                    },
                  ]}
                  onGetCaptcha={async () => {
                    message.success("获取验证码成功！验证码为：1234");
                  }}
                />
              </>
            )}
            <div
              style={{
                marginBlockEnd: 24,
              }}
            >
              <ProFormCheckbox noStyle name="autoLogin">
                自动登录
              </ProFormCheckbox>
              <a
                style={{
                  float: "right",
                }}
              >
                忘记密码
              </a>
            </div>
          </LoginForm>
        </div>
      </ProConfigProvider>
    </CasApollo>
  );
};
