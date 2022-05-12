import { FC } from "react";
import { useStore } from "../lib/store";
import { Task } from "../lib/task";
import ClickToEdit from "./ClickToEdit";

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

  return (
    <div className="p-4 mt-4 bg-white rounded">
      <ClickToEdit className="text-bold text-lg" text={task.name} onChange={updateCurrentTask} />
    </div>
  );
};

export default TaskView;
