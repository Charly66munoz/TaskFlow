import { prisma } from "../db/client"
import type { User } from "../types/entity/User"

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

