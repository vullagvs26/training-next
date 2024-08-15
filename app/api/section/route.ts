import { NextRequest } from "next/server";
import { SectionController} from "../../../data/controllers/SectionController";
 
export async function GET(req: NextRequest){
    try{
        return await SectionController.getAllSection()
    } catch (error) {
        return new Error()
    }  
}
