import * as zod from 'zod'

export const userTypes = zod.object({
    avatar: zod.string().url(),
    name: zod.string().min(2).max(40),
    username: zod.string().min(2).max(40),
    bio: zod.string().min(1).max(400)
})