import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div>
        <Link href={"/"}>
          <button>home</button>
        </Link>
        <Link href={"/detail?id=1000"}>
          <button>detail</button>
        </Link>
        <Link href={"/detail01"}>
          <button>detail01</button>
        </Link>
        <Link href={"/detail01/123"}>
          <button>detail01/123</button>
        </Link>

        {/* 这个是不行的, 方括号的前后是不能有字符串 */}
        <Link href={"/detail02/user-123"}>
          <button>detail01/user-123</button>
        </Link>

        <Link href={"/detail03/admin/123456"}>
          <button>detail03/admin/123456</button>
        </Link>
      </div>
      {/* 页面内容 */}
      <Component {...pageProps} />
    </div>
  );
}
