import { Guid } from "guid-typescript";
import { filter, groupBy, map, prop, propEq } from "ramda";
import create from "zustand";
import { Task } from "./task";
type StoreState = {
  tasks: Task[];
  categories: Category[];
  getCategories: () => any;
  addTask: (categoryId: Guid) => void;
  getCategoryTasks: (category: Category) => Task[];
  updateCategory: (category: Category) => void;
  updateTask: (task: Task) => void;
};

export type Category = {
  id: Guid;
  name: string;
};

const newCategory = (name: string): Category => {
  return { id: Guid.create(), name };
};

const createTask = (categoryId: Guid): Task => {
  return {
    id: Guid.create(),
    name: "Add To Task",
    categoryId,
    createdAt: new Date(),
  };
};

export const useStore = create<StoreState>((set, get) => ({
  tasks: [],
  getTasks: () => get().tasks,
  categories: [newCategory("To Do"), newCategory("Doing"), newCategory("Done")],
  getCategories: () => groupBy(prop("name"), get().tasks),
  getCategoryTasks: (category: Category) => {
    return filter(propEq("id", category.id), get().tasks) ?? [];
  },
  addTask: (categoryId: Guid) => {
    set((state) => {
      return {
        ...state,
        tasks: [...state.tasks, createTask(categoryId)],
      };
    });
  },
  updateCategory: (category: Category) => {
    set((state) => {
      return {
        ...state,
        categories: map((c) => (c.id === category.id ? category : c), get().categories),
      };
    });
  },
  updateTask: (task: Task) => {
    set((state) => {
      return {
        ...state,
        tasks: map((t) => (t.id === task.id ? task : { ...t, id: Guid.create() }), get().tasks),
      };
    });
  },
}));
