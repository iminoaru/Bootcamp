import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.actions";
import AccountP from "@/components/forms/AccountP";


async function Page() {
    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchUser(user.id);
    if (!userInfo?.admitted) redirect("/auth/admission");

    const userData = {
        clerkId: user.id,
        dbId: userInfo?.id,
        username: userInfo ? userInfo?.username : user.username,
        name: userInfo ? userInfo?.name : user.firstName ?? "",
        bio: userInfo ? userInfo?.bio : "",
        avatar: userInfo ? userInfo?.avatar : user.imageUrl,
    };

    return (
        <>
            <h1 className='head-text'>Edit Profile</h1>
            <p className='mt-3 text-base-regular text-light-2'>Make any changes</p>

            <section className='mt-12'>
                <AccountP user={userData} buttonTitle='Continue' />
            </section>
        </>
    );
}

export default Page;