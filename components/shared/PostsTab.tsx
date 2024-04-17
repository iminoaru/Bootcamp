import { redirect } from "next/navigation";

// import { fetchCommunityPosts } from "@/lib/actions/community.actions";
 import { fetchUserParentPosts } from "@/lib/actions/user.actions";

import PostCard from "../cards/PostCard";

interface Result {
    name: string;
    image: string;
    id: string;
    posts: {
        id: number;
        text: string;
        parentId: number | null;
        author: {
            name: string;
            image: string;
            id: string;
        };
        community: {
            id: string;
            name: string;
            image: string;
        } | null;
        createdAt: string;
        children: {
            author: {
                image: string;
            };
        }[];
    }[];
}

interface Props {
    currentUserId: string;
    accountId: string;
    accountType: string;
}

async function PostsTab({ currentUserId, accountId, accountType }: Props) {
    let result;

    result = await fetchUserParentPosts(accountId);

    if (!result) {
        redirect("/");
    }

    return (
        <section className='mt-9 flex flex-col gap-10'>

            {result.map((post) => (
                <PostCard
                    key={post.id}
                    id={post.id}
                    currentUserId={currentUserId}
                    parentId={post.parentId}
                    content={post.text}
                    author={
                        accountType === "User"
                            ? { name: post.author.name, avatar: post.author.avatar, id: post.author.id }
                            : {
                                name: post.author.name,
                                avatar: post.author.avatar,
                                id: post.author.id,
                            }
                    }
                    createdAt={post.createdAt.toString()}
                    comments={post.children}
                    community={post.community}
                />
            ))}
        </section>
    );
}

export default PostsTab;