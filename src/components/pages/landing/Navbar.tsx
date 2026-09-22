import Link from "next/link";

const navigation = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Tech stack", href: "#tech-stack" },
];

interface navbarProp{
itShow: boolean
}

export function Navbar({ itShow }: navbarProp) {
  return (
    <header className="sticky  top-0 z-50 border-b border-slate-700/80 bg-slate-900/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-white"
          aria-label="TaskFlow home"
        >
          Task<span className="text-purple-600">Flow</span>
        </Link>
        {itShow &&
        <>
        <nav
          className="hidden items-center gap-6 md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center justify-center gap-2">
          <Link
            href="/"
            className="rounded-xl bg-purple-600 px-2 py-2 text-xs font-semibold text-white shadow-lg transition hover:bg-purple-700 hover:shadow-xl"
          >
            Open TaskFlow
          </Link>
          <p className="text-[9px] text-center text-purple-600">
            No tienes cuenta?
          </p>
          <Link
            href="/singup"
            className="rounded-xl border border-purple-600  px-4 py-2 text-xs font-semibold text-center text-white shadow-lg transition hover:border-purple-700 hover:border-2 hover:shadow-xl"
          >
            Sing up
          </Link>
        </div>
        </>
        }
      </div>
    </header>
  );
}
