import { memo, ReactElement } from "react";
import type { FC } from "react";
import { useRouter } from "next/router";
export interface IProps {
  children?: ReactElement;
  // ...
}
const Detail: FC<IProps> = function (props) {
  const { children } = props;
  const router = useRouter(); // 没有这个 useRoute Hook

  // 拿到查询字符串
  const { id } = router.query;
  return (
    <div className="detail">
      <div>Detail query id={id}</div>
    </div>
  );
};
export default memo(Detail);
Detail.displayName = "Detail"; // 方便以后调试用的
