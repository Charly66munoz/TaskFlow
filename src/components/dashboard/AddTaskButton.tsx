import type { Task } from "@/types/entity/Task";
import { useState } from "react";
import CreateTaskForm from "../task/CreateTaskForm";
import type { User } from "@/types/entity/User";


interface AddTaskButtonProp{
  addTask: (newTask: Task)=>void
  dbUsers: User[]
}

const AddTaskButton = ({ addTask , dbUsers }: AddTaskButtonProp) => {
  const [addTaskForm, setAddTaskForm] = useState<boolean>(false);

  // Abre el formulario
  const openForm = () => {
  
  setAddTaskForm(true)
  };
  // Cierra el formualario
  const closeForm = () => setAddTaskForm(false);

  return (
    <div className="fixed z-40  top-4/5 md:top-6/7 right-1 px-4 py-2 mr-1 rounded-full font-bold text-lg bg-purple-900  text-white hover:outline-2 hover:bg-purple-950 hover:outline-purple-500 ">
      <button className="" onClick={() => openForm()}>
        +
      </button>
      {addTaskForm && (
        <CreateTaskForm addTask={addTask} onClose={closeForm} dbUsers={dbUsers} />
      )}
    </div>
  );
};

export default AddTaskButton