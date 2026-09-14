import type { User } from "../types/entity/User";
import { v4 as uuid } from "uuid";

export const users: User[] = [
  {
    id: uuid(),
    name: "Juan Pérez",
    role: "member",
    email: "juan@test.com",
  },
  {
    id: uuid(),
    name: "Jose Lopez",
    role: "member",
    email: "jose@test.com",
  },
  {
    id: uuid(),
    name: "Cata Eches",
    role: "member",
    email: "eches@test.com",
  },
];