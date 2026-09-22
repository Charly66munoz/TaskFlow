import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { verifyPassword } from "./security/hasher"
import { getUserbyEmail } from "@/service/userService"
import type { User } from "@/types/entity/User";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
        Credentials({
        credentials: {
            email: {
            type: "email",
            label: "Email",
            placeholder: "johndoe@gmail.com",
            },
            password: {
            type: "password",
            label: "Password",
            placeholder: "*****",
            },
        },
        authorize: async (credentials) => {
        let user = null
        
        user = await getUserbyEmail(String(credentials.email))
 
        if (!user || !user.password) return null

        const isValidPassword = await verifyPassword(
            String(credentials.password),
            user.password
        )

        if (!isValidPassword){
            return null
        }

        const userConfirm: User = 
        {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
        }
 
        return userConfirm
      },
        })
  ],
})