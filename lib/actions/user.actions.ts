'use server'

import {Prisma, PrismaClient} from '@prisma/client'
import {revalidatePath} from "next/cache";

const prisma = new PrismaClient()

type params = {
    id: string
    username: string
    name: string
    bio: string
    avatar: string
    path: string
}

export const updateUser = async (
    {
        id,
        username,
        name,
        bio,
        avatar,
        path
    }: params ): Promise<void> => {

   try {
        await prisma.user.upsert(
            {
                where: {id},
                update: {
                    username,
                    name,
                    bio,
                    avatar,
                    admitted: true
                },
                create: {
                    id,
                    username,
                    name,
                    bio,
                    avatar,
                    admitted: true
                }

            }
        )
        if (path === '/profile/edit') {
            revalidatePath(path)
        }
    }
    catch (err) {
       console.log('failed updateUser ' + err)
    }
}

export const fetchUser = async (id : string) => {
    try {
        return await prisma.user.findUnique({
            where: {id}
        })
    }
    catch (err) {
        console.log('failed fetchUser ' + err)
    }
}


export async function fetchUserPosts(userId: string) {

    try {

        const posts = await prisma.post.findMany({
            where: {
                authorId: userId
            },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        avatar: true
                    }
                },
                community: {
                    select: {
                        id: true,
                        name: true,
                        avatar: true
                    }
                },
                children: {
                    include: {
                        author: {
                            select: {
                                id: true,
                                name: true,
                                avatar: true
                            }
                        }
                    }
                }
            }
        });

        return posts;
    } catch (error) {
        console.error("Error fetching user posts:", error);
    }
}



export async function fetchUserParentPosts(userId: string) {

    try {

        const posts = await prisma.post.findMany({
            where: {
                authorId: userId,
                parentId: null
            },
            include: {
                author: {
                    select: {
                        id: true,
                        name: true,
                        avatar: true
                    }
                },
                community: {
                    select: {
                        id: true,
                        name: true,
                        avatar: true
                    }
                },
                children: {
                    include: {
                        author: {
                            select: {
                                id: true,
                                name: true,
                                avatar: true
                            }
                        }
                    }
                }
            },
            orderBy: {id : 'desc'} // show the latest post first
        });

        return posts;
    } catch (error) {
        console.error("Error fetching user posts:", error);
    }
}


export async function fetchAllUsers({
                                     userId,
                                     searchString = "",
                                     pageNumber = 1,
                                     pageSize = 20,
                                 }: {
    userId: string;
    searchString?: string;
    pageNumber?: number;
    pageSize?: number;
}) {
    try {

        const skipAmount = (pageNumber - 1) * pageSize;


         const regex = new RegExp(searchString, "i");


        const users = await prisma.user.findMany({
            where: {
                id: {
                    not: userId, // Exclude the current user from the results.
                },
                OR: [
                    { username: { contains: searchString } },
                    { name: { contains: searchString } }
                ],
            },
            orderBy: { id: 'desc' },
            skip: skipAmount,
            take: pageSize,
        });


        const totalUsersCount = await prisma.user.count({
            where: {
                id: {
                    not: userId, // Exclude the current user from the results.
                },
                OR: [
                    { username: { contains: searchString } },
                    { name: { contains: searchString } }
                ],
            },
        });

        const isNext = totalUsersCount > skipAmount + users.length;

        return { users, isNext };
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}



