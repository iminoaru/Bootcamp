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


export async function fetchCommunityDetails(id: string) {
    try {
        const communityDetails = await prisma.community.findUnique({
            where: { id },
            include: {
                createdBy: true,
                communityMemberships: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                                username: true,
                                avatar: true,
                            },
                        },
                    },
                },
            },
        });

        return communityDetails;
    } catch (error) {
        console.error("Error fetching community details:", error);
        throw error;
    }
}



export async function fetchCommunityPosts(id: string) {
    try {
        const communityPosts = await prisma.post.findMany({
            where: { communityId: id },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        avatar: true,
                    },
                },
                children: {
                    include: {
                        author: {
                            select: {
                                id: true,
                                name: true,
                                avatar: true,
                            },
                        },
                    },
                },
            },
        });

        return communityPosts;
    } catch (error) {
        console.error("Error fetching community posts:", error);
        throw error;
    }
}



export async function fetchCommunities(
    searchString: string,
    pageNumber: number,
    pageSize: number,
    sortBy: Prisma.SortOrder
) {
    try {
        const skipAmount = (pageNumber - 1) * pageSize;

        const communities = await prisma.community.findMany({
            where: {
                OR: [
                    { username: { contains: searchString } },
                    { name: { contains: searchString } },
                ],
            },
            orderBy: { id: sortBy },
            skip: skipAmount,
            take: pageSize,
            include: { communityMemberships: true },
        });

        const totalCommunitiesCount = await prisma.community.count({
            where: {
                OR: [
                    { username: { contains: searchString } },
                    { name: { contains: searchString } },
                ],
            },
        });

        const isNext = totalCommunitiesCount > skipAmount + communities.length;

        return { communities, isNext };
    } catch (error) {
        console.error("Error fetching communities:", error);
        throw error;
    }
}



export async function addMemberToCommunity(
    communityId: string,
    memberId: string
) {
    try {
        await prisma.communityMembership.create({
            data: {
                userId: memberId,
                communityId: communityId,
            },
        });

        return await prisma.community.findUnique({ where: { id: communityId } });
    } catch (error) {
        console.error("Error adding member to community:", error);
        throw error;
    }
}



export async function removeUserFromCommunity(
    userId: string,
    communityId: string
) {
    try {
        await prisma.communityMembership.delete({
            where: { userId_communityId: { userId, communityId } },
        });

        return { success: true };
    } catch (error) {
        console.error("Error removing user from community:", error);
        throw error;
    }
}



export async function updateCommunityInfo(
    communityId: string,
    name: string,
    username: string,
    avatar: string
) {
    try {
        const updatedCommunity = await prisma.community.update({
            where: { id: communityId },
            data: { name, username, avatar },
        });

        return updatedCommunity;
    } catch (error) {
        console.error("Error updating community information:", error);
        throw error;
    }
}

export async function deleteCommunity(communityId: string) {
    try {
        const deletedCommunity = await prisma.community.delete({
            where: { id: communityId },
        });

        await prisma.post.deleteMany({ where: { communityId } });

        await prisma.communityMembership.deleteMany({
            where: { communityId },
        });

        return deletedCommunity;
    } catch (error) {
        console.error("Error deleting community: ", error);
        throw error;
    }

}