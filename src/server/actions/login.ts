"use server";

import  { LoginFormSchema, type FormStateLogin } from "@/lib/definitions"
import { signIn } from "../auth";
import { error } from "console";
import { AuthError } from "next-auth";

export async function login(state: FormStateLogin, formData: FormData) {

  const email = formData.get("email")
  const password = formData.get("password")
  

  const validatedFields = LoginFormSchema.safeParse({
    email: email,
    password: password,
  });

  const emailValue = typeof email === 'string' ? email : ""

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,

      values: {
        email: emailValue
      },
    };
  }
  try{
    await signIn("credentials", {
      email: validatedFields.data.email,
      password: validatedFields.data.password,
      redirectTo: "/"
    })
  } catch (error) {
  if (error instanceof AuthError) {
    return {
      message: "Email or password is incorrect.",
      values: {
        email: emailValue,
      },
    };
  }

  throw error;
}
}
