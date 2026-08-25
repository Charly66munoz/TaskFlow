type TaskPreview = {
  title: string;
  tag: "Frontend" | "Backend" | "UI/UX" | "Testing";
  priority: "High" | "Medium" | "Low";
};

const tagStyles = {
  Frontend: "border-purple-600/40 bg-purple-600/10 text-purple-600",
  Backend: "border-blue-500/40 bg-blue-500/10 text-blue-500",
  "UI/UX": "border-pink-500/40 bg-pink-500/10 text-pink-500",
  Testing: "border-emerald-500/40 bg-emerald-500/10 text-emerald-500",
};

const priorityStyles = {
  High: "bg-red-500",
  Medium: "bg-yellow-500",
  Low: "bg-green-500",
};

const columns: { title: string; tasks: TaskPreview[] }[] = [
  {
    title: "TO DO",
    tasks: [
      { title: "Create dashboard filters", tag: "Frontend", priority: "Medium" },
      { title: "Define API errors", tag: "Backend", priority: "High" },
    ],
  },
  {
    title: "IN PROGRESS",
    tasks: [
      { title: "Build task history", tag: "Backend", priority: "High" },
      { title: "Polish mobile layout", tag: "UI/UX", priority: "Medium" },
    ],
  },
  {
    title: "FINISHED",
    tasks: [
      { title: "Responsive Kanban", tag: "Frontend", priority: "Low" },
      { title: "Task creation flow", tag: "Testing", priority: "Low" },
    ],
  },
];

function TaskCard({ task }: { task: TaskPreview }) {
  return (
    <article className="rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-lg transition hover:shadow-xl">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold leading-5 text-white">
          {task.title}
        </h3>
        <span
          className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${
            priorityStyles[task.priority]
          }`}
          aria-label={`${task.priority} priority`}
        />
      </div>

      <span
        className={`mt-4 inline-flex rounded-xl border px-2.5 py-1 text-xs font-medium ${
          tagStyles[task.tag]
        }`}
      >
        {task.tag}
      </span>
    </article>
  );
}

export function ProductPreview() {
  return (
    <div className="relative">
      <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-purple-600/10 blur-2xl" />

      <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 p-4 shadow-xl sm:p-5">
        <div className="mb-5 flex items-center justify-between border-b border-slate-700 pb-4">
          <div>
            <p className="text-sm font-semibold text-white">My workspace</p>
            <p className="text-xs text-slate-500">6 active tasks</p>
          </div>

          <span className="rounded-xl bg-purple-600 px-3 py-1.5 text-xs font-semibold text-white">
            + New task
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {columns.map((column) => (
            <div key={column.title} className="min-w-0">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-semibold tracking-wide text-slate-300">
                  {column.title}
                </p>
                <span className="text-xs text-slate-500">{column.tasks.length}</span>
              </div>

              <div className="space-y-3">
                {column.tasks.map((task) => (
                  <TaskCard key={task.title} task={task} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
