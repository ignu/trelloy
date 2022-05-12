import { FC } from "react";
import { Task } from "../lib/task";

type PropTypes = {
  task: Task;
};
const TaskView: FC<PropTypes> = ({ task }) => {
  return (
    <div>
      <h3>{task.name}</h3>
    </div>
  );
};

export default TaskView;
