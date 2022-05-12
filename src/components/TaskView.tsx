import { FC } from "react";
import { User, useStore } from "../lib/store";
import { Task } from "../lib/task";
import ClickToEdit from "./ClickToEdit";
import SelectUser from "./SelectUser";

type PropTypes = {
  task: Task | undefined;
};
const TaskView: FC<PropTypes> = ({ task }) => {
  const { updateTask } = useStore();
  if (!task) {
    return <div>+</div>;
  }

  const updateCurrentTask = (name: string) => {
    updateTask({
      ...task,
      name,
    });
  };

  const setTaskUser = (user: User) => {
    updateTask({
      ...task,
      user,
    });
  };

  const createdAt = new Date(Date.parse(task.createdAt.toString()));

  return (
    <div className="p-4 mt-4 bg-white rounded">
      <div>
        <ClickToEdit className="text-bold text-lg" text={task.name} onChange={updateCurrentTask} />
      </div>
      <span title={createdAt.toLocaleTimeString()} className="opacity-50 text-xs">
        {createdAt.toDateString()}
      </span>
      <SelectUser user={task.user} onSelect={setTaskUser} />
    </div>
  );
};

export default TaskView;
