import { FC } from "react";
import { useStore } from "../lib/store";
import ClickToEdit from "./ClickToEdit";
import TaskView from "./TaskView";

type PropTypes = {
  category: string;
};

const TaskColumn: FC<PropTypes> = ({ category }) => {
  const { getCategoryTasks } = useStore();
  const tasks = getCategoryTasks(category);

  return (
    <div>
      <ClickToEdit className="text-bolder text-2xl" text={category} />

      <div className="w-36 border-2">
        {tasks.map((task) => {
          return (
            <div key={task.id.toString()}>
              <TaskView task={task} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskColumn;
