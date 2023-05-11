import { App } from "antd";
import { ConfigProvider } from "antd";

import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    // 全局配置加 context 套件，对每一个 page 都生效
    <ConfigProvider>
      <App>
        <Component {...pageProps} />
      </App>
    </ConfigProvider>
  );
}
