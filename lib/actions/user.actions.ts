'use server'

import {PrismaClient} from '@prisma/client'
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