'use server'

import {PrismaClient, User} from '@prisma/client'
import {babelIncludeRegexes} from "next/dist/build/webpack-config";
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
                parentId : null
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


export const fetchPostById = async (id: number) => {

    try {
        const post = await prisma.post.findUnique({
            where: { id },
            include: {
                author: {
                    select: { id: true, name: true, avatar: true }
                },
                community: {
                    select: { id: true, name: true, avatar: true }
                },
                children: {
                    include: {
                        author: {
                            select: { id: true, name: true, avatar: true }
                        },
                        children: {
                            include: {
                                author: {
                                    select: { id: true, name: true, avatar: true }
                                }
                            }
                        }
                    }
                }
            }
        });

        return post;
    } catch (error) {
        console.error("Error fetching post:", error);
    }
}


export const addCommentToPost = async (postId: number, commentText: string, userId: string) => {

    try {

        const newComment = await prisma.post.create({
            data: {
                text: commentText,
                author: {
                    connect: {
                        id: userId,
                    },
                },
                parent: {
                    connect: {
                        id: Number(postId),
                    },
                },
            }
        });

        // Add the comment's ID to the original post's children array
        await prisma.post.update({
            where: { id: Number(postId) },
            data: {
                children: {
                    connect: {
                        id: newComment.id,
                    },
                },
            },
        });

        return newComment;

    } catch (error) {
        console.error("Error adding comment to post:", error);
    }
}


export const deletePost = async (postId: number, path: string) => {

    try {
        await prisma.post.delete({
            where: { id: postId },
        });

        if (path === "/") {
            return;
        }


    } catch (error) {
        console.error("Error deleting post:", error);
    }
}