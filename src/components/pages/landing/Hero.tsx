import Link from "next/link";
import { ArrowRightIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import { ProductPreview } from "./ProductPreview";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-24 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-purple-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-28">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
            Kanban + productivity intelligence
          </p>

          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Organize your work.
            <span className="block text-purple-600">
              Understand your productivity.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            TaskFlow helps you organize tasks, track their progress and turn
            day-to-day activity into useful productivity insights.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-purple-700 hover:shadow-xl"
            >
              Get started
              <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
            </Link>

            <a
              href="https://github.com/Charly66munoz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 font-semibold text-slate-300 shadow-lg transition hover:border-purple-600 hover:text-white hover:shadow-xl"
            >
              <CodeBracketIcon className="h-5 w-5" aria-hidden="true" />
              View on GitHub
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-sm">
            {["Next.js", "TypeScript", "PostgreSQL", "Prisma"].map((item) => (
              <span
                key={item}
                className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-1.5 text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <ProductPreview />
      </div>
    </section>
  );
}
