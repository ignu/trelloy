import { Guid } from "guid-typescript";
import { filter, groupBy, map, prop, propEq } from "ramda";
import create from "zustand";
import { Task } from "./task";
type StoreState = {
  tasks: Task[];
  columns: string[];
  getCategories: () => any;
  getCategoryTasks: (category: string) => Task[];
};

const initialTasks: Task[] = [
  {
    id: Guid.create(),
    name: "This project",
    category: "Doing",
  },
];

export const useStore = create<StoreState>((set, get) => ({
  tasks: initialTasks,
  columns: ["To Do", "Doing", "Done"],
  getCategories: () => groupBy(prop("name"), get().tasks),
  getCategoryTasks: (category: string) => {
    return filter(propEq("category", category), get().tasks) ?? [];
  },
}));
