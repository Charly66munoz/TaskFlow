"use client";

import { signup } from "@/server/actions/singup"
import Link from "next/link";
import { useActionState } from "react";

export default function SignupForm() {
  const [state, action, pending] = useActionState(signup, undefined);
  //desestructuración el array

  //undifined es el estado inicial

  // Por eso inicialmente:

  // state === undefined
  // pending === false

  //luego

  // state   → resultado de signup()
  // action  → función que envío con el formulario
  // pending → ¿signup está ejecutándose?

  // El primer argumento es el estado anterior.
  // Como todavía no hubo ninguna ejecución, vale undefined.

  // El segundo argumento es formData.
  // FormData contiene los valores enviados por el formulario (el objeto que se envia),
  // usando el atributo "name" de cada input.

  // Después, dentro de signup(), usamos esos datos para validarlos.

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="flex flex-col py-14 items-center">
        <form
          action={action}
          className="w-full max-w-md space-y-6 rounded-2xl border border-slate-700 bg-slate-800 p-6 shadow-lg"
        >
          {/* Name */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-slate-300"
            >
              Name
            </label>

            <input
              id="name"
              name="name"
              placeholder="Name"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white
                 placeholder:text-slate-500
                 outline-none transition
                 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/30"
              defaultValue={state?.values?.name ?? ""}
            />

            {state?.errors?.name && (
              <p className="text-sm text-red-500">{state.errors.name}</p>
            )}
          </div>

          {/* Email */}
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

          {/* Password */}
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
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-slate-300"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder="Confirm password"
              className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white
                 placeholder:text-slate-500
                 outline-none transition
                 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/30"
            />
          </div>

          {/* Password errors */}
          {state?.errors?.password && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4">
              <p className="mb-2 text-sm font-medium text-red-500">
                Password must:
              </p>

              <ul className="space-y-1">
                {state.errors.password.map((error) => (
                  <li key={error} className="text-sm text-red-500">
                    - {error}
                  </li>
                ))}
                {state.errors.confirmPassword?.map((error) => (
                  <li key={error} className="text-sm text-red-500">
                    - {error}
                  </li>
                ))}
              </ul>
            </div>
          )}

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
            {pending ? "Creating account..." : "Sign Up"}
          </button>
          <Link
            href="/login"
            className="rounded-xl text-purple-600 px-2 py-2 text-xs font-semibold  transition hover:border-2 hover:border-purple-700  hover:shadow-xl"
          >
            ¿Ya tienes cuenta?
          </Link>
        </form>
      </div>
    </div>
  );
}
