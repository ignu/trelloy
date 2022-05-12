import { Guid } from "guid-typescript";
import { User } from "./store";

export type Task = {
  id: Guid;
  name: string;
  categoryId: Guid;
  completedDate?: Date;
  createdAt?: Date;
  user: User;
};
