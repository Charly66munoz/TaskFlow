import { prisma } from "../../db/client"
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

