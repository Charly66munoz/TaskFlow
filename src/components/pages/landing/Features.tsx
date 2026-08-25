import {
  ArrowPathIcon,
  BoltIcon,
  ChartBarSquareIcon,
  ClipboardDocumentCheckIcon,
  ClockIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { SectionTitle } from "./SectionTitle";

const features = [
  {
    title: "Task management",
    description: "Create, update and organize the work that matters.",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "Kanban workflow",
    description: "Move tasks through clear stages without adding unnecessary complexity.",
    icon: ArrowPathIcon,
  },
  {
    title: "Task history",
    description: "Keep a record of important changes throughout each task lifecycle.",
    icon: ClockIcon,
  },
  {
    title: "Productivity metrics",
    description: "Measure completed work and understand how long tasks take to finish.",
    icon: ChartBarSquareIcon,
  },
  {
    title: "Stalled tasks",
    description: "Detect work that has remained inactive for too long.",
    icon: BoltIcon,
  },
  {
    title: "AI insights",
    description: "Turn activity data into a concise summary of your productivity patterns.",
    icon: SparklesIcon,
  },
];

export function Features() {
  return (
    <section id="features" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Features"
          title="Everything you need to move work forward"
          description="A focused set of features built around the task lifecycle, without turning the product into an overloaded project-management suite."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-lg transition hover:border-purple-600/50 hover:shadow-xl"
            >
              <Icon
                className="h-7 w-7 text-purple-600 transition-transform group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
              <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
