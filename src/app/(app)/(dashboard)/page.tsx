import { Dashboard } from "../../../components/pages/Dashboard";
import { getTasks } from "../../../service/taskService/taskService";
import { getUsers } from "../../../service/userService/userService";
import type { Task } from "../../../types/entity/Task";
import type { User } from "../../../types/entity/User";


export default async function Page() {
  let tasks : Task[] = await getTasks();
  let users : User[] = await getUsers();

    console.log("TASKS FROM DB:", tasks);

  return <Dashboard dbTasks={tasks} dbUsers={users}/>;
}