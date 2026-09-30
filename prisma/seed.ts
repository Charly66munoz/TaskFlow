import "dotenv/config";
import { prisma } from "../src/db/client";
import {  mockUsers } from "../src/mocks/mockUsers";
import { mockTasks } from "../src/mocks/mockTasks";
import { mockTaskEvents } from "@/mocks/mockTaskEvent";

/**
 * Users are seeded before tasks because Task.assigneeId
 * references User.userId.
 */
async function seedUsers() {
  for (const user of mockUsers) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: {
        name: user.name,
        email: user.email,
      },
      create: {
        userId: user.id,
        name: user.name,
        email: user.email,
      },
    });
  }
}

async function seedTasks() {
  for (const task of mockTasks) {
    await prisma.task.upsert({
      where: { taskId: task.id },
      update: {
        title: task.title ?? null,
        description: task.description,
        createdById: task.createdBy.id,
        assigneeId: task.assigneeTo?.id ?? null,
        priority: task.priority ?? null,
        status: task.status,
        createdAt: task.createdAt,
        deadline: task.deadline ?? null,
      },
      create: {
        taskId: task.id,
        title: task.title ?? null,
        description: task.description,
        createdById: task.createdBy.id,
        assigneeId: task.assigneeTo?.id ?? null,
        priority: task.priority ?? null,
        status: task.status,
        createdAt: task.createdAt,
        deadline: task.deadline ?? null,
      },
    });
  }
}
  async function seedTasksEvent() {
    for (const taskEvent of mockTaskEvents) {
      await prisma.taskEvent.create({
        data: {
          taskId: taskEvent.taskId,
          type: taskEvent.type,

          ...(taskEvent.actor && {
          actorId: taskEvent.actor.id,}),

          ...(taskEvent.fromAssignee && {
            fromAssigneeId: taskEvent.fromAssignee.id
          }),
          ...(taskEvent.toAssignee && {
            toAssigneeId: taskEvent.toAssignee.id
          }),
          ...(taskEvent.fromStatus && {
            fromStatus: taskEvent.fromStatus
          }),
          ...(taskEvent.toStatus && {
            toStatus: taskEvent.toStatus
          }),

          occurredAt: taskEvent.occurredAt,
        },
  });
  }
}

async function main() {
  await seedUsers();
  await seedTasks();
  await seedTasksEvent();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
