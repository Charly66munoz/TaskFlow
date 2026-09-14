import type { Prisma } from "../../generated/prisma/client";
import type { Task } from "../../types/entity/Task";

type TaskWithRelations = Prisma.TaskGetPayload<{
  include: {
    assignee: true;
    taskEventList: {
                orderBy: {
                    occurredAt: "desc"
                }
    }
  };
}>;

export function mapTaskToUI(task: TaskWithRelations): Task {
    const finishedEvent =
        task.status === "finished"
        ? task.taskEventList.find(
            event => event.toStatus === "finished"
            )
        : undefined;

    const mappedTask: Task = {
        id: task.taskId,

        title: task.title ?? "",

        description: task.description,

        ...(task.assignee && {
        assigneeTo: {
            id: task.assignee.userId,
            name: task.assignee.name,
            email: task.assignee.email,
            role: task.assignee.role,
        },
        }),

        ...(task.priority && {
        priority: task.priority,
        }),

        status: task.status,

        createdAt: task.createdAt,

        ...(task.deadline && {
        deadline: task.deadline,
        }),

        ...(finishedEvent && {
        finishedAt: finishedEvent.occurredAt,
        }),
    };
    return mappedTask
}