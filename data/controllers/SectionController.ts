import { NextResponse } from "next/server";
import { SectionService } from "../services/SectionService";

const sectionService = new SectionService()

export class SectionController {
    static async getAllSection() {
        try {
            const result = await sectionService.getAllSection()
            return NextResponse.json(result)
        } catch (error) {
            return new Error("Failed to fetch users.")
        }
    }
}