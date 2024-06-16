import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes : ['/hero' , '/api/uploadthing' , '/api/webhook/clerk' , '/auth/signin' , '/auth/signup'],
    ignoredRoutes : ['/api/webhook/clerk']
})

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};