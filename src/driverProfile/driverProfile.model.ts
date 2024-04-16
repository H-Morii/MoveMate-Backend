import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getDriver = async () => {
  const user = await prisma.user.findMany();
  return user
}

export const getSingleDriver = async (id:number) => {
  const user = await prisma.user.findUnique({
    where: {
      id
    }
  })
  return user
}

export const addDriver = async (data:any) => {
  const user = await prisma.user.create({
    data
  });
  return user
}

export const deleteDriver = async (id:number) => {
  const user = await prisma.user.delete({
    where:{id}
  })
  return user
}

export const patchDriver = async (id:number, data:any) => {
  const user = await prisma.user.update({
    where:{ id },
    data,
  })
  return user
}
