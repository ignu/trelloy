export type TaskCategory = "To Do" | "Doing" | "Done";

export type Task = {
  name: string,
  category: TaskCategory,
  completedDate?: Date
}
