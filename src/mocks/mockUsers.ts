import type { User } from "../types/entity/User";
import { v4 as uuid } from "uuid";

export const users: User[] = [
  {
    id: uuid(),
    name: "Juan Pérez",
    email: "juan@test.com",
  },
  {
    id: uuid(),
    name: "Jose Lopez",
    email: "jose@test.com",
  },
  {
    id: uuid(),
    name: "Cata Eches",
    email: "eches@test.com",
  },
];