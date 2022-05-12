import { FC } from "react";
import { Task } from "../lib/task";
import ClickToEdit from "./ClickToEdit";

type PropTypes = {
  task: Task | undefined;
};
const TaskView: FC<PropTypes> = ({ task }) => {
  if (!task) {
    return <div>+</div>;
  }
  return (
    <div className="p-8 m-8">
      <ClickToEdit className="text-bold text-lg" text={task.name} />
    </div>
  );
};

export default TaskView;
