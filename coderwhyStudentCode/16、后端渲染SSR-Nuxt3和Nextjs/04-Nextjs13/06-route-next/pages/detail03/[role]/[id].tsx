import { memo, ReactElement } from "react";
import type { FC } from "react";
import { useRouter } from "next/router";
export interface IProps {
  children?: ReactElement;
  // ...
}
const Detail01: FC<IProps> = function (props) {
  const { children } = props;
  const router = useRouter();

  // 拿到动态路由的参数 ( 注意都是通过 router.query来获取)
  const { role, id } = router.query;
  return (
    <div className="Detail01">
      <div>
        Detail03 role={role} id={id}
      </div>
    </div>
  );
};
export default memo(Detail01);
Detail01.displayName = "Detail01"; // 方便以后调试用的
