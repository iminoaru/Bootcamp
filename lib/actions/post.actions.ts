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