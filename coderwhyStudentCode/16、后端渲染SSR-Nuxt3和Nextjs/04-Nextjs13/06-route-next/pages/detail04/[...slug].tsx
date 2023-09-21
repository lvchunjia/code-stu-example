import { memo, ReactElement } from "react";
import type { FC } from "react";
import { useRouter } from "next/router";
export interface IProps {
  children?: ReactElement;
  // ...
}
const SlugPage: FC<IProps> = function (props) {
  const { children } = props;
  const router = useRouter(); // hooks -> function components or custom hooks
  const { slug } = router.query;
  return (
    <div className="slug">
      <div>404 page not found slug = {JSON.stringify(slug)}</div>
    </div>
  );
};
export default memo(SlugPage);
SlugPage.displayName = "SlugPage"; // 方便以后调试用的
