import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function createCommunity(
    id: string,
    name: string,
    username: string,
    avatar: string,
    bio: string,
    createdById: string
) {
    try {
        const newCommunity = await prisma.community.create({
            data: {
                id,
                name,
                username,
                avatar,
                bio,
                createdById,
            },
        });

        await prisma.communityMembership.create({
            data: {
                userId: createdById,
                communityId: id,
            },
        });

        return newCommunity;
    } catch (error) {
        console.error("Error creating community:", error);
        throw error;
    }
}


}