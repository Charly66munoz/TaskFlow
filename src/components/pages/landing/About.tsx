import {
  ChartBarIcon,
  ClipboardDocumentListIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { SectionTitle } from "./SectionTitle";

const concepts = [
  {
    title: "Organize",
    description:
      "Keep your work visible through a simple workflow with To Do, In Progress and Finished states.",
    icon: ClipboardDocumentListIcon,
  },
  {
    title: "Track",
    description:
      "TaskFlow records how tasks evolve, creating the history needed to understand your workflow.",
    icon: ClockIcon,
  },
  {
    title: "Understand",
    description:
      "Transform task activity into metrics that help you spot patterns and improve how you work.",
    icon: ChartBarIcon,
  },
];

export function About() {
  return (
    <section className="border-y border-slate-700 bg-slate-800/50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Why TaskFlow"
          title="More than a task board"
          description="TaskFlow combines simple task management with the data needed to understand how your work moves from idea to completion."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {concepts.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-lg transition hover:border-purple-600/50 hover:shadow-xl"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-purple-600/30 bg-purple-600/10">
                <Icon className="h-6 w-6 text-purple-600" aria-hidden="true" />
              </div>

              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-lg">
          <div className="grid gap-3 text-center text-sm font-semibold sm:grid-cols-9 sm:items-center">
            <span className="rounded-xl bg-slate-800 px-3 py-3 text-white">Tasks</span>
            <span className="text-slate-500">→</span>
            <span className="rounded-xl bg-slate-800 px-3 py-3 text-white">Workflow</span>
            <span className="text-slate-500">→</span>
            <span className="rounded-xl bg-slate-800 px-3 py-3 text-white">Task events</span>
            <span className="text-slate-500">→</span>
            <span className="rounded-xl bg-slate-800 px-3 py-3 text-white">Metrics</span>
            <span className="text-slate-500">→</span>
            <span className="rounded-xl border border-purple-600/40 bg-purple-600/10 px-3 py-3 text-purple-600">
              AI summary
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
