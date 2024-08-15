import { use } from "react";
import { UserWithAge, updateUserType, UserWithSection, UserWithSectionService } from "../../lib/types/User";
import { User } from "../../prisma/generated/client";
import { UserRepository } from "../repositories/UserRepository";
 
const userRepository = new UserRepository()
 
export class UserService {
 
      async getAllUser(): Promise<UserWithSectionService[]> {
        const result = await userRepository.getAllUser()
 
        const datastorage = result.map(user => ({
            name: user.name,
            email: user.email,
            section_name: user.Section.section_name,
            section_code: user.Section.section_code
        }))
 
        return datastorage
    }
   
    async getAllUserWithAge(): Promise<UserWithAge[]> {
        const result = await userRepository.getAllUser()
        
        const datastorage = result.map(user => ({
            ...user,
            age: 23 
        }))
 
        return datastorage
    }
    async addUser(
        email: string,
        name: string,
        sectionId: number
    ): Promise<User> {
        return await userRepository.addUser({ email, name, sectionId })
    }

    async showUser(
        id:number
    ): Promise<User | null> {
        return await userRepository.showUser(id)
    }

    async updateUser(
        id: number,
        {
            email,
            name,
            sectionId
        }: updateUserType
    ): Promise<User | null> {
        return await userRepository.updateUser(id, { email, name, sectionId })
    }

    async deleteUser(
        id: number
    ): Promise<User | null> {
        return await userRepository.deleteUser(id)
    }

}