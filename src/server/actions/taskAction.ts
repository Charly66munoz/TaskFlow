"use server";

import { createTask, deleteTask, editTask, getTasks, updateTaskStatus } from "@/service/taskService";
import type { TaskInput } from "@/types/entity/TaskInput";
import { auth } from "../auth";
import type { Status } from "@/generated/prisma/enums";


export async function getTaskAction() {
  const session = await checkSession()

  if (!session.success) {
    throw new Error('No se han podido obtener las tareas')
  }
  return getTasks(session.userId);
}

export async function createTaskAction(taskInput: TaskInput) {
  const session = await checkSession()

  if (!session.success) {
    return session;
  }
  return createTask(taskInput, session.userId);
}

export async function editTaskAction(id: string, taskInput: TaskInput) {
  const session = await checkSession()

  if (!session.success) {
    return session;
  }
  

  return editTask(id, taskInput, session.userId);
}

export const updateTaskStatusAction = async (
  taskId: string,
  newStatus: Status
) => {
  const session = await checkSession();

  if (!session.success) {
    return session;
  }

  return updateTaskStatus(
    taskId,
    newStatus,
    session.userId
  );
};

export async function deleteTaskAction(id: string) {
  const session = await checkSession()

  if (!session.success ) {
    return session
  }
  return deleteTask( id , session.userId);
}

type SessionResult =
   |{
      success: true;
      userId: string;
    }
  | {
      success: false;
      error: string;
};

export const checkSession = async (): Promise<SessionResult> => {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      success: false,
      error: "No estás autenticado",
    };
  }

  return {
    success: true,
    userId: session.user.id,
  };
};