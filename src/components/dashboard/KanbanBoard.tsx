import KanbanColumn from "./KanbanColumn";
import type { Task, taskStatus } from "../../types/entity/Task";

interface kanbanBoardProps{
tasks: Task[],
// setTask es elimando ya que componente solo debera tener acceso a eliminar y modificar tareas
taskStatus: taskStatus
}



function KanbanBoard({tasks, taskStatus}: kanbanBoardProps) {
      return (
        <>
          <div className="hidden md:flex h-full  mr-5 mt-5 text-center  text-slate-300">
            <KanbanColumn types="Pendientes" tareas={taskStatus.toDo} />
            <KanbanColumn types="En progreso" tareas={taskStatus.inProgress} />
            <KanbanColumn types="Finalizadas" tareas={taskStatus.finished} />
          </div>
          <div className="md:hidden h-full pb-20 overflow-y-auto flex gap-4 p-5 md:mx-5 mt-5 text-center rounded-xl text-slate-300">
            <KanbanColumn types="Tareas" tareas={tasks} />
          </div>
        </>
      );
}
export default KanbanBoard