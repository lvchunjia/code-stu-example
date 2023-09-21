import { memo, ReactElement } from "react";
import type { FC } from "react";
import { useRouter } from "next/router";
export interface IProps {
  children?: ReactElement;
  // ...
}
const Detail01: FC<IProps> = function (props) {
  const { children } = props;
  const router = useRouter(); // 没有这个 useRoute Hook

  // 拿到查询字符串
  const { id } = router.query;
  return (
    <div className="Detail01">
      <div>Detail01</div>
    </div>
  );
};
export default memo(Detail01);
Detail01.displayName = "Detail01"; // 方便以后调试用的
