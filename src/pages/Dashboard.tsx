import { useState } from "react";
import AddTaskButton from "../components/dashboard/AddTaskButton";
import Greeting from "../components/dashboard/Greeting";
import KanbanBoard from "../components/dashboard/KanbanBoard";
import type { Task } from "../types/entity/Task";
import { mockTasks } from "../mocks/mockTasks";

export const Dashboard = ()=>{
    const [tasks, setTasks] = useState<Task[]>(mockTasks)  
    // const [tasks, setTasks] = useState<Task[]>([])  
   
    const tasksStatus = {
      toDo: tasks.filter((task) => task.status === "toDo"),
      inProgress: tasks.filter((task) => task.status === "inProgress"),
      finished: tasks.filter((task) => task.status === "finished"),
    };

    const addTask = (newTask: Task) => {
      setTasks((tasks)=> [...tasks, newTask])
    }

    return (
      <>
        <div className="flex flex-col  h-full min-h-0">
          <div className="flex justify-center items-center">
            <Greeting tasks={tasks} tasksStatus={tasksStatus}/>
          </div>
          <div className="flex-1 relative min-h-0">
            <KanbanBoard tasks={tasks} taskStatus={tasksStatus} />
            <AddTaskButton addTask={addTask} />
          </div>
        </div>
      </>
    );
}