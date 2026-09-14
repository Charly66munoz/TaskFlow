import { prisma } from "../db/client"
import type { Prisma } from "../generated/prisma/client"
import type { TaskInput } from "../types/entity/TaskInput"
import { mapTaskToUI } from "./mapper/taskMapper"

export const getTasks = async () => {
    const tasksDb = await prisma.task.findMany({
        include: {
            assignee: true,
            taskEventList: {
                orderBy: {
                    occurredAt: "desc"
                }
            }
        },
        orderBy: {
            createdAt: "asc"
    }
    })
        
    return tasksDb.map((t)=> mapTaskToUI(t))
}

export const createTask = async (taskInput: TaskInput) => {
    const createdTaskDb = await prisma.task.create({
        include: {
            assignee: true,
            taskEventList: {
                orderBy: {
                    occurredAt: "desc"
                }
            }
        },
        data: {
            ...(taskInput.title !== undefined && {
                title: taskInput.title,
            }),
            description: taskInput.description,
            ...(taskInput.priority && {
                priority: taskInput.priority,
            }),
            ...(taskInput.assigneeId && {
                assigneeId: taskInput.assigneeId,
            }),
            ...(taskInput.deadline && {
                deadline: taskInput.deadline,
            }),
            taskEventList: {
                create: { type: "CREATED" },
            },
        },
    });
    return mapTaskToUI(createdTaskDb)
};
export const editTask = async (id: string, taskInput: TaskInput) => {
    
    const editTaskDb = await prisma.$transaction(async (tx) => {
        const previousTask = await tx.task.findUniqueOrThrow({
            where: { taskId: id },
            select: { assigneeId: true, status: true },
        });
        //undefined no modificar
        //null borrar la asignación
        //string asignar este usuario
        const newAssigneeId = taskInput.assigneeId !== undefined
            ? taskInput.assigneeId
            : previousTask.assigneeId;
        const newStatus = taskInput.status ?? previousTask.status;

        // Solo aceptar objetos que Prisma pueda usar
        // para crear TaskEvents.
        const events: Prisma.TaskEventUncheckedCreateWithoutTaskInput[] = [];

        if (newAssigneeId !== previousTask.assigneeId) {
            events.push({
                type: "ASSIGNEE_CHANGED",
                fromAssigneeId: previousTask.assigneeId,
                toAssigneeId: newAssigneeId,
            });
        }

        if (newStatus !== previousTask.status) {
            events.push({
                type: "STATUS_CHANGED",
                fromStatus: previousTask.status,
                toStatus: newStatus,
            });
        }

        return tx.task.update({
            include: {
                assignee: true,
                taskEventList: {
                    orderBy: {
                        occurredAt: "desc"
                    }
                }
            },
            where: {
                taskId: id
            },
            data: {
                ...(taskInput.title !== undefined && {
                    title: taskInput.title,
                }),
                description: taskInput.description,
                ...(taskInput.priority && {
                    priority: taskInput.priority,
                }),
                ...(taskInput.assigneeId !== undefined && {
                    assigneeId: taskInput.assigneeId,
                }),
                ...(taskInput.status && {
                    status: taskInput.status,
                }),
                ...(taskInput.deadline && {
                    deadline: taskInput.deadline,
                }),
                ...(events.length > 0 && {
                    taskEventList: {
                        create: events,
                    },
                }),
            },
        });
    });

    return mapTaskToUI(editTaskDb)
};

export const deleteTask = async (id: string) => {
    await prisma.task.delete({
        where: {
            taskId: id 
        },
    })
}

