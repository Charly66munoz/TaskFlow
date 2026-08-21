import { useState } from "react";
import type { ChangeEvent, SubmitEvent } from "react";
import { v4 as uuid } from "uuid";
import type { Task } from "../../types/entity/Task";
import { users } from "../../mocks/users";

interface CreateTaskFormProp {
  addTask: (newTask: Task) => void;
  onClose: () => void;
}

interface TaskFormDraft {
  title: string;
  description: string;
  priority: string;
  assigneeToId: string;
  deadline: string;
}

const initialDraft: TaskFormDraft = {
  title: "",
  description: "",
  priority: "",
  assigneeToId: "",
  deadline: "",
};

function toPriority(value: string): Task["priority"] {
  switch (value) {
    case "low":
    case "medium":
    case "high":
      return value;
    default:
      return undefined;
  }
}

const CreateTaskForm = ({ addTask, onClose }: CreateTaskFormProp) => {
  const [draft, setDraft] = useState<TaskFormDraft>(initialDraft);
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const isDescriptionEmpty = draft.description.trim() === "";

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setDraft((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isDescriptionEmpty) {
      setSubmitAttempted(true);
      return;
    }

    const trimmedTitle = draft.title.trim();
    const priorityValue = toPriority(draft.priority);
    const selectedUser = users.find((user) => user.id === draft.assigneeToId);

    const newTask: Task = {
      id: uuid(),
      description: draft.description.trim(),
      status: "toDo",
      createdAt: new Date(),
      ...(trimmedTitle !== "" ? { title: trimmedTitle } : {}),
      ...(priorityValue !== undefined ? { priority: priorityValue } : {}),
      ...(selectedUser !== undefined ? { assigneeTo: selectedUser } : {}),
      ...(draft.deadline !== "" ? { deadline: new Date(draft.deadline) } : {}),
    };

    addTask(newTask);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="create-task-heading"
    >
      <div className="bg-slate-900 rounded-xl p-6 w-full max-w-md text-slate-200">
        <h2 id="create-task-heading" className="text-lg font-bold mb-4">
          Nueva tarea
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="title">Título</label>
            <input
              id="title"
              name="title"
              type="text"
              value={draft.title}
              onChange={handleChange}
              className="rounded-lg bg-purple-400/10 px-3 py-2 text-sm"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              name="description"
              value={draft.description}
              onChange={handleChange}
              rows={3}
              className="rounded-lg bg-purple-400/10 px-3 py-2 text-sm"
            />
            {submitAttempted && isDescriptionEmpty && (
              <p className="text-red-400 text-xs" aria-live="polite">
                La descripción es obligatoria
              </p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="priority">Prioridad</label>
            <select
              id="priority"
              name="priority"
              value={draft.priority}
              onChange={handleChange}
              className="rounded-lg bg-purple-400/10 px-3 py-2 text-sm focus:bg-purple-900/80 focus:rounded-2xl  focus:outline-none"
            >
              <option value="">Sin prioridad</option>
              <option value="low">🟢 Baja</option>
              <option value="medium">🟡 Media</option>
              <option value="high">🔴 Alta</option>
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="assigneeToId">Responsable</label>
            <select
              id="assigneeToId"
              name="assigneeToId"
              value={draft.assigneeToId}
              onChange={handleChange}
              className="rounded-lg bg-purple-400/10 px-3 py-2 text-sm focus:bg-purple-900/80 focus:rounded-2xl  focus:outline-none"
            >
              <option value="">Sin asignar</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="deadline">Fecha límite</label>
            <input
              id="deadline"
              name="deadline"
              type="date"
              value={draft.deadline}
              onChange={handleChange}
              className="rounded-lg bg-purple-400/10 px-3 py-2 text-sm "
            />
          </div>

          <div className="flex justify-end gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full text-sm hover:text-purple-400"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-full text-sm font-bold bg-purple-900 text-white hover:bg-purple-950"
            >
              Crear tarea
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTaskForm;
