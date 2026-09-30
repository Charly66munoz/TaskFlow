"use server";

import { createTask, deleteTask, editTask } from "@/service/taskService";
import type { TaskInput } from "@/types/entity/TaskInput";
import { auth } from "../auth";

export async function createTaskAction(taskInput: TaskInput) {
  const session = await auth();

  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }
  return createTask(taskInput, session?.user?.id);
}
export async function editTaskAction(id: string, taskInput: TaskInput) {
  return editTask( id, taskInput );
}
//implementar borrado logico mas adelante
export async function deleteTaskAction(id: string) {
  return deleteTask( id );
}