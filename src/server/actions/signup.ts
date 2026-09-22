"use server";

import  { SignupFormSchema, type FormState } from "@/server/lib/definitions"
import { creatUser } from "@/service/userService";
import { hashPassword } from "../security/hasher";
import { redirect } from "next/navigation";

export async function signup(state: FormState, formData: FormData) {
  //formData objeto recibido por formulario, luego lo obtenemos por medio de formData.get()

  // 2- safeParse() es útil porque no lanza una excepción cuando los datos son inválidos; devuelve un resultado que podés inspeccionar.

  const name = formData.get("name")
  const email = formData.get("email")
  const password = formData.get("password")
  

  const validatedFields = SignupFormSchema.safeParse({
    name: name,
    email: email,
    password: password,
    confirmPassword: formData.get('confirmPassword')
  });

  const nameValue = typeof name === 'string' ? name : ""
  const emailValue = typeof email === 'string' ? email : ""

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,

      values: {
        name: nameValue,
        email: emailValue
      },
    };
  }

  const passwordhashed = await hashPassword(validatedFields.data.password)

  await creatUser({
    name: validatedFields.data.name,
    email: validatedFields.data.email,
    passwordHash: passwordhashed,
    role: 'owner'
  })

  redirect("/landingPage");
}
