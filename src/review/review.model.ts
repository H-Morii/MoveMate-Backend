import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllReview = async () => {
  const review = await prisma.review.findMany();
  return review
}

export const getSingleReview = async (id:number) => {
  const review = await prisma.review.findUnique({
    where: {
      id
    }
  })
  return review
}

export const addReview = async (data:any) => {
  const review = await prisma.review.create({
    data
  });
  return review
}

export const deleteReview = async (id:number) => {
  const review = await prisma.review.delete({
    where:{ id }
  })
  return review
}

export const patchReview = async (id:number, data:any) => {
  const review = await prisma.review.update({
    where:{ id },
    data,
  })
  return review
}
