import { SectionTitle } from "./SectionTitle";

const steps = [
  {
    number: "01",
    title: "Create your tasks",
    description: "Capture the work you want to complete.",
  },
  {
    number: "02",
    title: "Move them through the workflow",
    description: "Update status as the work advances.",
  },
  {
    number: "03",
    title: "TaskFlow records their evolution",
    description: "Relevant status changes become part of the task history.",
  },
  {
    number: "04",
    title: "Analyze your productivity",
    description: "Use metrics and summaries to understand your workflow.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="How it works"
          title="A simple workflow with useful data behind it"
          description="The product stays easy to use while the underlying task history provides the information needed for meaningful metrics."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-lg"
            >
              <span className="text-sm font-bold text-purple-600">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-300">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
