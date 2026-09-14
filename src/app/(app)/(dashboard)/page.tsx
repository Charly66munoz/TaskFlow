import { Dashboard } from "../../../components/pages/Dashboard";
import { getTasks } from "../../../service/taskService";
import { getUsers } from "../../../service/userService";
import type { Task } from "../../../types/entity/Task";
import type { User } from "../../../types/entity/User";


export default async function Page() {
  let tasks : Task[] = await getTasks();
  let users : User[] = await getUsers();

  return <Dashboard dbTasks={tasks} dbUsers={users}/>;
}