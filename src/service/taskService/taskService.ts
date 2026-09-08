import { prisma } from "../../db/client"
import type { Prisma } from "../../generated/prisma/client"
import type { Task } from "../../types/entity/Task"
import type { TaskInput } from "../../types/entity/TaskInput"

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
    })
        
    const tasks = tasksDb.map((t)=>{
        
        const finishedEvent = t.taskEventList.find(
            (event) => 
            event.toStatus === "finished"
        );

        const mappedTask: Task = {
            id: t.taskId,
            title: t.title ? t.title : "",
            description: t.description,
            ...(t.assignee && {
                assigneeTo: {
                    id: t.assignee.userId,
                    name: t.assignee.name,
                    email: t.assignee.email,
                    role: t.assignee.role
                }
            }),
            ...(t.priority && {
                priority: t.priority
            }),
            status: t.status,
            createdAt: t.createdAt,
            ...(t.deadline && {
                deadline: t.deadline
            }),
            ...(finishedEvent && {
                finishedAt: finishedEvent.occurredAt
            }),
            
            // El atributo finishedEvent esta en revision, ya que de momento no se cuenta con datos 100% y la trayectorias de una tarea seria completamente falsa
        }

        return mappedTask
    })

    return tasks
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

    const finishedEvent = createdTaskDb.taskEventList.find(
        (event) => 
        event.toStatus === "finished"
    );
    
    const newTask : Task = {
        id: createdTaskDb.taskId,
            title: createdTaskDb.title ? createdTaskDb.title : "",
            description: createdTaskDb.description,
            ...(createdTaskDb.assignee && {
                assigneeTo: {
                    id: createdTaskDb.assignee.userId,
                    name: createdTaskDb.assignee.name,
                    email: createdTaskDb.assignee.email,
                    role: createdTaskDb.assignee.role
                }
            }),
            ...(createdTaskDb.priority && {
                priority: createdTaskDb.priority
            }),
            status: createdTaskDb.status,
            createdAt: createdTaskDb.createdAt,
            ...(createdTaskDb.deadline && {
                deadline: createdTaskDb.deadline
            }),
            ...(finishedEvent && {
                finishedAt: finishedEvent.occurredAt
            }),
    }

    return newTask;
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

    const finishedEvent = editTaskDb.taskEventList.find(
        (event) => 
        event.toStatus === "finished"
    );
    
    const editedTask : Task = {
        id: editTaskDb.taskId,
            title: editTaskDb.title ? editTaskDb.title : "",
            description: editTaskDb.description,
            ...(editTaskDb.assignee && {
                assigneeTo: {
                    id: editTaskDb.assignee.userId,
                    name: editTaskDb.assignee.name,
                    email: editTaskDb.assignee.email,
                    role: editTaskDb.assignee.role
                }
            }),
            ...(editTaskDb.priority && {
                priority: editTaskDb.priority
            }),
            status: editTaskDb.status,
            createdAt: editTaskDb.createdAt,
            ...(editTaskDb.deadline && {
                deadline: editTaskDb.deadline
            }),
            ...(finishedEvent && {
                finishedAt: finishedEvent.occurredAt
            }),
    }

    return editedTask;
};

export const deleteTask = async (id: string) => {
    await prisma.task.delete({
        where: {
            taskId: id 
        },
    })
}

