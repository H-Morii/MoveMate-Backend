import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUser = async () => {
  const user = await prisma.user.findMany();
  return user
}

export const getSingleUser = async (id:number) => {
  const user = await prisma.user.findUnique({
    where: {
      id
    }
  })
  return user
}

export const addUser = async (data:any) => {
  const user = await prisma.user.create({
    data
  });
  return user
}

export const deleteUser = async (id:number) => {
  const user = await prisma.user.delete({
    where:{id}
  })
  return user
}

export const patchUser = async (id:number, data:any) => {
  const user = await prisma.user.update({
    where:{ id },
    data,
  })
  return user
}


// interface LoginData {
//   email: string;
// }

export const loginUser =async (email: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    }
  });
  if(!user) {
    throw new Error("User not found")
  }
  return user
}

