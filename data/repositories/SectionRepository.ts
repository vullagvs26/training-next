import { PrismaClient, Section } from '../../prisma/generated/client';

const prisma = new PrismaClient();

export class SectionRepository {
    
    async getAllUser(): Promise<Section[]> {
        return await prisma.section.findMany()
    }
}