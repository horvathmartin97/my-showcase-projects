-- AlterTable
ALTER TABLE "public"."Car" ADD COLUMN     "engineDisplacement" INTEGER,
ADD COLUMN     "engineType" "public"."engineType",
ALTER COLUMN "horsePower" DROP NOT NULL;
