import { memo, ReactElement } from "react";
import type { FC } from "react";
export interface IProps {
  children?: ReactElement;
  // ...
}
const SlugPage: FC<IProps> = function (props) {
  const { children } = props;
  return (
    <div className="slug">
      <div>404 page not found ~~~~~ </div>
    </div>
  );
};
export default memo(SlugPage);
SlugPage.displayName = "SlugPage"; // 方便以后调试用的
