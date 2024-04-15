import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const user1 = await prisma.user.create({
        data: {
            email: "johndoe@example.com",
            passwordHash: "hashedpassword",  // You should hash the password
            firstName: "John",
            lastName: "Doe",
            phoneNumber: "1234567890",
            birthDate: new Date("1990-01-01T00:00:00.000Z"),
            country: "Japan",
            postalCodePart1: "121",
            postalCodePart2: "0823",
            city: "Tokyo",
            ward: "Adachi",
            address: "1234 art residence",
            apartment: "1A",
            role: "USER",
        },
    });

    const user2 = await prisma.user.create({
        data: {
            email: "janedoe@example.com",
            passwordHash: "hashedpassword",  // You should hash the password
            firstName: "Jane",
            lastName: "Doe",
            phoneNumber: "0987654321",
            birthDate: new Date("1992-02-02T00:00:00.000Z"),
            country: "Japan",
            postalCodePart1: "200",
            postalCodePart2: "202",
            city: "Tokyo",
            ward: "Roppongi",
            address: "5678 Park Ave",
            apartment: "2B",
            driverLicenseNumber: "1231215122",
            company: "MoveMate",
            role: "DRIVER",
        },
    });

    const review1 = await prisma.review.create({
        data: {
            content: "Great service, highly recommend!",
            rating: 5,
            authorId: user1.id,
            targetId: user2.id,
        },
    });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
