"use server";

import { createTask, deleteTask, editTask } from "@/service/taskService";
import type { TaskInput } from "@/types/entity/TaskInput";

export async function createTaskAction(taskInput: TaskInput) {
  return createTask(taskInput);
}
export async function editTaskAction(id: string, taskInput: TaskInput) {
  return editTask( id, taskInput );
}
//implementar borrado logico mas adelante
export async function deleteTaskAction(id: string) {
  return deleteTask( id );
}