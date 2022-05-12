import { Guid } from "guid-typescript";

export type Task = {
  id: Guid;
  name: string;
  category: string;
  completedDate?: Date;
};
