import type { User } from "./User";

export interface Task{
// el id representa un campo UUID
id: string,
title?: string,
description: string,
assigneeTo?: User,
priority?: 'low'|'medium'|'high',
status: 'toDo'|'inProgress'|'finished',
//Para un futuro se puede implementar otros estaodos: |'blocked'|'cancelled'|'review' 
createdAt: Date,
finishedAt?: Date,
deadline?: Date,
}

export interface taskStatus{
  toDo: Task[],
  inProgress: Task[],
  finished: Task[], 
}