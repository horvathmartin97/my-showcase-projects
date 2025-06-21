-- CreateTable
CREATE TABLE "WeeklyDayOff" (
    "id" TEXT NOT NULL,
    "providerId" TEXT NOT NULL,
    "dayOfWeek" INTEGER NOT NULL,
    "reason" TEXT,

    CONSTRAINT "WeeklyDayOff_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "WeeklyDayOff" ADD CONSTRAINT "WeeklyDayOff_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "Provider"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
