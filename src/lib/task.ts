import { Guid } from "guid-typescript";

export type Task = {
  id: Guid;
  name: string;
  categoryId: Guid;
  completedDate?: Date;
  createdAt?: Date;
};
