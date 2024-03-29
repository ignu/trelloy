import { Guid } from "guid-typescript";
import { filter, map, propEq } from "ramda";
import create from "zustand";
import { persist } from "zustand/middleware";
import { Task } from "./task";

type StoreState = {
  tasks: Task[];
  users: User[];
  currentUser: User;
  categories: Category[];
  deleteCategory: (category: Category) => void;
  addCategory: () => void;
  addTask: (categoryId: string) => void;
  getCategoryTasks: (category: Category) => Task[];
  updateCategory: (category: Category) => void;
  updateTask: (task: Task) => void;
};

export type Category = {
  id: string;
  name: string;
};

const newCategory = (name: string): Category => {
  return { id: Guid.raw(), name };
};

const createTask = (categoryId: string, user: User): Task => {
  return {
    id: Guid.raw(),
    name: "New Task",
    user,
    categoryId,
    createdAt: new Date(),
  };
};

export type User = {
  id: number;
  name: string;
  profileUrl: string;
};

const users: User[] = [
  {
    id: 1,
    name: "Tony Soprano",
    profileUrl: "https://i.pravatar.cc/50?img=3",
  },
  {
    id: 2,
    name: "Paulie Walnuts",
    profileUrl: "https://i.pravatar.cc/50?img=4",
  },
  {
    id: 3,
    name: "Silvio Date",
    profileUrl: "https://i.pravatar.cc/50?img=5",
  },
];

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      tasks: [],
      getTasks: () => get().tasks,
      users,
      currentUser: users[0],
      categories: [newCategory("To Do"), newCategory("Doing"), newCategory("Done")],
      getCategoryTasks: (category: Category) => {
        return filter(propEq("id", category.id), get().tasks) ?? [];
      },
      addTask: (categoryId: string) => {
        set((state) => {
          return {
            ...state,
            tasks: [...state.tasks, createTask(categoryId, get().currentUser)],
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
      addCategory: () => {
        set((state) => {
          return {
            ...state,
            categories: [...get().categories, newCategory("New List")],
          };
        });
      },
      deleteCategory: (category: Category) => {
        set((state) => {
          return {
            ...state,
            categories: [...get().categories.filter((c) => c.id !== category.id)],
          };
        });
      },
      updateTask: (task: Task) => {
        set((state) => {
          return {
            ...state,
            tasks: map((t) => (t.id === task.id ? task : { ...t, id: Guid.raw() }), get().tasks),
          };
        });
      },
    }),
    { name: "trelloy" }
  )
);
