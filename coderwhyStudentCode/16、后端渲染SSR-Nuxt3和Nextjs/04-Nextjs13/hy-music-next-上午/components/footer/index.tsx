import { memo, ReactElement } from "react";
import type { FC } from "react";
export interface IProps {
  children?: ReactElement;
  // ...
}
const Footer: FC<IProps> = memo(function (props) {
  const { children } = props;
  return (
    <div className="footer">
      <div>Footer</div>
    </div>
  );
});
export default Footer;
Footer.displayName = "Footer"; // 方便以后调试用的
