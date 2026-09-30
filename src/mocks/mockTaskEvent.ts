import type { TaskEvent } from "../types/entity/TaskEvent";
import { mockUsers } from "./mockUsers";
import { mockTasks } from "./mockTasks";

export const mockTaskEvents: TaskEvent[] = [
  {
    id: "11111111-1111-4111-8111-111111111111",
    taskId: mockTasks[0].id,
    type: "CREATED",
    actor: mockUsers[0],
    occurredAt: mockTasks[0].createdAt,
  },

  {
    id: "11111111-1111-4111-8111-111111111112",
    taskId: mockTasks[1].id,
    type: "CREATED",
    actor: mockUsers[0],
    occurredAt: mockTasks[1].createdAt,
  },

  {
    id: "11111111-1111-4111-8111-111111111113",
    taskId: mockTasks[2].id,
    type: "CREATED",
    actor: mockUsers[1],
    occurredAt: mockTasks[2].createdAt,
  },

  {
    id: "11111111-1111-4111-8111-111111111114",
    taskId: mockTasks[2].id,
    type: "STATUS_CHANGED",
    actor: mockUsers[1],
    fromStatus: "inProgress",
    toStatus: "finished",
    occurredAt: mockTasks[2].finishedAt!,
  },

  {
    id: "11111111-1111-4111-8111-111111111115",
    taskId: mockTasks[3].id,
    type: "CREATED",
    actor: mockUsers[1],
    occurredAt: mockTasks[3].createdAt,
  },

  {
    id: "11111111-1111-4111-8111-111111111116",
    taskId: mockTasks[4].id,
    type: "CREATED",
    actor: mockUsers[2],
    occurredAt: mockTasks[4].createdAt,
  },

  {
    id: "11111111-1111-4111-8111-111111111117",
    taskId: mockTasks[5].id,
    type: "CREATED",
    actor: mockUsers[2],
    occurredAt: mockTasks[5].createdAt,
  },

  {
    id: "11111111-1111-4111-8111-111111111118",
    taskId: mockTasks[5].id,
    type: "STATUS_CHANGED",
    actor: mockUsers[2],
    fromStatus: "inProgress",
    toStatus: "finished",
    occurredAt: mockTasks[5].finishedAt!,
  },

  {
    id: "11111111-1111-4111-8111-111111111119",
    taskId: mockTasks[6].id,
    type: "CREATED",
    actor: mockUsers[2],
    occurredAt: mockTasks[6].createdAt,
  },


  {
    id: "11111111-1111-4111-8111-111111111110",
    taskId: mockTasks[7].id,
    type: "CREATED",
    actor: mockUsers[0],
    occurredAt: mockTasks[7].createdAt,
  },
];