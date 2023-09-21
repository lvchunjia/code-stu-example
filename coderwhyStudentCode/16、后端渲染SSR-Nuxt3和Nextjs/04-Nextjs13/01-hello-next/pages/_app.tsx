// 5.导入全局的样式
import "../styles/globals.css";
import type { AppProps } from "next/app";

/**
 * 1.自定义布局 Layout
 * 2.Redux
 * 3.Theme
 * 4.监听全局的路由
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
