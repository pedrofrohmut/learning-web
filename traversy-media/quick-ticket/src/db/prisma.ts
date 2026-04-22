import "dotenv/config"
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "../../generated/prisma/client"

let prismaConnection: PrismaClient | null = null

const getInstance = () => {
    if (prismaConnection == null) {
        const connectionString = `${process.env.DATABASE_URL}`
        const adapter = new PrismaPg({ connectionString })
        prismaConnection = new PrismaClient({ adapter })
    }
    return prismaConnection
}

export const prisma: PrismaClient = getInstance()
