import { FC } from "react";
import { useStore } from "../lib/store";
import TaskView from "./TaskView";

type PropTypes = {
  category: string;
};

const TaskColumn: FC<PropTypes> = ({ category }) => {
  const { getCategoryTasks } = useStore();
  const tasks = getCategoryTasks(category);

  return (
    <div>
      <h1>{category}</h1>
      {tasks.map((task) => {
        return <TaskView task={task} />;
      })}
    </div>
  );
};

export default TaskColumn;
