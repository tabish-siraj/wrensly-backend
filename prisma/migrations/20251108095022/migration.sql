/*
  Warnings:

  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CommentAttachment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Repost` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "PostType" AS ENUM ('POST', 'REPLY', 'QUOTE', 'REPOST');

-- DropForeignKey
ALTER TABLE "public"."Comment" DROP CONSTRAINT "Comment_parentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Comment" DROP CONSTRAINT "Comment_postId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "public"."CommentAttachment" DROP CONSTRAINT "CommentAttachment_attachmentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."CommentAttachment" DROP CONSTRAINT "CommentAttachment_commentId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Repost" DROP CONSTRAINT "Repost_postId_fkey";

-- DropForeignKey
ALTER TABLE "public"."Repost" DROP CONSTRAINT "Repost_userId_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "rootId" TEXT,
ADD COLUMN     "type" "PostType" NOT NULL DEFAULT 'POST';

-- DropTable
DROP TABLE "public"."Comment";

-- DropTable
DROP TABLE "public"."CommentAttachment";

-- DropTable
DROP TABLE "public"."Repost";

-- CreateIndex
CREATE INDEX "Post_parentId_idx" ON "Post"("parentId");

-- CreateIndex
CREATE INDEX "Post_rootId_idx" ON "Post"("rootId");
