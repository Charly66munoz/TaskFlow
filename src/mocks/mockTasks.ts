import type { Task } from "../types/entity/Task";
import { users } from "./users";
import { v4 as uuid } from "uuid";

const today = new Date();
const deadline = new Date("2026-08-05");
export const mockTasks: Task[] = [
    {
        id: uuid(),
        title: "Estudiar",
        description: "Preparar examen integral de lengua y literatura griega",
        assigneeTo: users[1],
        priority: 'high',
        status: 'toDo',
        createdAt: today,
        deadline: deadline,
    },
    {
        id: uuid(),
        description: "Seleccionar persona resposable de envento tech",
        priority: 'medium',
        status: 'inProgress',
        createdAt: today,
        deadline: deadline,
    },
    {
        id: uuid(),
        description: "Actualizar documentación del proyecto",
        assigneeTo: users[0],
        priority: "low",
        status: "finished",
        createdAt: new Date("2026-07-10"),
        finishedAt: new Date("2026-07-12"),
    },

    {
        id: uuid(),
        title: "Front-end works" ,
        description: "Diseñar pantalla de Login",
        assigneeTo: users[2],
        priority: "high",
        status: "inProgress",
        createdAt: new Date("2026-07-18"),
        deadline: new Date("2026-07-25"),
    },

    {
        id: uuid(),
        description: "Preparar reunión con el cliente",
        priority: "medium",
        status: "toDo",
        createdAt: new Date("2026-07-20"),
        deadline: new Date("2026-07-24"),
    },

    {
        id: uuid(),
        title: "Correcciones bugs",
        description: "Corregir errores reportados en producción",
        assigneeTo: users[1],
        priority: "high",
        status: "finished",
        createdAt: new Date("2026-07-05"),
        finishedAt: new Date("2026-07-06"),
    },

    {
        id: uuid(),
        description: "Revisar Pull Request #18",
        assigneeTo: users[0],
        priority: "medium",
        status: "toDo",
        createdAt: new Date("2026-07-21"),
    },

    {
        id: uuid(),
        title: "Dashboard development"        ,
        description: "Optimizar rendimiento del Dashboard",
        assigneeTo: users[2],
        priority: "high",
        status: "inProgress",
        createdAt: new Date("2026-07-15"),
        deadline: new Date("2026-07-28"),
    },
]  
