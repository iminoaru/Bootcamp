import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import Postit from "@/components/forms/Postit";
import { fetchUser } from "@/lib/actions/user.actions";
import {fetchPostById} from "@/lib/actions/post.actions";

async function Page({params}: {params: {id: number} }) {
    const user = await currentUser();
    if (!user) return null;


    const userInfo = await fetchUser(user.id);

    const post = await fetchPostById(params.id)

    if (!userInfo?.admitted) redirect("/auth/admission");

    return (
        <>
            <h1 className='head-text'>Create Post</h1>

            <Postit userId={userInfo.id} />
        </>
    );
}

export default Page;