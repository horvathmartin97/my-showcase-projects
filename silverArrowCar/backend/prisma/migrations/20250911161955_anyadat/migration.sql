/*
  Warnings:

  - Made the column `engineDisplacement` on table `Car` required. This step will fail if there are existing NULL values in that column.
  - Made the column `engineType` on table `Car` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."Car" ALTER COLUMN "engineDisplacement" SET NOT NULL,
ALTER COLUMN "engineType" SET NOT NULL;
