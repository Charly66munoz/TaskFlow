import { prisma } from "../db/client"
import type { Prisma, Status } from "../generated/prisma/client"
import type { TaskInput } from "../types/entity/TaskInput"
import { mapTaskToUI } from "./mapper/taskMapper"

export const getTasks = async (sessionUserId: string) => {
    const tasksDb = await prisma.task.findMany({
        where: {
            OR: [
                { createdById: sessionUserId },
                { assigneeId: sessionUserId }
            ]
        },
        include: {
            createdBy: true,
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

export const createTask = async (taskInput: TaskInput, sessionUserId: string) => {
        
    const result = await prisma.task.create({
        include: {
            createdBy: true,
            assignee: true,
            taskEventList: {
                orderBy: {
                    occurredAt: "desc"
                }
            }
        },
        data: {
            createdById: sessionUserId,
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

    

    return {
        success: true as const,
        task: mapTaskToUI(result)
    }  
};

export const editTask = async (taskId: string, taskInput: TaskInput, sessionUserId: string) => {
    
    const result = await prisma.$transaction(async (tx) => {
        const previousTask = await tx.task.findFirst({
            where: { 
                taskId,
                OR: [
                    {createdById: sessionUserId},
                    {assigneeId: sessionUserId}
                ],
             },
            select: { assigneeId: true, status: true , createdById: true },
        });
        if (!previousTask ) {
            return {
                success: false as const,
                error: "No estás autorizado a editar esta tarea",
            };
        }
        if (previousTask.createdById !== sessionUserId && previousTask.assigneeId !== sessionUserId) {
            return {
                success: false as const,
                error: "No estás autorizado a cambiar el estado de la tarea",
            };
        }
        if(previousTask.createdById !== sessionUserId && taskInput.assigneeId !== previousTask.assigneeId){
            return {
                success: false as const,
                error: "No estás autorizado a editar el personal asignado",
            };
        }
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

        const updatedTask = await tx.task.update({
            include: {
                createdBy: true,
                assignee: true,
                taskEventList: {
                    orderBy: {
                        occurredAt: "desc"
                    }
                }
            },
            where: {
                taskId,
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
        return {
            success: true as const,
            task: updatedTask
        }
    });
    if (!result.success) {
        return result
    }

    return {
        success: true as const,
        task: mapTaskToUI(result.task),
    };
};

export const deleteTask = async (id: string, sessionUserId: string) => {
     const result = await prisma.task.deleteMany({
        where: {
        taskId: id,
        createdById: sessionUserId,
        },
    });

    if (result.count === 0) {
        return {
        success: false,
        error: "No estás autorizado a borrar esta tarea",
        };
    }

    return {
        success: true,
        error: null,
    };
}

export const updateTaskStatus = async (
  taskId: string,
  newStatus: Status,
  sessionUserId: string
) => {
  
    return  prisma.$transaction(async (tx) => {
      const previousTask = await tx.task.findUnique({
            where: { 
                taskId,
             },
            select: { assigneeId: true, status: true , createdById: true },
        });
        if (!previousTask) {
            return {
                success: false as const,
                error: "La tarea no existe",
            };
        }

        if (previousTask.createdById !== sessionUserId && previousTask.assigneeId !== sessionUserId) {
            return {
                success: false as const,
                error: "No estás autorizado a cambiar el estado de la tarea",
            };
        }

        if (newStatus === previousTask.status) {
            return {
                success: true as const,
                changed: false,
            };
        }
        
        await tx.task.update({
            where: {
                taskId,
            },
            data: {
                status: newStatus,
                taskEventList: {
                create: {
                    type: "STATUS_CHANGED",
                    fromStatus: previousTask.status,
                    toStatus: newStatus,
                },
                },
            },
        });
        return {
            success: true as const,
            changed: true,
        }
    });
};



