import type { Task, taskStatus } from "../../types/entity/Task";

interface propsGreting{
  tasks: Task[]
  tasksStatus: taskStatus
}

const Greeting = ({ tasks, tasksStatus }: propsGreting) => {
  return (
    <div className="shadow-xl/10 bg-purple-600/10 p-3 md:mx-25 lg:mx-55 lg: rounded-3xl w-full text-slate-300  relative ">
      <div
        className="absolute inset-0 bg-no-repeat bg-bottom opacity-10 pointer-events-none rounded-3xl"
        style={{
          backgroundImage: "url('/bd-gretting.png')",
        }}
      />
      <div className="relative z-10">
        <div>
          <p className="text-xs  mr-7 text-end">Hola Ivana</p>
          <h3 className="ml-7  mb-5  font-semibold">
            Pendientes...{" "}
            <span className="text-2xl">{tasksStatus.toDo.length}</span>
          </h3>
        </div>
        <div className="flex gap-2 items-end text-xs">
          <div className=" basis-1/3 text-center">
            <p className="">En progreso...</p>
            <p className="text-lg font-extrabold">
              {tasksStatus.inProgress.length}
            </p>
          </div>
          <div className=" basis-1/3 text-center">
            <p className="">Finalizadas...</p>
            <p className="text-lg font-extrabold">
              {tasksStatus.finished.length}
            </p>
          </div>
          <div className=" basis-1/3 text-center">
            <p className="">Totales...</p>
            <p className="text-lg font-extrabold">{tasks.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Greeting