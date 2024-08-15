import { NextResponse } from "next/server";
import { SectionService } from "../services/SectionService";

const sectionService = new SectionService()

export class SectionController {
    static async getAllSection() {
        try {
            const result = await sectionService.getAllSection()
            return NextResponse.json(result)
        } catch (error) {
            return new Error("Failed to fetch section.")
        }
    }

    static async addSection (section_code: string, section_name: string) {
        try{
            if (!section_code){
                throw new Error ('Missing required ')
            }
            const result = await sectionService.addSection(section_name , section_code)
            return NextResponse.json(result)
        } catch (error) {
            return new Error ("Failed to add Section")
        }
    }
}