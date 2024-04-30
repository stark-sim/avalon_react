import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

import Apollo from "./Apollo";
import { Layout, Space } from "antd";
const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#f5f5f5",
};

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "white",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#7dbcea",
};

type Props = {
  children?: ReactNode;
  title?: string;
};

const IndexLayout = ({
  children,
  title = "This is the default title",
}: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Layout>
      <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
        <Content>{children}</Content>
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
                粤ICP备2024233514号-1
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
                粤公网安备44030002003220号
              </p>
            </a>
          </div>
        </Footer>
      </Space>
    </Layout>
  </div>
);

export default IndexLayout;
