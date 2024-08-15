import { PrismaClient, User } from '../../prisma/generated/client';
import { updateUserType, UserWithSection } from "../../lib/types/User";

const prisma = new PrismaClient();

export class UserRepository {
    
    async getAllUser(): Promise<UserWithSection[]> {
        return await prisma.user.findMany({
            include: {
                Section: true
            }
        })
    }

    async addUser({
        email,
        name,
        sectionId
    }:{
        email: string,
        name: string,
        sectionId: number
    }): Promise<User> {
        return await prisma.user.create({
            data: {
                email,
                name,
                sectionId
            }
        })
    }

    async showUser(id: number): Promise<User | null> {
        return await prisma.user.findUnique({
            where: { id }
        })
    }

    async updateUser(
        id: number,
        {
            email,
            name
        }: updateUserType): Promise<User | null> {
        return await prisma.user.update({
            where: { id },
            data: {
                email,
                name
            }
        })
    }

    async deleteUser(
        id: number
    ): Promise<User | null> {
        return await prisma.user.delete({
            where: { id }
        })
    }

}
