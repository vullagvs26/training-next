import { PrismaClient } from './generated/client/index.js'

const prisma = new PrismaClient() 

async function main() {
    const section = await prisma.section.createMany({
        data: [
            {
                section_name: "Management IS", section_code: 'MIS',
            },
            {
                section_name: "Admin", section_code: 'AD',
            },
            {
                section_name: "General A", section_code: 'GA',
            }
            
        ]
    })
    const user = await prisma.user.upsert({
        where: { email: 'vincentvullag@gmail.com'},
        update: {},
        create: {
            email: 'vincentvullag@gmail.com',
            name: 'vincent vullag',
            sectionId: 1
        }
    })
}

main()
    .then(() => prisma.$disconnect()
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
    })
)