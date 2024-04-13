import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

import Comment from "@/components/forms/Comment";
import PostCard from "@/components/cards/PostCard";

import { fetchUser } from "@/lib/actions/user.actions";
import { fetchPostById } from "@/lib/actions/post.actions";

export const revalidate = 0;

async function page({ params }: { params: { id: number } }) {
    if (!params.id) return null;

    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchUser(user.id);
    if (!userInfo?.admitted) redirect("/auth/admission");

    const post = await fetchPostById(Number(params.id));

    return (
        <section className='relative'>
            <div>
                {post && (
                    <PostCard
                        id={post.id}
                        currentUserId={user.id}
                        parentId={post.parentId}
                        content={post.text}
                        author={post.author}
                        community={post.community}
                        createdAt={post.createdAt.toISOString()}
                        comments={post.children}
                    />
                )}
            </div>

            <div className='mt-7'>
                <Comment
                    postId={params.id}
                    currentUserImg={userInfo.avatar}
                    currentUserId={JSON.stringify(userInfo.id)}
                />
            </div>

            <div className='mt-10'>
                {post?.children.map((childItem: any) => (
                    <PostCard
                        key={childItem.id}
                        id={childItem.id}
                        currentUserId={user.id}
                        parentId={childItem.parentId}
                        content={childItem.text}
                        author={childItem.author}
                        community={childItem.community}
                        createdAt={childItem.createdAt}
                        comments={childItem.children}
                        isComment
                    />
                ))}
            </div>
        </section>
    );
}

export default page;