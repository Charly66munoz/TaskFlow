import { SectionTitle } from "./SectionTitle";

const technologies = [
  {
    name: "Next.js",
    description: "App Router and full-stack application structure",
  },
  {
    name: "React",
    description: "Composable UI built around reusable components",
  },
  {
    name: "TypeScript",
    description: "Type-safe domain models and application code",
  },
  {
    name: "Tailwind CSS",
    description: "Consistent responsive design system",
  },
  {
    name: "PostgreSQL",
    description: "Relational persistence for application data",
  },
  {
    name: "Prisma",
    description: "Typed database access and schema management",
  },
];

export function TechStack() {
  return (
    <section
      id="tech-stack"
      className="border-y border-slate-700 bg-slate-800/50 px-6 py-20"
    >
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Tech stack"
          title="Built with a maintainable full-stack architecture"
          description="The stack prioritizes type safety, clear domain modeling and technologies that are widely used in modern web development."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {technologies.map((technology) => (
            <article
              key={technology.name}
              className="rounded-2xl border border-slate-700 bg-slate-800 p-5 shadow-lg transition hover:border-purple-600/50 hover:shadow-xl"
            >
              <h3 className="font-semibold text-white">{technology.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {technology.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-slate-500">
          Built with a focus on clear responsibilities, explainable technical
          decisions and a codebase that can grow without unnecessary complexity.
        </p>
      </div>
    </section>
  );
}
