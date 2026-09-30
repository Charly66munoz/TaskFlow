import type { Task } from "../types/entity/Task";
import { mockUsers } from "./mockUsers";

const today = new Date();
const deadline = new Date("2026-08-05");
export const mockTasks: Task[] = [
    {
        id: "11111112-1111-4111-8111-111111111110",
        title: "Estudiar",
        description: "Preparar examen integral de lengua y literatura griega",
        createdBy: mockUsers[0],
        assigneeTo: mockUsers[1],
        priority: 'high',
        status: 'toDo',
        createdAt: today,
        deadline: deadline,
    },
    {
        id: "11111113-1111-4111-8111-111111111110",
        description: "Seleccionar persona resposable de envento tech",
        createdBy: mockUsers[0],
        priority: 'medium',
        status: 'inProgress',
        createdAt: today,
        deadline: deadline,
    },
    {
        id: "11111114-1111-4111-8111-111111111110",
        description: "Actualizar documentación del proyecto",
        createdBy: mockUsers[1],
        assigneeTo: mockUsers[0],
        priority: "low",
        status: "finished",
        createdAt: new Date("2026-07-10"),
        finishedAt: new Date("2026-07-12"),
    },

    {
        id: "11111115-1111-4111-8111-111111111110",
        title: "Front-end works" ,
        description: "Diseñar pantalla de Login",
        createdBy: mockUsers[1],
        assigneeTo: mockUsers[2],
        priority: "high",
        status: "inProgress",
        createdAt: new Date("2026-07-18"),
        deadline: new Date("2026-07-25"),
    },

    {
        id: "11111116-1111-4111-8111-111111111110",
        description: "Preparar reunión con el cliente",
        createdBy: mockUsers[2],
        priority: "medium",
        status: "toDo",
        createdAt: new Date("2026-07-20"),
        deadline: new Date("2026-07-24"),
    },

    {
        id: "11111117-1111-4111-8111-111111111110",
        title: "Correcciones bugs",
        description: "Corregir errores reportados en producción",
        createdBy: mockUsers[2],
        assigneeTo: mockUsers[1],
        priority: "high",
        status: "finished",
        createdAt: new Date("2026-07-05"),
        finishedAt: new Date("2026-07-06"),
    },

    {
        id: "11111118-1111-4111-8111-111111111110",
        description: "Revisar Pull Request #18",
        createdBy: mockUsers[2],
        assigneeTo: mockUsers[0],
        priority: "medium",
        status: "toDo",
        createdAt: new Date("2026-07-21"),
    },

    {
        id: "11111119-1111-4111-8111-111111111110",
        title: "Dashboard development"        ,
        description: "Optimizar rendimiento del Dashboard",
        createdBy: mockUsers[0],
        assigneeTo: mockUsers[2],
        priority: "high",
        status: "inProgress",
        createdAt: new Date("2026-07-15"),
        deadline: new Date("2026-07-28"),
    },
]  
