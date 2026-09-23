"use client";

import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { login } from "@/server/actions/login";
import Link from "next/link";
import { useActionState } from "react";

// VERIFICAR SI SESSION ACTIVA, SI LO ESTA PAGINA NO DEBERIA APARECER

export default function LogIn() {
  const [state, action, pending] = useActionState(login, undefined);
  
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="flex flex-col py-14 items-center">
        <form
          action={action}
          className="w-full max-w-md space-y-6 rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-lg"
        >
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              defaultValue={state?.values?.email ?? ""}
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white
                 placeholder:text-slate-500
                 outline-none transition
                 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/30"
            />

            {state?.errors?.email && (
              <p className="text-sm text-red-500">{state.errors.email}</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-300"
            >
              Password
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white
                 placeholder:text-slate-500
                 outline-none transition
                 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/30"
            />
            {state?.errors?.password && (
              <p className="text-sm text-red-500">{state.errors.password}</p>
            )}
          </div>
          {state?.message && <p className="text-sm text-red-500">{state.message}</p>}

          {/* Submit */}
          <button
            disabled={pending}
            type="submit"
            className="w-full rounded-xl bg-purple-600 px-4 py-3 font-medium text-white
               transition
               hover:bg-purple-700
               focus:outline-none focus:ring-2 focus:ring-purple-600/50
               disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-500"
          >
            {pending ? <LoadingSpinner /> : "Login"}
          </button>
          <Link
            href="/signup"
            className="rounded-xl text-purple-600 px-2 py-2 text-xs font-semibold  transition hover:border-2 hover:border-purple-700  hover:shadow-xl"
          >
            ¿Aun no tienes cuenta?
          </Link>
        </form>
      </div>
    </div>
  );
}
