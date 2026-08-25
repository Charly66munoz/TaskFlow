export function Footer() {
  return (
    <footer className="border-t border-slate-700 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">
            Task<span className="text-purple-600">Flow</span>
          </p>
          <p className="mt-1">
            Built with Next.js, TypeScript, PostgreSQL and Prisma.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href="https://github.com/Charly66munoz"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/carlos-agustin-lopez8/"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
