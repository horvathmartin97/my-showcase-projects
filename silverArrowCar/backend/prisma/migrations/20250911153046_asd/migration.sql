/*
  Warnings:

  - You are about to drop the column `milageValue` on the `Car` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."Car" DROP COLUMN "milageValue",
ADD COLUMN     "mileageValue" TEXT NOT NULL DEFAULT 'km';
