
//Esse código está configurando e exportando uma instância do 
//cliente Prisma para interagir com um banco de dados. 
//O Prisma é um ORM que simplifica o acesso e manipulação de dados.

import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: ["query"],
    });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma;