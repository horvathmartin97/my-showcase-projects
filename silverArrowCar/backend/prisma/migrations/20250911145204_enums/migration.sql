/*
  Warnings:

  - You are about to drop the column `kilometersDriven` on the `Car` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `Car` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to drop the `Garage` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `airConditioning` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bodyType` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `color` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `condition` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `doors` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `driveType` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fuelType` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mileage` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seats` to the `Car` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transmission` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "public"."TransmissionType" AS ENUM ('MANUAL', 'AUTOMATIC', 'SEMI_AUTOMATIC', 'CVT', 'DUAL_CLUTCH');

-- CreateEnum
CREATE TYPE "public"."FuelType" AS ENUM ('PETROL', 'DIESEL', 'ELECTRIC', 'HYBRID', 'CNG', 'LPG');

-- CreateEnum
CREATE TYPE "public"."BodyType" AS ENUM ('SEDAN', 'SUV', 'HATCHBACK', 'COUPE', 'CONVERTIBLE', 'WAGON', 'VAN', 'PICKUP', 'MINIVAN', 'ROADSTER', 'LIMOUSINE', 'OFF_ROAD', 'MICROCAR');

-- CreateEnum
CREATE TYPE "public"."DriveType" AS ENUM ('FWD', 'RWD', 'AWD', 'FOUR_WHEEL');

-- CreateEnum
CREATE TYPE "public"."Condition" AS ENUM ('NEW', 'USED', 'CERTIFIED_PRE_OWNED');

-- CreateEnum
CREATE TYPE "public"."AirConditioning" AS ENUM ('MANUAL', 'AUTOMATIC', 'DUAL_ZONE', 'MULTI_ZONE', 'NONE');

-- CreateEnum
CREATE TYPE "public"."engineType" AS ENUM ('INLINE', 'V_TYPE', 'BOXER', 'ROTARY', 'ELECTRIC', 'HYBRID');

-- DropForeignKey
ALTER TABLE "public"."Car" DROP CONSTRAINT "Car_createdById_fkey";

-- DropForeignKey
ALTER TABLE "public"."Garage" DROP CONSTRAINT "Garage_userId_fkey";

-- AlterTable
ALTER TABLE "public"."Car" DROP COLUMN "kilometersDriven",
ADD COLUMN     "airConditioning" "public"."AirConditioning" NOT NULL,
ADD COLUMN     "bodyType" "public"."BodyType" NOT NULL,
ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "condition" "public"."Condition" NOT NULL,
ADD COLUMN     "doors" INTEGER NOT NULL,
ADD COLUMN     "driveType" "public"."DriveType" NOT NULL,
ADD COLUMN     "fuelType" "public"."FuelType" NOT NULL,
ADD COLUMN     "mileage" INTEGER NOT NULL,
ADD COLUMN     "seats" INTEGER NOT NULL,
ADD COLUMN     "transmission" "public"."TransmissionType" NOT NULL,
ALTER COLUMN "price" SET DATA TYPE DECIMAL(65,30);

-- DropTable
DROP TABLE "public"."Garage";

-- CreateTable
CREATE TABLE "public"."SavedCar" (
    "userId" TEXT NOT NULL,
    "carId" TEXT NOT NULL,
    "savedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SavedCar_pkey" PRIMARY KEY ("userId","carId")
);

-- CreateIndex
CREATE INDEX "Car_carModel_idx" ON "public"."Car"("carModel");

-- CreateIndex
CREATE INDEX "Car_carBrand_idx" ON "public"."Car"("carBrand");

-- AddForeignKey
ALTER TABLE "public"."Car" ADD CONSTRAINT "Car_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SavedCar" ADD CONSTRAINT "SavedCar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SavedCar" ADD CONSTRAINT "SavedCar_carId_fkey" FOREIGN KEY ("carId") REFERENCES "public"."Car"("id") ON DELETE CASCADE ON UPDATE CASCADE;
