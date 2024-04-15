import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUser = async () => {
  const user = await prisma.user.findMany();
  return user
}