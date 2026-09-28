"use server";

import { auth, signOut } from "../../auth";
import { AuthError } from "next-auth";

export async function logout() {

  const session = await auth()

  console.log(session)

  try{
    await signOut({redirectTo: "/login"})
  } catch (error) {
  if (error instanceof AuthError) {
    return {
      message: "No hay usuario logeado",
    };
  }

  throw error;
}
}
