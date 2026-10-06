"use client"

import { useState } from "react";
import AddTaskButton from "../dashboard/AddTaskButton";
import Greeting from "../dashboard/Greeting";
import KanbanBoard from "../dashboard/KanbanBoard";
import type { Task } from "@/types/entity/Task";
import type { User } from "@/types/entity/User";
import type { Status } from "@/generated/prisma/enums";

interface propDashboard{
  dbTasks: Task[];
  dbUsers: User[];
}


export const Dashboard = ({dbTasks, dbUsers}: propDashboard) => {
  const [tasks, setTasks] = useState<Task[]>(dbTasks);

  const tasksStatus = {
    toDo: tasks.filter((task) => task.status === "toDo"),
    inProgress: tasks.filter((task) => task.status === "inProgress"),
    finished: tasks.filter((task) => task.status === "finished"),
  };

  const addTask = (newTask: Task) => {
    setTasks((prev) => [...prev, newTask]);
  };
  const deleteTask = (idTask: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== idTask));
  };
  const editTask = (id: string, taskModified: Task) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? taskModified : task)),
    );
  };
  const changeStatus = (idTask: string , newStatus: Status)=> {
    setTasks((prev) =>
      prev.map((t)=>
        t.id === idTask ? { ...t, status: newStatus }
        : t
      )
    )
  }

  return (
    <>
      <div className="flex flex-col  h-full min-h-0">
        <div className="flex justify-center items-center">
          <Greeting tasks={tasks} tasksStatus={tasksStatus} />
        </div>
        <div className="flex-1 relative min-h-0">
          <KanbanBoard
            tasks={tasks}
            taskStatus={tasksStatus}
            dbUsers={dbUsers}
            deleteTask={deleteTask}
            editTask={editTask}
            changeStatus={changeStatus}
          />
          <AddTaskButton addTask={addTask} dbUsers={dbUsers} />
        </div>
      </div>
    </>
  );
};