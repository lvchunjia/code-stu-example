import { memo, ReactElement } from "react";
import type { FC } from "react";
export interface IProps {
  children?: ReactElement;
  // ...
}
import { setCookie } from "cookies-next";
const Login: FC<IProps> = function (props) {
  const { children } = props;

  function login() {
    setCookie("token", "aabbcc", {
      maxAge: 10,
    });
  }
  return (
    <div className="login">
      <div>Login</div>
      <button onClick={login}>login</button>
    </div>
  );
};
export default memo(Login);
Login.displayName = "Login"; // 方便以后调试用的
