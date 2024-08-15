import { NextResponse } from "next/server";
import { UserService } from "../services/UserService";
import { updateUserType } from "../../lib/types/User";

const userService = new UserService()
 
export class UserController {
    static async getAllUser() {
        try {
            const result = await userService.getAllUser()
            return NextResponse.json(result)
        } catch (error) {
            return new Error("Failed to fetch users.")
        }
    }
 
    static async getAllUserWithAge() {
        try {
            const result = await userService.getAllUserWithAge()
            return NextResponse.json(result)
        } catch (error) {
            return new Error("Failed to fetch users.")
        }
    }

    static async addUser (email: string, name: string, sectionId: number) {
        try{
            if (!email){
                throw new Error ('Missing required ')
            }
            const result = await userService.addUser(email , name, sectionId)
            return NextResponse.json(result)
        } catch (error) {
            return new Error ("Failed to add user")
        }
    }

    static async showUser(id: number) {
        try {
            if(!id){
                throw new Error('No id found')
            }
            const result = await userService.showUser(id)
            return NextResponse.json(result)
        } catch (error) {
            return new Error('Failed to fetch user.')
        }
    }

    static async updateUser(
        id: number,
     {
        email,
        name,
        sectionId       
    }: updateUserType) {
        try {
            const result = await userService.updateUser(id, {email, name, sectionId})
            return NextResponse.json(result)
        } catch (error) {
            throw new Error("Failed to update");
            
        }
    }

    static async deleteUser(id: number) {
        try {
            if (!id) {
                throw new Error('No id found')
            }
            const result = await userService.deleteUser(id)
            return NextResponse.json(result)
        } catch (error) {
            throw new Error('Failed to delete user')
        }
    }
}