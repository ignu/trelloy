import { FC, useCallback } from "react";
import { useDrop } from "react-dnd";
import { Category, useStore } from "../lib/store";
import { Task } from "../lib/task";
import ClickToEdit from "./ClickToEdit";
import TaskView from "./TaskView";

type PropTypes = {
  category: Category;
};

const TaskColumn: FC<PropTypes> = ({ category }) => {
  const { updateCategory, addTask, deleteCategory, updateTask } = useStore();
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
  const [{ isOver }, dropRef] = useDrop({
    accept: "card",
    drop: (task: Task) => {
      updateTask({ ...task, categoryId: category.id });
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });
  return (
    <div
      className={`rounded flex-no-shrink h-fit w-64 p-4 mr-3 pb-12 ${
        isOver ? "bg-blue-200" : "bg-gray-200"
      }`}
      ref={dropRef}
    >
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
            className="text-2xl text-red-900 cursor-pointer"
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
        <button className="mt-4" onClick={addCard}>
          + Add a Card
        </button>
      </div>
    </div>
  );
};

export default TaskColumn;
