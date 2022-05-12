import { FC, useCallback } from "react";
import { Category, useStore } from "../lib/store";
import ClickToEdit from "./ClickToEdit";
import TaskView from "./TaskView";

type PropTypes = {
  category: Category;
};

const TaskColumn: FC<PropTypes> = ({ category }) => {
  const { updateCategory, addTask } = useStore();
  const tasks = useStore((state) => state.tasks);
  const updateCategoryState = useCallback(
    (name: string) => {
      const newCategory = {
        ...category,
        name,
      };

      updateCategory(newCategory);
    },
    [category.id]
  );

  const addCard = useCallback(() => {
    addTask(category.id);
  }, []);

  return (
    <div className="rounded bg-gray-200 flex-no-shrink w-64 p-4 mr-3">
      <ClickToEdit
        className="text-bolder text-2xl w-52"
        text={category.name}
        onChange={updateCategoryState}
      />
      <div>
        {tasks
          .filter((t) => t.categoryId === category.id)
          .map((task) => {
            return (
              <div key={task.name}>
                <TaskView task={task} />
              </div>
            );
          })}
        <button onClick={addCard}>+ Add a Card</button>
      </div>
    </div>
  );
};

export default TaskColumn;
