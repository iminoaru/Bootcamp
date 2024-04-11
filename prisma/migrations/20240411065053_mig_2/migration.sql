/*
  Warnings:

  - The primary key for the `Community` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `CommunityMembership` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Community" DROP CONSTRAINT "Community_createdById_fkey";

-- DropForeignKey
ALTER TABLE "CommunityMembership" DROP CONSTRAINT "CommunityMembership_communityId_fkey";

-- DropForeignKey
ALTER TABLE "CommunityMembership" DROP CONSTRAINT "CommunityMembership_userId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_communityId_fkey";

-- AlterTable
ALTER TABLE "Community" DROP CONSTRAINT "Community_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "createdById" SET DATA TYPE TEXT,
ADD CONSTRAINT "Community_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Community_id_seq";

-- AlterTable
ALTER TABLE "CommunityMembership" DROP CONSTRAINT "CommunityMembership_pkey",
ALTER COLUMN "userId" SET DATA TYPE TEXT,
ALTER COLUMN "communityId" SET DATA TYPE TEXT,
ADD CONSTRAINT "CommunityMembership_pkey" PRIMARY KEY ("userId", "communityId");

-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "authorId" SET DATA TYPE TEXT,
ALTER COLUMN "communityId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Community" ADD CONSTRAINT "Community_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityMembership" ADD CONSTRAINT "CommunityMembership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityMembership" ADD CONSTRAINT "CommunityMembership_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
