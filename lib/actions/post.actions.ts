'use server'

import {PrismaClient, User} from '@prisma/client'
const prisma = new PrismaClient()

type Params = {
    text: string,
    authorId: string,
    communityId: string | null,
    path: string
}

export const createPost = async ({
                                     text,
                                     authorId,
                                     communityId,
                                     path }: Params ): Promise<void> => {

    try {
        const createdPost = await prisma.post.create({
            data: {
                text,
                author: {
                    connect: {
                        id: authorId,
                    },
                },
                community: communityId ? {
                    connect: {
                        id: communityId,
                    },
                } : undefined
            }
        })

        // Update User model
        await prisma.user.update({
            where: {id: authorId},
            data: {
                posts: {
                    connect: {
                        id: createdPost.id,
                    },
                },
            },
        });
    } catch (error) {
        console.error("Error creating post:", error);
    }
}


export const fetchPosts = async (pageNo = 1 , pageSize = 20) => {



    try {
        const posts = await prisma.post.findMany({
            where: {
                parentId : null || undefined
            },
            orderBy: {
                createdAt : 'desc'
            },
            skip: (pageNo - 1) * pageSize,
            take: pageSize,

            include: {
                author: true,
                community: true,
                children: {
                    include: {
                        author: { select: { id: true, name: true, avatar: true } }
                    }
                }
            }
        })

        const totalPosts = await prisma.post.count({
            where: {
                parentId : null || undefined
            }
        })

        const isNextPage = totalPosts > posts.length + ((pageNo - 1) * pageSize)

        return {
            posts,
            isNextPage
        }


    } catch (error) {
        console.error("Error fetching posts:", error);
    }
}