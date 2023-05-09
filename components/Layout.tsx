import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

import Apollo from "./Apollo";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
        <Link href="/users">Users List</Link> |{" "}
        <a href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      {/* <span>I'm here to stay (Footer)</span> */}
      <div
        style={{
          width: "600px",
          margin: "0 auto",
          padding: "20px 0",
          flexDirection: "row",
          display: "flex",
        }}
      >
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
    </footer>
  </div>
);

export default Layout;
