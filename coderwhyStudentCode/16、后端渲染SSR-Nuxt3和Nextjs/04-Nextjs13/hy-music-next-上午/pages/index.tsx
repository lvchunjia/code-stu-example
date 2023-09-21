import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchSuggest, increment } from "@/store/modules/home";
import { GetServerSideProps } from "next";
import { getSearchSuggest } from "@/service/home";
import wrapper from "@/store/index";

import type { IAppDispatch, IAppRootState } from "@/store/index";

export default function Home() {
  // 1.从redux读取状态
  const { counter } = useSelector((rootState: IAppRootState) => {
    return {
      counter: rootState.home.counter,
    };
  });
  // 2.使用dispatch来触发action
  const dispatch: IAppDispatch = useDispatch();
  function addCounter() {
    // 触发 increment的action
    dispatch(increment(2));
  }
  return (
    <>
      <Head>
        <title>云音乐商城</title>
      </Head>
      <div>{counter}</div>
      <button onClick={addCounter}>+1</button>
      <div>hello world</div>
    </>
  );
}

// 每次访问首页的时候都会执行
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   // 1.在这里发起网络请求拿到搜索建议的数据
//   const res = await getSearchSuggest();
//   console.log(res.data);
//   return {
//     props: {},
//   };
// };

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(function (store) {
    return async (context) => {
      // 1.触发一个异步的action来发起网络请求, 拿到搜索建议并存到redex中
      await store.dispatch(fetchSearchSuggest());
      return {
        props: {},
      };
    };
  });
