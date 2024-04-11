-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT,
    "bio" TEXT,
    "admitted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "communityId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "parentId" INTEGER,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Community" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "avatar" TEXT,
    "bio" TEXT,
    "createdById" INTEGER,

    CONSTRAINT "Community_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CommunityMembership" (
    "userId" INTEGER NOT NULL,
    "communityId" INTEGER NOT NULL,

    CONSTRAINT "CommunityMembership_pkey" PRIMARY KEY ("userId","communityId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Community_username_key" ON "Community"("username");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "Post"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Community" ADD CONSTRAINT "Community_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityMembership" ADD CONSTRAINT "CommunityMembership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CommunityMembership" ADD CONSTRAINT "CommunityMembership_communityId_fkey" FOREIGN KEY ("communityId") REFERENCES "Community"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
