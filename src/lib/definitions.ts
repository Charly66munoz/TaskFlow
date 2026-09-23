import * as z from 'zod'
//Libreria para validacion de datos
 
export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { error: 'Name must be at least 2 characters long.' })
    .trim(),
  email: z.email({ error: 'Please enter a valid email.' }).trim(),
  password: z
    .string()
    .min(8, { error: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { error: 'Contain at least one letter.' })
    .regex(/[0-9]/, { error: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      error: 'Contain at least one special character.',
    })
    .trim(),
  confirmPassword: z.string()
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"], // Define qué campo mostrará el error en el formulario
});

export type FormState =
  {
      errors?: {
        name?: string[]
        email?: string[]
        password?: string[]
        confirmPassword?: string[];
      };
      values?: {
        name?: string;
        email?: string;
      };
      message?: string
    }
  | undefined

export const LoginFormSchema = z.object({
  email: z.string().email({ error: 'Please enter a valid email.' }).trim(),
  password: z.string().min(1,{ error: "Password is required." }),
})

export type FormStateLogin =
  {
      errors?: {
        email?: string[]
        password?: string[]
      };
      values?: {
        email?: string;
      };
      message?: string
    }
  | undefined