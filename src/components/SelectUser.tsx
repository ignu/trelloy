import { FC, useState } from "react";
import { User, useStore } from "../lib/store";
import UserBadge from "./UserBadge";

type PropTypes = {
  user: User;
  onSelect: (user: User) => void;
};
const SelectUser: FC<PropTypes> = ({ user, onSelect }) => {
  const { users } = useStore();
  const [isEditing, setIsEditing] = useState(false);

  if (!isEditing) {
    return (
      <div className="cursor-pointer" onClick={() => setIsEditing(true)}>
        <UserBadge user={user} />
      </div>
    );
  }
  return (
    <div>
      <>
        {users.map((user) => {
          return (
            <div
              key={user.id}
              className="flex p-2 hover:bg-blue-50 hover:cursor-pointer"
              onClick={() => {
                onSelect(user);
                setIsEditing(false);
              }}
            >
              <UserBadge user={user} />
              <div className="ml-2">{user.name}</div>
            </div>
          );
        })}
      </>
    </div>
  );
};
export default SelectUser;
