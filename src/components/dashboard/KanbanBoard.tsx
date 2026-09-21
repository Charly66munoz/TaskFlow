import KanbanColumn from "./KanbanColumn";
import type { Task, taskStatus } from "@/types/entity/Task";
import type { User } from "@/types/entity/User";

interface kanbanBoardProps {
  tasks: Task[];
  // setTask es elimando ya que componente solo debera tener acceso a eliminar y modificar tareas
  taskStatus: taskStatus;
  dbUsers: User[];
  deleteTask: (id: string) => void;
  editTask: (id: string, task: Task) => void;
}



function KanbanBoard({
  tasks,
  taskStatus,
  dbUsers,
  deleteTask,
  editTask,
}: kanbanBoardProps) {
  return (
    <>
      <div className="hidden md:flex h-full  mr-5 mt-5 text-center  text-slate-300">
        <KanbanColumn
          types="Pendientes"
          tareas={taskStatus.toDo}
          dbUsers={dbUsers}
          deleteTask={deleteTask}
          editTask={editTask}
        />
        <KanbanColumn
          types="En progreso"
          tareas={taskStatus.inProgress}
          dbUsers={dbUsers}
          deleteTask={deleteTask}
          editTask={editTask}
        />
        <KanbanColumn
          types="Finalizadas"
          tareas={taskStatus.finished}
          dbUsers={dbUsers}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
      <div className="md:hidden h-full pb-20 overflow-y-auto flex gap-4 p-5 md:mx-5 mt-5 text-center rounded-xl text-slate-300">
        <KanbanColumn
          types="Tareas"
          dbUsers={dbUsers}
          tareas={tasks}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      </div>
    </>
  );
}
export default KanbanBoard