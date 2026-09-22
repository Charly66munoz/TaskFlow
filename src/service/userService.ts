import { prisma } from "@/db/client"
import type { User } from "@/types/entity/User"
import type { Prisma } from "@/generated/prisma/client";


// C:\Users\agust\Desktop\Proyectos\Claude\GranPrixLaboral\proyectos\taskflow\frontend\src\service\userService.ts

type CreateUserData = Pick<
  Prisma.UserCreateInput,
  "name" | "email" | "role" | "passwordHash"
>;

export const getUsers = async () => {
    const userDb = await prisma.user.findMany()
        
    const users = userDb.map((u)=>{
        const mappedUser: User = {
            id: u.userId,
            name: u.name,
            email: u.email,
            role: u.role
        }
        return mappedUser
    })

    return users
}

export const creatUser = async (user : CreateUserData) => {
    const userDb = await prisma.user.create({
        data: {
            name: user.name,
            email: user.email,
            ...(user.role && {
                role: user.role,    
            }),
            ...(user.passwordHash && {
                passwordHash: user.passwordHash
            })
        }
    })   
       
    return userDb
}

