import { App } from "antd";
import { ConfigProvider, theme } from "antd";

import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    // 全局配置加 context 套件，对每一个 page 都生效
    <ConfigProvider  theme={{
      algorithm: theme.darkAlgorithm,
    }}>
      <App>
        <Component {...pageProps} />
      </App>
    </ConfigProvider>
  );
}
