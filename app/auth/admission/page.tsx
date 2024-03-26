import {currentUser} from "@clerk/nextjs";
import AccountP from "@/components/forms/AccountP";

export default async function Page(){

    const clerkUser = await currentUser()

    const userInfo = {}

    const userData = {
        clerkId: clerkUser?.id,
        dbId: userInfo?.id,
        username: userInfo?.username || clerkUser?.username,
        name: userInfo?.name || clerkUser?.firstName,
        bio: userInfo?.bio || '',     // bio is only stored in db, not in clerk
        avatar: userInfo?.avatar || clerkUser?.imageUrl
    }


    return(
        <main className='mx-auto flex max-w-3xl flex-col justify-start px-10 py-10'>
            <h1 className='head-text'>Admissions</h1>
            <p className='mt-3 text-base-regular text-light-2'>
                Break the barrier and complete your admission in Bootcamp
            </p>

            <section className='mt-9 bg-dark-4 p-10'>
                <AccountP user = {userData}
                          buttonTitle = 'continue'
                />
            </section>

        </main>
    )
}