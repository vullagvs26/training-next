import { NextRequest } from "next/server";
import { UserController} from "../../../data/controllers/UserController";
 
export async function GET(req: NextRequest){
    try{
        return await UserController.getAllUser()
    } catch (error) {
        return new Error()
    }  
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json()
        return await UserController.addUser(body.email, body.name ?? 'no-name', body.sectionId)
    } catch (error) {
        return new Error()
    }
}