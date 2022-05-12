import { groupBy, prop } from 'ramda'
import create from 'zustand'
import { Task } from './task'
type StoreState = {
  tasks: Task[],
  columns: string[],
  getCategories: () => any
}

const initialTasks: Task[] = [{
  name: "This project",
  category: "Doing"
}]



export const useStore = create<StoreState>((set, get) => ({
  tasks: initialTasks,
  columns: ["To Do", "Doing", "Done"],
  getCategories: () => groupBy(prop("name"), get().tasks)
}))

