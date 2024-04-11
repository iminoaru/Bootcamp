import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import Postit from "@/components/forms/Postit";
import { fetchUser } from "@/lib/actions/user.actions";

async function Page() {
    const user = await currentUser();
    if (!user) return null;


    const userInfo = await fetchUser(user.id);
    if (!userInfo?.admitted) redirect("/admission");

    return (
        <>
            <h1 className='head-text'>Create Post</h1>

            <Postit userId={userInfo.id} />
        </>
    );
}

export default Page;