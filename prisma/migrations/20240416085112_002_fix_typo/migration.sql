/*
  Warnings:

  - You are about to drop the column `vehicleLicnsePlate` on the `DriverProfile` table. All the data in the column will be lost.

*/
-- AlterTable
CREATE SEQUENCE driverprofile_id_seq;
ALTER TABLE "DriverProfile" DROP COLUMN "vehicleLicnsePlate",
ADD COLUMN     "vehicleLicensePlate" TEXT,
ALTER COLUMN "id" SET DEFAULT nextval('driverprofile_id_seq');
ALTER SEQUENCE driverprofile_id_seq OWNED BY "DriverProfile"."id";
