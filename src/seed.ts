import { PrismaClient, UserRole } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Create a generic user
    await prisma.user.create({
        data: {
            email: "alice@example.com",
            passwordHash: "hashedpasswordalice",
            firstName: "Alice",
            lastName: "Wonderland",
            phoneNumber: "1234563891",
            birthDate: new Date("1992-12-12T00:00:00.000Z"),
            country: "USA",
            postalCodePart1: "902",
            postalCodePart2: "010",
            city: "Los Angeles",
            ward: "Central LA",
            address: "101 Disney Lane",
            apartment: "20B",
            role: UserRole.USER
        }
    });

    // Create a driver with a profile
    await prisma.user.create({
        data: {
            email: "bob@example.com",
            passwordHash: "hashedpasswordbob",
            firstName: "Bob",
            lastName: "Builder",
            phoneNumber: "9876523210",
            birthDate: new Date("1988-08-08T00:00:00.000Z"),
            country: "USA",
            postalCodePart1: "902",
            postalCodePart2: "020",
            city: "Los Angeles",
            ward: "Central LA",
            address: "202 Construct St",
            apartment: "45C",
            role: UserRole.DRIVER,
            driverProfile: {
                create: {
                    vehicleType: "Van",
                    vehicleLicensePlate: "VAN1234",
                    insuranceDetails: "Insured"
                }
            }
        }
    });

    // Create another driver with a profile
    await prisma.user.create({
        data: {
            email: "charlie@example.com",
            passwordHash: "hashedpasswordcharlie",
            firstName: "Charlie",
            lastName: "Chocolate",
            phoneNumber: "1928371650",
            birthDate: new Date("1990-01-01T00:00:00.000Z"),
            country: "USA",
            postalCodePart1: "902",
            postalCodePart2: "030",
            city: "Los Angeles",
            ward: "Central LA",
            address: "58 Sweet St",
            apartment: "33D",
            role: UserRole.DRIVER,
            driverProfile: {
                create: {
                    vehicleType: "Truck",
                    vehicleLicensePlate: "TRK5678",
                    insuranceDetails: "Insured"
                }
            }
        }
    });
}

console.log("starting the seed")
main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
