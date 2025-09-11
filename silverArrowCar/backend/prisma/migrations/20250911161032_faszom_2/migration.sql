/*
  Warnings:

  - Added the required column `horsePower` to the `Car` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Car" ADD COLUMN     "horsePower" INTEGER NOT NULL;
