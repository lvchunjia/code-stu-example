import { memo, ReactElement, useEffect } from "react";
import type { FC } from "react";
export interface IProps {
  children?: ReactElement;
  // ...
}
const Profile: FC<IProps> = memo(function (props) {
  const { children } = props;
  console.log("function body");

  useEffect(() => {
    console.log("useEffect");
    return () => {
      console.log("unmounted useEffect");
    };
  }, []);

  return (
    <div className="profile">
      <div>Profile</div>
    </div>
  );
});
export default Profile;
Profile.displayName = "Profile"; // 方便以后调试用的
