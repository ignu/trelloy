import create from 'zustand'
import { Task } from './task'

type StoreState = {
  tasks: Task[],
}

const initialTasks: Task[] = [{
  name: "This project",
  category: "Doing"
}]

export const useStore = create<StoreState>(set => ({
  tasks: initialTasks,
  columns: ["To Do", "Doing", "Done"]
}))

