import { FC, useCallback } from "react";
import { Category, useStore } from "../lib/store";
import ClickToEdit from "./ClickToEdit";
import TaskView from "./TaskView";

type PropTypes = {
  category: Category;
};

const TaskColumn: FC<PropTypes> = ({ category }) => {
  const { updateCategory, addTask, deleteCategory } = useStore();
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

  const categoryTasks = tasks.filter((t) => t.categoryId === category.id);
  return (
    <div className="rounded bg-gray-200 flex-no-shrink w-64 p-4 mr-3">
      <div className="flex">
        <ClickToEdit
          className="text-bolder text-2xl w-52 truncate"
          text={category.name}
          onChange={updateCategoryState}
        />
        {!categoryTasks.length && (
          <div
            onClick={() => {
              deleteCategory(category);
            }}
            className="text-red-900 cursor-pointer"
            title="delete"
          >
            -
          </div>
        )}
      </div>
      <div>
        {categoryTasks.map((task) => {
          return (
            <div key={task.id.toString()}>
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
