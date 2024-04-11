import * as z from "zod";

export const PostTypes = z.object({
    post: z.string().min(3, { message: "Minimum 3 characters." }),
    accountId: z.string(),
});

export const CommentTypes = z.object({
    post: z.string().min(3, { message: "Minimum 3 characters." }),
});