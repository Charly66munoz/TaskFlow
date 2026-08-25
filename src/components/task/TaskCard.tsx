import type { Task } from "../../types/entity/Task";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

interface TaskCardProp{
    task: Task
}

const TaskCard = ({ task }:TaskCardProp) =>{
    return (
      <>
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
              <button className=" text-[11px] hover:text-purple-600">
                Editar
              </button>
              <button className="text-[11px] hover:text-red-900 hover:text-[15px]">
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
}
export default TaskCard