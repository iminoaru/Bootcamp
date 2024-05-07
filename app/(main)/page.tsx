

import {currentUser, UserButton} from "@clerk/nextjs";
import {fetchPosts} from "@/lib/actions/post.actions";
import {fetchUser} from "@/lib/actions/user.actions";
import {redirect} from "next/navigation";
import PostCard from "@/components/cards/PostCard";


export default async function Home({ searchParams }: { searchParams: { [key: string]: string | undefined }; }) {

    
     const user = await currentUser();
    if (!user) return null;
    if (!user) return (
        <main>
          <p className='text-heading3-bold text-light-1 flex items-center max-xs:hidden'>Login to see the posts and orders</p>
        </main>
    );

    const userInfo = await fetchUser(user.id);
    if (!userInfo?.admitted) redirect("/auth/admission");
    const result = await fetchPosts(
        searchParams.page ? +searchParams.page : 1,
        30
    );


    return (
        <main>

            <section className='mt-9 flex flex-col gap-10'>
                {result?.posts.length === 0 ? (
                    <p className='no-result'>Looks so empty..</p>
                ) : (
                    <>
                        {result?.posts.map((post) => (
                            <PostCard
                                key={post.id.toString()}
                                id={post.id.toString()}
                                currentUserId={user.id}
                                parentId={post.parentId ? post.parentId.toString() : null}
                                content={post.text}
                                author={{ name: post.author.name, avatar: post.author.avatar || '', id: post.author.id }}
                                community={post.community ? { name: post.community.name, avatar: post.community.avatar || '', id: post.community.id } : null}
                                createdAt={post.createdAt.toISOString()}
                                comments={post.children.map(child => ({ author: { avatar: child.author.avatar || '' } }))}
                            />
                        ))}
                    </>
                )}
            </section>

        </main>
    );
}
