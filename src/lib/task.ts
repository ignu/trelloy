import { User } from "./store";

export type Task = {
  id: string;
  name: string;
  categoryId: string;
  // HACK: to get persist to work in the next
  // ten minutes, accept the jsonified version
  // instead of mapping on rehyrdate
  completedDate?: Date | String;
  createdAt: Date | String;
  user: User;
};
