import type { Task } from "./Task";

export interface TaskInput {
  title?: string;
  description: string;
  priority?: Task["priority"];
  assigneeId?: string;
  deadline?: Date;
}