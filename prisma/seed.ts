import "dotenv/config";
import { prisma } from "../src/db/client";
import { users as mockUsers } from "../src/mocks/mockUsers";
import { mockTasks } from "../src/mocks/mockTasks";

/**
 * Users are seeded before tasks because Task.assigneeId
 * references User.userId.
 */
async function seedUsers() {
  for (const user of mockUsers) {
    await prisma.user.upsert({
      where: { userId: user.id },
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
        assigneeId: task.assigneeTo?.id ?? null,
        priority: task.priority ?? null,
        status: task.status,
        createdAt: task.createdAt,
        deadline: task.deadline ?? null,
      },
    });

    //Esta funcion garantiza que la tarea tenga un punto en que haya sido creado.
    const hasCreatedEvent = await prisma.taskEvent.findFirst({
      where: { taskId: task.id, type: "CREATED" },
    });

    if (!hasCreatedEvent) {
      await prisma.taskEvent.create({
        data: {
          taskId: task.id,
          type: "CREATED",
          occurredAt: task.createdAt,
        },
      });
    }
  }
}

async function main() {
  await seedUsers();
  await seedTasks();
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
