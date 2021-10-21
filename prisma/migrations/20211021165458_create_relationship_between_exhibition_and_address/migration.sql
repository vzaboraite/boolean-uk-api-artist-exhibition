/*
  Warnings:

  - Added the required column `addressId` to the `Exhibition` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exhibition" ADD COLUMN     "addressId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Exhibition" ADD CONSTRAINT "Exhibition_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
