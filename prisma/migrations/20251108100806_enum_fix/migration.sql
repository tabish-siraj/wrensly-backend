/*
  Warnings:

  - The values [REPLY] on the enum `PostType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PostType_new" AS ENUM ('POST', 'COMMENT', 'QUOTE', 'REPOST');
ALTER TABLE "public"."Post" ALTER COLUMN "type" DROP DEFAULT;
ALTER TABLE "Post" ALTER COLUMN "type" TYPE "PostType_new" USING ("type"::text::"PostType_new");
ALTER TYPE "PostType" RENAME TO "PostType_old";
ALTER TYPE "PostType_new" RENAME TO "PostType";
DROP TYPE "public"."PostType_old";
ALTER TABLE "Post" ALTER COLUMN "type" SET DEFAULT 'POST';
COMMIT;
