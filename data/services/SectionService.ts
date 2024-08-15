import { use } from "react";
import { UserWithAge, updateUserType, UserWithSection, UserWithSectionService } from "../../lib/types/User";
import { Section, PrismaClient } from "../../prisma/generated/client";
import { SectionRepository } from "../repositories/SectionRepository";

const sectionRepository = new SectionRepository()

const prisma = new PrismaClient();
export class SectionService {
    
    async getAllSection(): Promise<Section[]> {
        return await prisma.section.findMany()
    }
}