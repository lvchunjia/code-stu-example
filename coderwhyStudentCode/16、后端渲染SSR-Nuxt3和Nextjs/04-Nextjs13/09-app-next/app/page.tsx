import { memo, ReactElement } from "react";
import type { FC } from "react";
import Link from "next/link";

export interface IProps {
  children?: ReactElement;
  // ...
}
const Home: FC<IProps> = memo(function (props) {
  const { children } = props;
  return (
    <div className="home">
      <div>Home</div>
    </div>
  );
});
export default Home;
Home.displayName = "Home"; // 方便以后调试用的
