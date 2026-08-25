import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export function CtaSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-700 bg-slate-800 p-8 text-center shadow-lg sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-600">
          Start your workflow
        </p>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to organize your work?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          Use TaskFlow to keep your tasks visible and turn your activity into
          meaningful productivity insights.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-purple-700 hover:shadow-xl"
        >
          Open TaskFlow
          <ArrowRightIcon className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
