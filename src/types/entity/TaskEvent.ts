import type { User } from "./User";
import type { Task } from "./Task";

export type TaskEventType =
  | "CREATED"
  | "ASSIGNEE_CHANGED"
  | "STATUS_CHANGED";

export type TaskEvent = {
  id: string;
  taskId: string;

  type: TaskEventType;

  actor?: User;

  fromAssignee?: User;
  toAssignee?: User;

  fromStatus?: Task["status"];
  toStatus?: Task["status"];

  occurredAt: Date;
};