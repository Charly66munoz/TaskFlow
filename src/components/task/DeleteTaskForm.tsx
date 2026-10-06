import { useState } from "react";
import type { Task } from "@/types/entity/Task";
import LoadingSpinner from "../ui/LoadingSpinner";
import { deleteTaskAction } from "@/server/actions/taskAction";
import { useFeedback } from "@/components/providers/FeedbackProvider";

interface DeleteTaskFormProp {
  task: Task;
  onClose: () => void;
  deleteTask: (id: string) => void;
}

const DeleteTaskForm = ({
  task,
  onClose,
  deleteTask,
}: DeleteTaskFormProp) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {showError, showSuccess} = useFeedback()

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const result = await deleteTaskAction(task.id);

      if (!result.success) {
        showError(result.error ?? "No se pudo eliminar la tarea.");
        onClose();
        return;
      }

      showSuccess("Tarea eliminada correctamente.");
      deleteTask(task.id);
      onClose();
    } catch {
      showError(
        "Ocurrió un error inesperado al eliminar la tarea. Intentá de nuevo.",
      );
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
          ¿Desea borrar la tarea?
        </h2>

        <p className="text-sm font-bold mb-4">
          Descripción: {task.description}
        </p>

        <div className="flex justify-end gap-3 mt-2">
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            className="px-4 py-2 rounded-full text-sm hover:text-purple-400 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Cancelar
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-4 py-2 rounded-full text-sm font-bold bg-purple-900 text-white hover:bg-purple-950 disabled:opacity-60 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {isSubmitting && (
              <LoadingSpinner size="sm" label="Eliminando tarea" />
            )}

            {isSubmitting ? "Eliminando tarea..." : "Eliminar"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTaskForm;
