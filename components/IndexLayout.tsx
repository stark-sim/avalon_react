import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

import Apollo from "./Apollo";
import { Layout, Space } from 'antd';
const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};

const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};


type Props = {
  children?: ReactNode;
  title?: string;
};

const IndexLayout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Header>
          {/* <header>
            <nav>
              <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
              <Link href="/users">Users List</Link> |{" "}
              <a href="/api/users">Users API</a>
            </nav>
          </header> */}
        </Header>
        <Content >{children}</Content>
        <Footer>
          <hr />
          <div>
            <a href="https://beian.miit.gov.cn/" target="_blank">
              <p
                style={{
                  float: "left",
                  height: "20px",
                  lineHeight: "20px",
                  margin: "0px 10px 0px 10px",
                  color: "#939393",
                }}
              >
                粤ICP备2023039885号
              </p>
            </a>
            <a
              target="_blank"
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502009977"
              style={{
                display: "inline-block",
                textDecoration: "none",
                height: "20px",
                lineHeight: "20px",
              }}
            >
              <img src="/备案图标.png" style={{ float: "left" }} />
              <p
                style={{
                  float: "left",
                  height: "20px",
                  lineHeight: "20px",
                  margin: "0px 0px 0px 5px",
                  color: "#939393",
                }}
              >
                粤公网安备 44030502009977号
              </p>
            </a>
          </div>
        </Footer>
      </Layout>
    </Space>
  </div>
);

export default IndexLayout;
