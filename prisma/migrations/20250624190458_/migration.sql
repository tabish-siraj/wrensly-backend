/*
  Warnings:

  - Added the required column `deletedAt` to the `Follow` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Follow" ADD COLUMN     "deletedAt" TIMESTAMP(3) NOT NULL;
