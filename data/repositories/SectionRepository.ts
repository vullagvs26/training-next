import { PrismaClient, Section } from '../../prisma/generated/client';

const prisma = new PrismaClient();

export class SectionRepository {
    
    async getAllSection(): Promise<Section[]> {
        return await prisma.section.findMany()
    }

    
    async addSection({
        section_name,
        section_code
    }:{
        section_name: string,
        section_code: string,

    }): Promise<Section> {
        return await prisma.section.create({
            data: {
                section_name,
                section_code,
            }
        })
    }
}