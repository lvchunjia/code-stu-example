import "../styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // console.log(Component.displayName);

  const router = useRouter();

  function goToFindPage() {
    // 1.参数一
    // router.push("/find");
    // router.push({
    //   pathname: "/find",
    //   query: {
    //     id: 1000,
    //   },
    // });
    // router.push("https://www.jd.com");

    // 2.参数二
    router.push("/find?id=1000", "find_v2"); // as
    // router.replace()
  }

  function goBack() {
    router.back();
  }

  useEffect(() => {
    // 路由守卫 - 全局监听路由的切换
    const handleRouterChange = (url: string) => {
      console.log("routeChangeStart=>", url); // url 是当前访问的路径
    };
    const handleRouterChange2 = (url: string) => {
      console.log("routeChangeComplete=>", url); // url 是当前访问的路径
    };
    router.events.on("routeChangeStart", handleRouterChange);
    router.events.on("routeChangeComplete", handleRouterChange2);
    return () => {
      router.events.off("routeChangeStart", handleRouterChange);
      router.events.off("routeChangeComplete", handleRouterChange2);
    };
  }, []);

  return (
    <div>
      <div>
        <Link href="/">
          <button>home</button>
        </Link>

        <Link href="/category">
          <button>category</button>
        </Link>

        <Link
          href={{
            pathname: "/cart",
            query: {
              count: 100,
            },
          }}
        >
          <button>cart</button>
        </Link>

        {/* as: 是给路径 起一个 别名 */}
        <Link href="/profile?id=1000" as="profile_v2">
          <button>profile</button>
        </Link>

        <Link href="/more" replace>
          <button>more replace</button>
        </Link>

        <Link href="https://www.jd.com" target={"_blank"}>
          <button>jd.com</button>
        </Link>

        <button onClick={goToFindPage}>find</button>
        <button onClick={goBack}>back</button>
      </div>
      {/* 页面的内容: router-view */}
      <Component {...pageProps} />
    </div>
  );
}
