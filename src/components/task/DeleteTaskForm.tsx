
import { useState } from "react";
import type { Task } from "../../types/entity/Task";
import LoadingSpinner from "../ui/LoadingSpinner";
import { deleteTaskAction } from "../../server/actions/taskAction";

interface CreateTaskFormProp {
  task: Task;
  onClose: () => void;
  deleteTask: (id: string) => void;
}

const DeleteTaskForm = ({ task, onClose, deleteTask }: CreateTaskFormProp) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);


  const handleSubmit = async () => {

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await deleteTaskAction(task.id);
      deleteTask(task.id);
      onClose();
    } catch {
      setSubmitError("No se pudo eliminar la tarea. Intentá de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="delete-task-heading"
    >
      <div className="bg-slate-900 rounded-xl p-6 w-full max-w-md text-slate-200">
        <h2 id="delete-task-heading" className="text-lg font-bold mb-4">
          Desea borrar la tarea:
        </h2>
        <p id="delete-task-heading" className="text-sm font-bold mb-4">
          Descripcion: {task.description}
        </p>
        {submitError && (
          <p
            className="text-red-400 text-xs"
            role="alert"
            aria-live="assertive"
          >
            {submitError}
          </p>
        )}

        <div className="flex justify-end gap-3 mt-2">
          <button
            type="button"
            onClick={()=>onClose()}
            disabled={isSubmitting}
            className="px-4 py-2 rounded-full text-sm hover:text-purple-400 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Cancelar
          </button>
          <button
            type="submit"
            onClick={() => handleSubmit()}
            disabled={isSubmitting}
            className="px-4 py-2 rounded-full text-sm font-bold bg-purple-900 text-white hover:bg-purple-950 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSubmitting && <LoadingSpinner size="sm" label="Creando tarea" />}
            {isSubmitting ? "Eliminando tarea..." : "Eliminar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskForm;
