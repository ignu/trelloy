import { FC } from "react";
import { User } from "../lib/store";

type PropTypes = {
  user: User;
};

const UserBadge: FC<PropTypes> = ({ user }) => {
  return (
    <div>
      <img title={user.name} className="rounded-3xl w-6 h-6" src={user.profileUrl} />
    </div>
  );
};
export default UserBadge;
