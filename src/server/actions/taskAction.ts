"use server";

import { createTask } from "../../service/taskService/taskService";
import type { TaskInput } from "../../types/entity/TaskInput";

export async function createTaskAction(taskInput: TaskInput) {
  return createTask(taskInput);
}