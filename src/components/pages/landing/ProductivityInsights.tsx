import {
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { SectionTitle } from "./SectionTitle";

const metrics = [
  {
    label: "Completed tasks",
    value: "24",
    helper: "This month",
    icon: CheckCircleIcon,
    iconClass: "text-green-500",
  },
  {
    label: "Avg. completion",
    value: "2.4d",
    helper: "In Progress → Finished",
    icon: ClockIcon,
    iconClass: "text-blue-500",
  },
  {
    label: "Stalled tasks",
    value: "3",
    helper: "Need attention",
    icon: ExclamationTriangleIcon,
    iconClass: "text-yellow-500",
  },
];

export function ProductivityInsights() {
  return (
    <section className="border-y border-slate-700 bg-slate-800/50 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Productivity intelligence"
          title="Turn activity into useful insights"
          description="TaskFlow uses the history of your tasks to help you understand what is being completed, what is taking too long and where work is getting stuck."
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {metrics.map(
              ({ label, value, helper, icon: Icon, iconClass }) => (
                <article
                  key={label}
                  className="rounded-2xl border border-slate-700 bg-slate-800 p-5 shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-300">{label}</p>
                      <p className="mt-2 text-3xl font-bold text-white">{value}</p>
                      <p className="mt-1 text-xs text-slate-500">{helper}</p>
                    </div>
                    <Icon className={`h-6 w-6 ${iconClass}`} aria-hidden="true" />
                  </div>
                </article>
              )
            )}
          </div>

          <article className="rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-purple-600/30 bg-purple-600/10">
                <SparklesIcon
                  className="h-5 w-5 text-purple-600"
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="font-semibold text-white">AI productivity summary</p>
                <p className="text-xs text-slate-500">Based on your task activity</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-900 p-5">
              <p className="leading-8 text-slate-300">
                You completed more tasks this week while keeping your average
                completion time stable. Three tasks have remained in progress
                longer than usual, so reviewing their blockers could improve
                your workflow.
              </p>
            </div>

            <p className="mt-4 text-sm text-slate-500">
              The summary explains existing metrics. It does not replace the
              underlying task data.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
