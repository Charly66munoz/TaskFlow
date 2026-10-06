import { Dashboard } from "@/components/pages/Dashboard";
import { getTaskAction } from "@/server/actions/taskAction";
import { getUsers } from "@/service/userService";
import type { Task } from "@/types/entity/Task";
import type { User } from "@/types/entity/User";


export default async function Page() {
  let tasks : Task[] = await getTaskAction();
  let users : User[] = await getUsers();

  return (
    <Dashboard dbTasks={tasks} dbUsers={users}/>
  )
}