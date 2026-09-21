import type { Task } from "@/types/entity/Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import type { User } from "@/types/entity/User";
import EditTaskForm from "./EditTaskForm";
import DeleteTaskForm from "./DeleteTaskForm";

interface TaskCardProp {
  task: Task;
  dbUsers: User[];
  deleteTask: (id: string) => void;
  editTask: (id: string, task: Task) => void;
}


const TaskCard = ({ task, dbUsers, deleteTask, editTask }: TaskCardProp) => {
  const [editTaskForm, setEditTaskForm] = useState<boolean>(false);
  const [deleteTaskForm, setDeleteTaskForm] = useState<boolean>(false);
  
    // Abre el formulario
    const openEditForm = () => {
      setEditTaskForm(true)
    };
    const openDeleteForm = () => {
      setDeleteTaskForm(true)
    };
    // Cierra el formualario
    const closeFormEdit = () => setEditTaskForm(false);
    const closeFormDelete = () => setDeleteTaskForm(false);
  
  return (
    <>
      {editTaskForm && (
        <EditTaskForm
          task={task}
          dbUsers={dbUsers}
          editTask={editTask}
          onClose={closeFormEdit}
        />
      )}
      {deleteTaskForm && (
        <DeleteTaskForm
          task={task}
          deleteTask={deleteTask}
          onClose={closeFormDelete}
        />
      )}
      <div className="my-2 mx-3 px-5 py-2 md:py-5 rounded-xl text-start text-[13px] bg-purple-400/10">
        <div className="flex flex-row md:flex-col-reverse justify-between items-start">
          {task.title ? (
            <h1 className="font-medium text-[16px] mb-1 md:self-start">
              {task.title}
            </h1>
          ) : (
            <h1 className="mb-1 text-slate-500 md:self-start">
              Agregar titulo
            </h1>
          )}
          <div className="flex md:justify-end md:mb-2 md:self-end gap-3">
            <button
              className=" text-[11px] hover:text-purple-600"
              onClick={() => openEditForm()}
            >
              Editar
            </button>
            <button
              className="text-[11px] hover:text-red-900 hover:text-[15px]"
              key={task.id}
              onClick={() => openDeleteForm()}
            >
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </div>

        <p className=" ">{task.description}</p>
        <div className=" flex justify-start">
          <hr className="border-slate-100/10 my-2 w-1/2 md:w-1/3" />
        </div>
        {task.priority ? (
          <p className="">
            Prioridad: {}
            {(() => {
              switch (task.priority) {
                case "low":
                  return "🟢Baja";
                case "medium":
                  return "🟡Media";
                case "high":
                  return "🔴Alta";
                default:
                  return;
              }
            })()}
          </p>
        ) : (
          <p className=" text-slate-500">Asignar prioridad</p>
        )}
        {task.assigneeTo ? (
          <p className="">Encargado: {task.assigneeTo["name"]}</p>
        ) : (
          <p className=" text-slate-500">Asignar resposable </p>
        )}
        <div className=" flex justify-start">
          <hr className="border-slate-100/10 my-2 w-1/2 md:w-1/3" />
        </div>
        {task.deadline ? (
          <p className="">
            Deadline: {task.deadline.toLocaleDateString("es-AR")}
          </p>
        ) : (
          <p className=" text-slate-500">Agregar fecha limite </p>
        )}

        {task.finishedAt && (
          <p>Terminado el {task.finishedAt.toLocaleDateString("es-AR")}</p>
        )}
        <p className="text-slate-500 text-[11px] text-end">
          Creada el: {task.createdAt.toLocaleDateString("es-AR")}
        </p>
      </div>
    </>
  );
};
export default TaskCard